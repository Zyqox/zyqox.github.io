# 🛡️ Zyqox – Phishing URL Scanner

Zyqox is a **public-safe phishing URL detector** that helps users identify potentially dangerous or suspicious websites using smart heuristics. Built with a sleek **black-gold UI**, this project offers a lightweight, privacy-friendly scanner — ideal for cybersecurity awareness and personal use.

---

## 🚀 Live Website

🌐 [Visit Zyqox](https://zyqox.github.io)

---

## 📸 Preview

![Zyqox Screenshot](https://github.com/Zyqox/zyqox.github.io/blob/main/Logo_1.png?raw=true)

---

## 💡 Features

- 🔍 Real-time phishing URL scanning
- 🧠 Smart scoring system with detailed reasons
- 🌐 Detects URL shorteners, suspicious keywords, brand misspellings, and more
- 💬 Built-in feedback form (Formspree)
- 🎨 Glassmorphism UI with black & gold aesthetic
- 📱 Fully responsive & mobile-ready

---

## 🛠️ Built With

- **HTML5**
- **CSS3** (Glassmorphism design)
- **JavaScript** (Vanilla JS – no frameworks)
- **Formspree** (feedback handling)

---

## 🧠 How It Works

The scanner checks for:
- 🚩 Suspicious keywords (e.g. `login`, `verify`, `secure`)
- 🔗 Malicious top-level domains (`.tk`, `.ru`, etc.)
- 🎭 Brand misspellings (`paypa1`, `g00gle`, etc.)
- 🔒 Use of IP addresses, shorteners, and `@` in URLs

Each factor adds to a **risk score**. The higher the score, the more dangerous the link.

---

## 🧪 Run Locally

```bash
git clone https://github.com/Zyqox/zyqox.github.io.git
cd zyqox.github.io
open index.html   # or use Live Server / browser
