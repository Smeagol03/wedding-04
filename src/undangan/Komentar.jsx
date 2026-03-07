import React, { useState, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { database, ref, push, onValue } from "./firebase";
import couplePhoto from "/src/mempelai/8.webp";
import dekorKiri from "/src/dekor/kiri-bawah.webp";
import dekorKanan from "/src/dekor/kanan-atas.webp";

// ─── Constants (outside component = no re-creation) ───
const ATTENDANCE_OPTIONS = {
  hadir: { text: "Hadir", color: "bg-green-100 text-green-700 border-green-200", icon: "✓" },
  tidak_hadir: { text: "Berhalangan", color: "bg-rose/10 text-rose border-rose/20", icon: "✕" },
  ragu: { text: "Masih Ragu", color: "bg-yellow-100 text-yellow-700 border-yellow-200", icon: "?" },
};

const ATTENDANCE_KEYS = Object.keys(ATTENDANCE_OPTIONS);
const MAX_COMMENT_LENGTH = 300;

// ─── Utils ───
const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  if (seconds < 10) return "Baru saja";
  if (seconds < 60) return Math.floor(seconds) + " detik lalu";
  const minutes = seconds / 60;
  if (minutes < 60) return Math.floor(minutes) + " menit lalu";
  const hours = seconds / 3600;
  if (hours < 24) return Math.floor(hours) + " jam lalu";
  const days = seconds / 86400;
  if (days < 30) return Math.floor(days) + " hari lalu";
  const months = seconds / 2592000;
  if (months < 12) return Math.floor(months) + " bulan lalu";
  return Math.floor(seconds / 31536000) + " tahun lalu";
};

// ─── Memoized Comment Card (won't re-render when parent form state changes) ───
const CommentCard = memo(({ comment, index }) => {
  const statusConfig = ATTENDANCE_OPTIONS[comment.attendance] || ATTENDANCE_OPTIONS.hadir;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.08, 0.8) }}
      className="bg-white p-5 sm:p-6 border border-cream-dark hover:border-brown/20 shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        {/* Avatar Monogram */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-brown text-cream rounded flex items-center justify-center font-serif text-xl shadow-inner uppercase">
          {comment.name.charAt(0)}
        </div>

        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h4 className="font-sans font-bold text-brown text-base truncate">
              {comment.name}
            </h4>
            <div className="flex items-center gap-3 shrink-0">
              <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 border rounded-full whitespace-nowrap ${statusConfig.color}`}>
                {statusConfig.icon} {statusConfig.text}
              </span>
              <span className="font-mono text-[10px] text-brown/40 whitespace-nowrap">
                {timeAgo(comment.timestamp)}
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <span className="absolute -left-2 -top-1 font-serif text-3xl leading-none text-brown/10 pointer-events-none select-none">"</span>
            <p className="font-sans text-sm text-brown/80 leading-relaxed font-medium relative z-10 p-1">
              {comment.comment}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});
CommentCard.displayName = "CommentCard";

// ─── Memoized Comment Feed (isolates from form re-renders) ───
const CommentFeed = memo(({ comments }) => (
  <div className="flex-1 max-h-[600px] overflow-y-auto pr-2 sm:pr-4 space-y-4 custom-scrollbar">
    {comments.length > 0 ? (
      comments.map((comment, i) => (
        <CommentCard key={comment.id} comment={comment} index={i} />
      ))
    ) : (
      <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-brown/20 rounded-2xl bg-white/50">
        <span className="text-4xl mb-4 grayscale opacity-50 block">🕊️</span>
        <p className="font-sans text-sm font-bold tracking-widest uppercase text-brown/50">
          Buku tamu masih kosong
        </p>
        <p className="font-sans text-xs text-brown/40 mt-2">
          Jadilah yang pertama mengukir doa.
        </p>
      </div>
    )}
  </div>
));
CommentFeed.displayName = "CommentFeed";

// ─── Main Component ───
const Komentar = () => {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    attendance: "hadir",
  });
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Firebase listener
  useEffect(() => {
    const commentsRef = ref(database, "comments");
    const unsubscribe = onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const commentsList = Object.entries(data)
          .map(([id, value]) => ({ id, ...value }))
          .reverse();
        setComments(commentsList);
      } else {
        setComments([]);
      }
    });
    return () => unsubscribe();
  }, []);

  // Stable callbacks (no re-creation per render)
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "comment" && value.length > MAX_COMMENT_LENGTH) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleAttendanceChange = useCallback((status) => {
    setFormData((prev) => ({ ...prev, attendance: status }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const commentsRef = ref(database, "comments");
      await push(commentsRef, {
        name: formData.name,
        comment: formData.comment,
        attendance: formData.attendance,
        timestamp: new Date().toISOString(),
      });
      setSubmissionStatus("success");
      setFormData({ name: "", comment: "", attendance: "hadir" });
      setTimeout(() => setSubmissionStatus(null), 3000);
    } catch (error) {
      console.error("Error submitting comment:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const charCount = formData.comment.length;
  const isOverLimit = charCount > 280;

  return (
    <section className="relative py-20 lg:py-32 bg-cream overflow-hidden">
      {/* Decorative images */}
      <img
        src={dekorKanan}
        alt=""
        loading="lazy"
        className="absolute top-0 right-0 w-32 md:w-56 opacity-10 pointer-events-none grayscale"
      />
      <img
        src={dekorKiri}
        alt=""
        loading="lazy"
        className="absolute bottom-0 left-0 w-32 md:w-56 opacity-10 pointer-events-none grayscale"
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-xs sm:text-sm tracking-[0.4em] font-bold uppercase text-sage mb-4 border-l-[3px] border-sage pl-4">
            Buku Tamu Digital
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl text-brown font-medium leading-[0.9] tracking-tight">
            Ucapan &amp; <br />
            <span className="text-rose-gold italic font-normal">Doa Restu</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ─── LEFT: Form ─── */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white border-t-[6px] border-brown shadow-sm p-8 sm:p-10 relative">
              <h3 className="font-serif text-3xl text-brown font-medium mb-8">Tinggalkan Pesan</h3>

              <form onSubmit={handleSubmit} className="space-y-7">

                {/* Attendance Selector */}
                <div>
                  <label className="block text-[10px] sm:text-xs font-sans font-bold text-brown/50 uppercase tracking-widest mb-3">
                    Konfirmasi Kehadiran
                  </label>
                  <div className="grid grid-cols-3 bg-cream rounded-lg p-1 gap-1">
                    {ATTENDANCE_KEYS.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => handleAttendanceChange(status)}
                        className={`py-3 text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider rounded-md transition-all duration-200 ${
                          formData.attendance === status
                            ? "bg-brown text-cream shadow-md"
                            : "text-brown/50 hover:text-brown hover:bg-cream-dark"
                        }`}
                      >
                        {ATTENDANCE_OPTIONS[status].icon} {ATTENDANCE_OPTIONS[status].text}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="comment-name" className="block text-[10px] sm:text-xs font-sans font-bold text-brown/50 uppercase tracking-widest mb-2">
                    Nama Pembawa Doa
                  </label>
                  <input
                    type="text"
                    id="comment-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={50}
                    autoComplete="name"
                    className="w-full bg-transparent border-b-2 border-cream-dark focus:border-brown py-3 text-brown font-medium font-sans placeholder-brown/30 transition-colors outline-none"
                    placeholder="Tulis nama lengkap Anda..."
                  />
                </div>

                {/* Message + Character Counter */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <label htmlFor="comment-text" className="block text-[10px] sm:text-xs font-sans font-bold text-brown/50 uppercase tracking-widest">
                      Pesan Hangat
                    </label>
                    <span className={`text-[10px] font-mono tabular-nums ${isOverLimit ? 'text-rose font-bold' : 'text-brown/35'}`}>
                      {charCount}/{MAX_COMMENT_LENGTH}
                    </span>
                  </div>
                  <textarea
                    id="comment-text"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-cream/30 border border-cream-dark focus:border-brown p-4 rounded-xl text-brown font-medium font-sans placeholder-brown/30 transition-colors outline-none resize-none"
                    placeholder="Semoga senantiasa dilimpahi kebahagiaan..."
                  ></textarea>
                  {/* Visual progress bar */}
                  <div className="h-0.5 w-full bg-cream-dark rounded-full mt-1 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-200 rounded-full ${isOverLimit ? 'bg-rose' : 'bg-sage/60'}`}
                      style={{ width: `${Math.min((charCount / MAX_COMMENT_LENGTH) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.comment}
                  className="w-full py-5 font-sans text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 focus:outline-none bg-brown text-cream hover:bg-brown-dark disabled:opacity-40 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Mengirim..." : "Kirim Doa Restu →"}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                  )}
                </button>

                {/* Status */}
                <AnimatePresence>
                  {submissionStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center p-4 bg-green-50 text-green-700 text-sm font-medium rounded-lg border border-green-100"
                    >
                      ✓ Pesan Anda mewarnai hari kami. Terima kasih!
                    </motion.div>
                  )}
                  {submissionStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center p-4 bg-red-50 text-red-700 text-sm font-medium rounded-lg border border-red-100"
                    >
                      ✕ Terjadi kesalahan, silakan coba lagi.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Contextual Photo */}
            <div className="relative hidden lg:block h-64 overflow-hidden shadow-lg mt-10 group">
              <img src={couplePhoto} alt="Mempelai" loading="lazy" className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 border-4 border-white pointer-events-none" />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-serif italic text-brown font-bold tracking-widest shadow-md">
                #Mempelai2026
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Live Feed ─── */}
          <div className="lg:col-span-3 order-1 lg:order-2 flex flex-col h-full">
            <div className="flex items-center justify-between border-b-2 border-brown/15 pb-4 mb-6">
              <h3 className="font-sans text-sm tracking-widest font-bold uppercase text-brown">
                Live Feed
              </h3>
              <div className="flex items-center gap-2 bg-cream-dark px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-brown/70 tabular-nums">{comments.length} Doa</span>
              </div>
            </div>

            <CommentFeed comments={comments} />
          </div>

        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #fdf8f3; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e8dccb; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #c9b896; }
      `}</style>
    </section>
  );
};

export default Komentar;
