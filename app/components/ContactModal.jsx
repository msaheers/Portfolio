"use client";
import { useState } from "react";
import styles from "../page.module.css";

export default function ContactModal() {
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState("");

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setStatus(result.success ? "✅ Message sent!" : "❌ Something went wrong.");
    if (result.success) e.target.reset();
  };

  return (
    <>
      {/* Contact Button */}
      <button onClick={openForm} className={styles.contactBtn}>
        Contact Me
      </button>

      {/* Modal */}
      {showForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalCard}>
            <button className={styles.closeBtn} onClick={closeForm}>
              ×
            </button>
            <h2>Contact Me</h2>
            <p>Let's connect and bring your ideas to life 🚀</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message..."
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>

            {status && <p className={styles.status}>{status}</p>}
          </div>
        </div>
      )}
    </>
  );
}
