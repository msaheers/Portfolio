"use client";
import { useEffect } from "react";
import "../public/mrcook.css";
import ContactModal from "./components/ContactModal";

export default function Home() {
  // Header scroll animation
  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrolling for nav links
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }, []);

  return (
    <main>
      {/* ================= HEADER ================= */}
      <header>
        <h1 id="Name" className="candidate_name">
          &lt; MISHAL SAHEERSHA &gt;
        </h1>

        <nav className="top-nav">
          <a href="#About">Home</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
          <a
            href="#"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link Copied!");
            }}
          >
            Share
          </a>
        </nav>
      </header>

      {/* ================= ABOUT SECTION ================= */}
      <section id="About" className="about-container">
        <div className="about-left">
          <div className="profile-container">
            <img
              src="/mishalpic.png"
              alt="Mishal Saheersha"
              className="profile-pic"
            />
            <h1>Mishal Saheersha</h1>
            <p className="subtitle">Full Stack Developer</p>
            <p className="intro">
              <a href="mailto:mishalsaheersha10@gmail.com">
                Hey There 😊! <br /> Follow me on:
              </a>
            </p>

            {/* ====== Social Icons ====== */}
            <div className="Socials">
              <a
                href="https://github.com/msaheers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons8-github-logo-50.png"
                  alt="GitHub"
                  className="icon-img"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/mishal-saheer-a90146323"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons8-linkedin-50.png"
                  alt="LinkedIn"
                  className="icon-img"
                />
              </a>

              <a
                href="https://x.com/Mishallad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons8-twitter-50.png"
                  alt="Twitter (X)"
                  className="icon-img"
                />
              </a>

              <a
                href="https://www.instagram.com/mis_hallwriter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/icons8-instagram-50.png"
                  alt="Instagram"
                  className="icon-img"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="about-right">
          <h2 id="about-me">About Me 🚀</h2>
          <p>
            Hi! I'm a passionate Full Stack Developer who loves turning
            ideas into clean, responsive, and user-friendly web applications. I'm
            constantly learning new tools and improving my craft because great
            design and code deserve attention to detail.
            <br />
            <br />
            I studied at <b>42 Porto</b> and am now leveling up through the{" "}
            <b>Bytes4Future Bootcamp</b>, building real-world projects that
            combine creativity with functionality.
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
<section id="Skills" className="skills-section my-box">
  <h2 style={{ textAlign: "center" }}>My Skills</h2>
  <div className="skill-icon">
    <img src="/ht.png" alt="HTML" />
    <img src="/css.png" alt="CSS" />
    <img src="/js.png" alt="JavaScript" />
    <img src="/rct.png" alt="React" />
    <img src="/bootstrap-original-wordmark.png" alt="Bootstrap" />
    <img src="/nextjs-original.png" alt="Next.js" />
    <img src="/nodejs-icon.png" alt="Node.js" />
    <img src="/go-lang-dark.png" alt="GoLang" />
  </div>
</section>


      {/* ================= PROJECTS ================= */}
<section id="Projects" className="projects-section">
  <h2 className="section-heading">My Projects</h2>

  <div className="projects-grid">
    {/* 🧠 Spotidados */}
    <a
      href="https://github.com/MickSabogal/spotidados.git"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src="/logo.png" alt="Spotidados" className="project-logo" />
      <p className="project-title">Spotidados 🎧</p>
    </a>

    {/* 🧩 DevRats */}
    <a
      href="https://github.com/MickSabogal/devrats.git"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src="/logo_devrats.png" alt="DevRats" className="project-logo" />
      <p className="project-title">DevRats 🖥️</p>
    </a>

    {/* 🎨 Reart */}
    <a
      href="https://github.com/gabebruu/reartfinal.git"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src="/logoreart.png" alt="Reart" className="project-logo" />
      <p className="project-title">Reart 🎨</p>
    </a>

    {/* ❄️ NetFreeze */}
    <a
      href="https://github.com/msaheers/react_app1.git"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src="/netfreeze.png" alt="NetFreeze" className="project-logo" />
      <p className="project-title">NetFreeze ❄️</p>
    </a>

    {/* ⚙️ Name Generator */}
    <a
      href="https://github.com/msaheers/namegenerator"
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <img src="/namegenerator.png" alt="Name Generator" className="project-logo" />
      <p className="project-title">Name Generator ⚙️</p>
    </a>
  </div>
</section>


      {/* ================= CONTACT SECTION ================= */}
<section className="my-box">
  <div className="contact-wrapper-final">
    <div className="contact-content">
      <h2>Let’s Build Something Awesome Together 💡</h2>
      <p>
        Have a business idea, startup concept, or personal brand that deserves a stunning digital presence?  
        I help you turn that vision into a clean, responsive, and powerful website that actually converts.
      </p>

      <p>
        Whether you need a portfolio that shines, a landing page that sells,
        or a full-stack web app, I’ll bring your ideas to life with precision,
        design, and performance.
      </p>

      <h3 style={{ color: "#00ffc8", marginTop: "1.2rem" }}>
        Ready to make your project real?
      </h3>
    </div>

    <div className="contact-flexbox">
      <img
        src="/qrcode.png"
        alt="Scan to connect with Mishal Saheersha"
        className="contact-qr-small"
      />
      <ContactModal />
    </div>
  </div>
</section>
      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <nav className="footer-nav">
          <a href="#">
            <i className="fas fa-home"></i>
          </a>
          <a href="#">
            <i className="fas fa-list"></i>
          </a>
          <a
            href="#"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              alert("Link Copied!");
            }}
          >
            <i className="fas fa-share-alt"></i>
          </a>
        </nav>
        <p>© 2025 Mishal Saheersha. All rights reserved.</p>
      </footer>
    </main>
  );
}
