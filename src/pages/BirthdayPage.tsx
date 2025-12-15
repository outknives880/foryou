import React, { useEffect, useState } from "react";
import Cake3D from "../components/Cake3D.js";
import "../styles/main.css";

const BirthdayPage: React.FC = () => {
  const targetDate = new Date("2025-12-20T00:00:00");
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="birthday-page">
      <h1 className="title">cake buat ayang hehe</h1>
      <Cake3D />
      <div className="countdown">{countdown}</div>
      <p className="date">20 Desember 2025 – tanggal di mana senyumanmu akan menerangi hatiku </p>
    </div>
  );
};

export default BirthdayPage;
