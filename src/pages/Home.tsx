import React from "react";
import "../styles/Home.css";

const MainGreeting: React.FC = () => {
  return (
    <div className="page-lock">
      <section className="main-greeting fade-in delay-1">
        {/* 🎀 Ucapan dan elemen utama */}
        <h2 className="subtitle">for my angel</h2>
        <h1 className="target-name">Afida Destiana</h1>

        <div className="photo-wrapper">
          <img
            src="/photo.jpg"
            alt="Foto Afida"
            className="birthday-photo"
          />
        </div>

        <p className="birthday-wish">Happy Birthday Sayangku CIntaku</p>

        <div className="date-banner">🎉 20 Desember 2025 🎉</div>

        <div className="bottom-message">
          <p className="sweet-message">
            "Semoga Panjang Umur, Sehat Selalu, dan Bahagia Selamanya ya.
            Aku akan selalu ada untuk kamu, mendukung dan mencintai kamu
            sepenuh hati. Love you so much 💖"
          </p>
        </div>
      </section>
    </div>
  );
};

export default MainGreeting;
