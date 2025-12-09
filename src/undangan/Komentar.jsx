import React, { useState, useEffect } from "react";
import { database, ref, push, onValue } from "./firebase";

// Foto placeholder - ganti dengan foto Anda
const couplePhoto = "/src/mempelai/bg.webp";

const Komentar = () => {
  const [formData, setFormData] = useState({
    name: "",
    comment: "",
  });
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Fetch comments from Firebase
  useEffect(() => {
    const commentsRef = ref(database, "comments");
    const unsubscribe = onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const commentsList = Object.entries(data)
          .map(([id, value]) => ({
            id,
            ...value,
          }))
          .reverse(); // Terbaru di atas
        setComments(commentsList);
      } else {
        setComments([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const commentsRef = ref(database, "comments");
      await push(commentsRef, {
        name: formData.name,
        comment: formData.comment,
        timestamp: new Date().toISOString(),
      });

      setSubmissionStatus("success");
      setFormData({ name: "", comment: "" });
      setTimeout(() => setSubmissionStatus(null), 3000);
    } catch (error) {
      console.error("Error submitting comment:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format tanggal
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Combined Background - Single layer untuk mengurangi repaint di Android */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, #fdf8f3, rgba(201,169,166,0.05) 50%, #fdf8f3),
            radial-gradient(ellipse at 10% 20%, rgba(201,169,166,0.08) 0%, transparent 40%),
            radial-gradient(ellipse at 90% 80%, rgba(201,185,150,0.08) 0%, transparent 40%),
            radial-gradient(ellipse at 33% 50%, rgba(139,157,131,0.05) 0%, transparent 40%)
          `,
          willChange: "transform",
        }}
      />

      {/* ========================================== */}
      {/* PLACEHOLDER DEKORASI - KIRI ATAS */}
      {/* Contoh: <img src="/path/ke/bunga.png" className="absolute top-10 left-10 w-32 h-32 opacity-30" /> */}
      {/* ========================================== */}

      {/* ========================================== */}
      {/* PLACEHOLDER DEKORASI - KANAN ATAS */}
      {/* Contoh: <img src="/path/ke/bunga.png" className="absolute top-10 right-10 w-32 h-32 opacity-30" /> */}
      {/* ========================================== */}

      <div className="relative w-full">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 px-4">
          {/* Pre-title */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="block w-8 sm:w-12 md:w-16 h-px bg-linear-to-r from-transparent via-gold/50 to-gold/50"></span>
            <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-sage">
              Ucapan & Doa
            </p>
            <span className="block w-8 sm:w-12 md:w-16 h-px bg-linear-to-l from-transparent via-gold/50 to-gold/50"></span>
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown mb-4 sm:mb-5">
            Kirim Ucapan
          </h2>

          {/* Decorative element */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="block w-10 sm:w-14 md:w-20 h-px bg-linear-to-r from-transparent to-rose/40"></span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gold/40"></div>
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose/50"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gold/40"></div>
            </div>
            <span className="block w-10 sm:w-14 md:w-20 h-px bg-linear-to-l from-transparent to-rose/40"></span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Photo Section */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                {/* Outer glow */}
                <div className="absolute -inset-3 sm:-inset-4 bg-linear-to-br from-rose/15 via-gold/10 to-sage/15 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Photo Frame */}
                <div className="relative bg-white/80 backdrop-blur-sm border border-rose/20 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-xl">
                  {/* Decorative corners */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-8 h-8 sm:w-10 sm:h-10 border-l-2 border-t-2 border-gold/40 rounded-tl-lg"></div>
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 border-r-2 border-t-2 border-gold/40 rounded-tr-lg"></div>
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-8 h-8 sm:w-10 sm:h-10 border-l-2 border-b-2 border-gold/40 rounded-bl-lg"></div>
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 border-r-2 border-b-2 border-gold/40 rounded-br-lg"></div>

                  {/* Photo */}
                  <div className="relative aspect-4/5 rounded-xl sm:rounded-2xl overflow-hidden">
                    <img
                      src={couplePhoto}
                      alt="Foto Pasangan"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>

                  {/* Caption */}
                  <div className="text-center mt-4 sm:mt-5">
                    <p className="font-serif text-lg sm:text-xl text-brown italic">
                      "Terima kasih atas doa dan ucapannya"
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <span className="block w-8 h-px bg-rose/40"></span>
                      <span className="text-rose">❤</span>
                      <span className="block w-8 h-px bg-rose/40"></span>
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white/80 rounded-full shadow-lg flex items-center justify-center border border-rose/20">
                  <span className="text-xl sm:text-2xl">💕</span>
                </div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 bg-white/80 rounded-full shadow-lg flex items-center justify-center border border-gold/20">
                  <span className="text-lg sm:text-xl">✨</span>
                </div>
              </div>
            </div>

            {/* Right - Comment Form & List */}
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              {/* Comment Form */}
              <div className="relative group">
                <div className="absolute -inset-2 sm:-inset-3 bg-linear-to-br from-rose/10 via-gold/5 to-sage/10 rounded-2xl sm:rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <form
                  onSubmit={handleSubmit}
                  className="relative bg-white/80 backdrop-blur-sm border border-rose/20 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl"
                >
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-gold/10 to-transparent rounded-tr-2xl sm:rounded-tr-3xl"></div>

                  <h3 className="font-serif text-xl sm:text-2xl text-brown mb-4 sm:mb-5">
                    Tulis Ucapan
                  </h3>

                  {/* Name Input */}
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-sans font-medium text-brown mb-2"
                    >
                      Nama Anda <span className="text-rose">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 border border-sage/30 rounded-xl text-brown placeholder-sage/50 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 focus:outline-none"
                      placeholder="Nama Lengkap"
                    />
                  </div>

                  {/* Comment Input */}
                  <div className="mb-5">
                    <label
                      htmlFor="comment"
                      className="block text-sm font-sans font-medium text-brown mb-2"
                    >
                      Ucapan / Doa <span className="text-rose">*</span>
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 bg-white/70 border border-sage/30 rounded-xl text-brown placeholder-sage/50 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 focus:outline-none resize-none"
                      placeholder="Tuliskan ucapan dan doa terbaik Anda..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative w-full py-3 px-4 rounded-xl font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300 overflow-hidden ${
                      isSubmitting
                        ? "bg-sage/50 text-white cursor-not-allowed"
                        : "bg-linear-to-r from-brown via-brown to-brown/90 text-white hover:shadow-lg hover:shadow-brown/20 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-gold/30"
                    }`}
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                          Kirim Ucapan
                        </>
                      )}
                    </span>
                  </button>

                  {/* Success message */}
                  {submissionStatus === "success" && (
                    <div className="mt-4 flex items-center gap-2 p-3 bg-green-50/80 border border-green-200/50 rounded-lg">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-sm text-green-700">
                        Ucapan berhasil terkirim!
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-lg sm:text-xl text-brown">
                    Ucapan Tamu ({comments.length})
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose/40"></div>
                    <div className="w-2 h-2 rounded-full bg-gold/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-rose/40"></div>
                  </div>
                </div>

                {/* Scrollable Comments Container */}
                <div className="max-h-[400px] overflow-y-auto space-y-3 pr-2 scrollbar-thin scrollbar-thumb-rose/30 scrollbar-track-transparent">
                  {comments.length > 0 ? (
                    comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="group relative bg-white/60 backdrop-blur-sm border border-rose/10 rounded-xl p-4 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300"
                      >
                        {/* Comment Header */}
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            {/* Avatar */}
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-rose/20 to-gold/20 flex items-center justify-center shadow-sm">
                              <span className="font-serif text-sm sm:text-base text-brown font-medium">
                                {comment.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <p className="font-sans text-sm sm:text-base font-medium text-brown">
                                {comment.name}
                              </p>
                              <p className="font-sans text-[10px] sm:text-xs text-sage/70">
                                {formatDate(comment.timestamp)}
                              </p>
                            </div>
                          </div>
                          {/* Decorative heart */}
                          <span className="text-rose/40 text-sm group-hover:text-rose/60 transition-colors">
                            ❤
                          </span>
                        </div>

                        {/* Comment Content */}
                        <p className="font-sans text-sm text-sage-dark leading-relaxed pl-12 sm:pl-[52px]">
                          {comment.comment}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-sage/60">
                      <span className="text-3xl mb-2 block">💬</span>
                      <p className="font-sans text-sm">
                        Belum ada ucapan. Jadilah yang pertama!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* PLACEHOLDER DEKORASI - KIRI BAWAH */}
        {/* Contoh: <img src="/path/ke/bunga.png" className="absolute bottom-10 left-10 w-24 opacity-20" /> */}
        {/* ========================================== */}

        {/* ========================================== */}
        {/* PLACEHOLDER DEKORASI - KANAN BAWAH */}
        {/* Contoh: <img src="/path/ke/bunga.png" className="absolute bottom-10 right-10 w-24 opacity-20" /> */}
        {/* ========================================== */}

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center gap-3 mt-12 sm:mt-16 md:mt-20">
          <span className="block w-8 sm:w-12 h-px bg-linear-to-r from-transparent to-gold/40"></span>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 border border-gold/30 flex items-center justify-center shadow-md">
            <span className="text-sm sm:text-base">💬</span>
          </div>
          <span className="block w-8 sm:w-12 h-px bg-linear-to-l from-transparent to-gold/40"></span>
        </div>
      </div>
    </section>
  );
};

export default Komentar;
