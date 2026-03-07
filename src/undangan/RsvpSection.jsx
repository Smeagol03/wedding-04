import React, { useState, useCallback } from "react";
import { database, ref, push } from "./firebase";
import { motion } from "motion/react";

import atasImg from "../dekor/atas.webp";
import bgImage from "../mempelai/1.webp";

// Confetti animation utility
const triggerConfetti = () => {
  const container = document.createElement("div");
  container.style.cssText = "position:fixed;inset:0;z-index:99999;pointer-events:none;overflow:hidden;";
  document.body.appendChild(container);

  const colors = ["#c9a9a6", "#c9b996", "#8b9d83", "#5d4e42", "#d4a8a0", "#fdf8f3", "#FFD700"];

  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("div");
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const size = Math.random() * 8 + 4;
    const delay = Math.random() * 0.5;
    const duration = Math.random() * 2 + 2;
    const rotation = Math.random() * 720 - 360;
    const shape = Math.random() > 0.5 ? "50%" : `${Math.random() * 4}px`;

    piece.style.cssText = `
      position:absolute;
      left:${left}%;
      top:-10px;
      width:${size}px;
      height:${size * (Math.random() * 0.5 + 0.5)}px;
      background:${color};
      border-radius:${shape};
      animation:confettiFall ${duration}s ease-out ${delay}s forwards;
      transform:rotate(${rotation}deg);
    `;
    container.appendChild(piece);
  }

  // Add keyframes if not exists
  if (!document.getElementById("confetti-keyframes")) {
    const style = document.createElement("style");
    style.id = "confetti-keyframes";
    style.textContent = `
      @keyframes confettiFall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        25% { opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  setTimeout(() => container.remove(), 4000);
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const RsvpSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "Hadir",
    guests: 1,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

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
      const rsvpRef = ref(database, "rsvp");
      await push(rsvpRef, {
        name: formData.name,
        attendance: formData.attendance,
        guests: Number(formData.guests),
        message: formData.message,
        timestamp: new Date().toISOString(),
      });

      setSubmissionStatus("success");
      setFormData({ name: "", attendance: "Hadir", guests: 1, message: "" });
      // Confetti + haptic on success
      triggerConfetti();
      if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Image with Fixed Parallax Effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Light Overlay to ensure brown text remains readable */}
        <div className="absolute inset-0 bg-black/35 md:bg-black/25"></div>
      </div>

      {/* Premium Background Blends */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(circle at top center, rgba(201,169,166,0.15) 0%, transparent 40%),
            radial-gradient(ellipse at bottom left, rgba(139,157,131,0.15) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(201,185,150,0.15) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Delicate Grid Pattern for Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDBMMDAgNDAiIHN0cm9rZT0icmdiYSgyMDEsIDE4NSLCAxNTAsIDAuMikiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0wIDBMNDAgMCIgc3Ryb2tlPSJyZ2JhKDIwMSwgMTg1LCAxNTAsIDAuMikiIHN0cm9rZS13aWR0aD0iMC41IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg==')] z-0"></div>

      {/* Elegant Header/Footer Decorations using full-width images */}
      <motion.img 
        src={atasImg} 
        alt="" 
        loading="lazy"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full object-cover opacity-80 mix-blend-multiply pointer-events-none z-10" 
      />
      
      <motion.img 
        src={atasImg} 
        alt="" 
        loading="lazy"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full object-cover rotate-180 opacity-80 mix-blend-multiply pointer-events-none z-10" 
      />

      <div className="relative z-20 w-full">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16 px-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-16 md:w-24 h-px bg-linear-to-r from-transparent to-gold"></span>
            <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase text-white font-medium">
              Kehadiran Anda
            </span>
            <span className="w-16 md:w-24 h-px bg-linear-to-l from-transparent to-gold"></span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Reservasi
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-white/90 max-w-lg mx-auto leading-relaxed italic opacity-90">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
        </motion.div>

        {/* Premium Form Card */}
        <motion.div 
          className="max-w-xl mx-auto px-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative group">
            {/* Elegant Golden Glow */}
            <div className="absolute -inset-1 bg-linear-to-br from-gold/30 via-transparent to-rose/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>

            <form
              onSubmit={handleSubmit}
              className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-4xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all"
            >
              {/* Subtle inner border */}
              <div className="absolute inset-3 border border-gold/20 rounded-[1.25rem] pointer-events-none"></div>

              {/* Name Field */}
              <div className="relative mb-8 z-10">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b border-white/40 py-3 text-white placeholder-transparent focus:border-gold focus:outline-none transition-colors"
                  placeholder="Nama Lengkap"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-3.5 text-xs font-sans text-white/80 tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold uppercase"
                >
                  Nama Tamu
                </label>
              </div>

              {/* Attendance and Guests Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 z-10 relative">
                <div className="relative">
                  <select
                    id="attendance"
                    name="attendance"
                    value={formData.attendance}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/40 py-3 text-white focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="Hadir" className="bg-cream text-brown">Ya, saya akan Hadir</option>
                    <option value="Tidak Hadir" className="bg-cream text-brown">Maaf, Tidak Bisa Hadir</option>
                  </select>
                  <label htmlFor="attendance" className="absolute left-0 -top-3.5 text-xs font-sans text-white/80 tracking-wider uppercase">
                    Kehadiran
                  </label>
                  <div className="absolute right-0 top-4 pointer-events-none text-white/60">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/40 py-3 text-white focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num} className="bg-cream text-brown">{num} Orang</option>
                    ))}
                  </select>
                  <label htmlFor="guests" className="absolute left-0 -top-3.5 text-xs font-sans text-white/80 tracking-wider uppercase">
                    Jumlah Tamu
                  </label>
                  <div className="absolute right-0 top-4 pointer-events-none text-white/60">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="relative mb-10 z-10">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="peer w-full bg-transparent border-b border-white/40 py-3 text-white placeholder-transparent focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Pesan, harapan, atau doa"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-3.5 text-xs font-sans text-white/80 tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/60 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold uppercase"
                >
                  Pesan & Doa
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center z-10 relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    relative inline-flex items-center justify-center gap-3 px-10 py-4 overflow-hidden rounded-full font-sans text-xs tracking-[2px] font-medium uppercase transition-all duration-500
                    ${isSubmitting 
                      ? "bg-sage/40 text-white cursor-not-allowed" 
                      : "bg-brown text-white hover:bg-brown-dark shadow-[0_10px_20px_rgba(93,78,66,0.3)] hover:shadow-[0_15px_25px_rgba(93,78,66,0.4)] hover:-translate-y-1"}
                  `}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                       <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Menyimpan...
                    </span>
                  ) : (
                    <>
                      <span>Kirim Konfirmasi</span>
                      <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Success/Error Feedback */}
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: submissionStatus ? 1 : 0, height: submissionStatus ? 'auto' : 0 }}
                className="overflow-hidden mt-6"
              >
                {submissionStatus === "success" && (
                  <div className="bg-white/10 border border-white/20 text-white p-4 rounded-xl text-center flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-sans text-sm font-medium">Terima kasih atas konfirmasinya.</span>
                  </div>
                )}

                {submissionStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-800 p-4 rounded-xl text-center flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-sans text-sm font-medium">Terjadi kesalahan, mohon coba kembali.</span>
                  </div>
                )}
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Elegant Bottom Divider */}
        <div className="flex items-center justify-center gap-3 mt-16 md:mt-24 pointer-events-none">
          <span className="block w-12 h-px bg-linear-to-r from-transparent to-gold/40"></span>
          <div className="w-2.5 h-2.5 rotate-45 border border-gold/60"></div>
          <span className="block w-12 h-px bg-linear-to-l from-transparent to-gold/40"></span>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
