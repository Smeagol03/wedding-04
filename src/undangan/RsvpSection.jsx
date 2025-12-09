import React, { useState } from "react";
import { database, ref, push } from "./firebase";

// --- Komponen Utama RSVP ---
const RsvpSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "Hadir",
    guests: 1,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success' atau 'error'

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
      // Simpan ke Firebase Realtime Database
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
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
      {/* Background with linear */}
      <div className="absolute inset-0 bg-linear-to-b from-sage-light/50 via-cream to-sage-light/30"></div>

      {/* Decorative background blurs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sage/5 rounded-full blur-3xl"></div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-linear(#8B9D83 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>

      {/* ========================================== */}
      {/* PLACEHOLDER DEKORASI - KIRI ATAS */}
      {/* Ganti dengan gambar/ikon dekoratif Anda */}
      {/* Contoh: <img src="/path/ke/bunga-kiri.png" className="absolute top-10 left-10 w-32 h-32 opacity-30" /> */}
      {/* ========================================== */}

      {/* ========================================== */}
      {/* PLACEHOLDER DEKORASI - KANAN ATAS */}
      {/* Ganti dengan gambar/ikon dekoratif Anda */}
      {/* Contoh: <img src="/path/ke/bunga-kanan.png" className="absolute top-10 right-10 w-32 h-32 opacity-30" /> */}
      {/* ========================================== */}

      <div className="relative w-full">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 px-4">
          {/* Pre-title with decorative elements */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <span className="block w-8 sm:w-12 md:w-16 h-px bg-linear-to-r from-transparent via-gold/50 to-gold/50"></span>
            <p className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase text-sage">
              Konfirmasi Kehadiran
            </p>
            <span className="block w-8 sm:w-12 md:w-16 h-px bg-linear-to-l from-transparent via-gold/50 to-gold/50"></span>
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown mb-4 sm:mb-5">
            RSVP
          </h2>

          {/* Decorative element under title */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="block w-10 sm:w-14 md:w-20 h-px bg-linear-to-r from-transparent to-rose/40"></span>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gold/40"></div>
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose/50"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gold/40"></div>
            </div>
            <span className="block w-10 sm:w-14 md:w-20 h-px bg-linear-to-l from-transparent to-rose/40"></span>
          </div>

          <p className="font-sans text-xs sm:text-sm md:text-base text-sage-dark max-w-xl mx-auto leading-relaxed">
            Mohon konfirmasi kehadiran Anda selambat-lambatnya satu minggu
            sebelum acara. Kehadiran Anda adalah kebahagiaan kami.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Form Card with Glassmorphism */}
          <div className="relative group">
            {/* Outer glow effect */}
            <div className="absolute -inset-2 sm:-inset-3 bg-linear-to-br from-rose/10 via-gold/5 to-sage/10 rounded-2xl sm:rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <form
              onSubmit={handleSubmit}
              className="relative bg-white/80 backdrop-blur-sm border border-rose/20 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-gold/10 to-transparent rounded-tr-2xl sm:rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-linear-to-tr from-rose/10 to-transparent rounded-bl-2xl sm:rounded-bl-3xl"></div>

              {/* Input Nama */}
              <div className="relative mb-6">
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

              {/* Pilihan Kehadiran & Jumlah Tamu */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Pilihan Kehadiran */}
                <div className="relative">
                  <label
                    htmlFor="attendance"
                    className="block text-sm font-sans font-medium text-brown mb-2"
                  >
                    Konfirmasi Kehadiran <span className="text-rose">*</span>
                  </label>
                  <select
                    id="attendance"
                    name="attendance"
                    value={formData.attendance}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/70 border border-sage/30 rounded-xl text-brown focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="Hadir">Ya, saya akan Hadir</option>
                    <option value="Tidak Hadir">
                      Maaf, saya Tidak Bisa Hadir
                    </option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-4 top-[42px] pointer-events-none">
                    <svg
                      className="w-4 h-4 text-sage"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Jumlah Tamu */}
                <div className="relative">
                  <label
                    htmlFor="guests"
                    className="block text-sm font-sans font-medium text-brown mb-2"
                  >
                    Jumlah Tamu <span className="text-rose">*</span>
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    min="1"
                    max="5"
                    required
                    className="w-full px-4 py-3 bg-white/70 border border-sage/30 rounded-xl text-brown focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 focus:outline-none"
                  />
                  <p className="mt-1 text-xs text-sage/70">
                    Termasuk Anda (max. 5 orang)
                  </p>
                </div>
              </div>

              {/* Pesan/Doa */}
              <div className="relative mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-sans font-medium text-brown mb-2"
                >
                  Pesan / Doa Terbaik{" "}
                  <span className="text-sage/60">(Opsional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/70 border border-sage/30 rounded-xl text-brown placeholder-sage/50 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200 focus:outline-none resize-none"
                  placeholder="Tuliskan ucapan atau doa terbaik Anda di sini..."
                ></textarea>
              </div>

              {/* Tombol Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`relative w-full py-3.5 sm:py-4 px-6 rounded-xl font-sans text-sm font-semibold uppercase tracking-wider transition-all duration-300 overflow-hidden ${
                  isSubmitting
                    ? "bg-sage/50 text-white cursor-not-allowed"
                    : "bg-linear-to-r from-brown via-brown to-brown/90 text-white hover:shadow-lg hover:shadow-brown/20 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-gold/30"
                }`}
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      {/* Loading spinner */}
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
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Kirim Konfirmasi
                    </>
                  )}
                </span>
              </button>

              {/* Status Messages */}
              {submissionStatus === "success" && (
                <div className="mt-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-green-500/10 to-emerald-500/10 rounded-xl blur-sm"></div>
                  <div className="relative flex items-center gap-3 p-4 bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-xl">
                    <div className="shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
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
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-green-800">
                        Konfirmasi Berhasil Terkirim!
                      </p>
                      <p className="font-sans text-xs text-green-600/80">
                        Terima kasih telah mengkonfirmasi kehadiran Anda.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="mt-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-red-500/10 to-rose-500/10 rounded-xl blur-sm"></div>
                  <div className="relative flex items-center gap-3 p-4 bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-xl">
                    <div className="shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-sm font-medium text-red-800">
                        Gagal Mengirim Konfirmasi
                      </p>
                      <p className="font-sans text-xs text-red-600/80">
                        Terjadi kesalahan. Mohon coba lagi nanti.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* ========================================== */}
        {/* PLACEHOLDER DEKORASI - KIRI BAWAH */}
        {/* Ganti dengan gambar/ikon dekoratif Anda */}
        {/* Contoh: <img src="/path/ke/daun-kiri.png" className="absolute bottom-10 left-10 w-24 h-24 opacity-20" /> */}
        {/* ========================================== */}

        {/* ========================================== */}
        {/* PLACEHOLDER DEKORASI - KANAN BAWAH */}
        {/* Ganti dengan gambar/ikon dekoratif Anda */}
        {/* Contoh: <img src="/path/ke/daun-kanan.png" className="absolute bottom-10 right-10 w-24 h-24 opacity-20" /> */}
        {/* ========================================== */}

        {/* Bottom decorative element */}
        <div className="flex items-center justify-center gap-3 mt-12 sm:mt-16 md:mt-20">
          <span className="block w-8 sm:w-12 h-px bg-linear-to-r from-transparent to-gold/40"></span>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/80 border border-gold/30 flex items-center justify-center shadow-md">
            <span className="text-sm sm:text-base">💌</span>
          </div>
          <span className="block w-8 sm:w-12 h-px bg-linear-to-l from-transparent to-gold/40"></span>
        </div>
      </div>
    </section>
  );
};

export default RsvpSection;
