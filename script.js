// 🧠 Zyqox Advanced Phishing Detection v2.0

function checkURL() {
  const url = document.getElementById("url").value.trim();
  const result = document.getElementById("result");

  if (!url) {
    result.textContent = "Please enter a URL.";
    result.style.color = "#ffa500";
    return;
  }

  let score = 0;
  const lowercaseURL = url.toLowerCase();

  // ⚠️ Suspicious Patterns
  const patterns = [
    /login/, /verify/, /secure/, /update/, /account/, /confirm/, /dropbox/,
    /paypal/, /signin/, /bank/, /webscr/, /validate/
  ];
  patterns.forEach(pattern => {
    if (pattern.test(lowercaseURL)) score += 2;
  });

  // ❌ Common phishing tricks
  if (/@/.test(url)) score += 3; // @ symbol
  if (/https?:\/\/\d{1,3}(\.\d{1,3}){3}/.test(url)) score += 2; // IP URL
  if ((url.match(/\./g) || []).length > 4) score += 1; // Too many dots

  // 🚩 Known suspicious TLDs
  const badTLDs = [".tk", ".ml", ".ga", ".cf", ".gq", ".ru"];
  if (badTLDs.some(tld => lowercaseURL.endsWith(tld))) score += 2;

  // 🪤 Brand impersonations
  const fakeBrands = [/paypa1/, /faceb00k/, /g00gle/, /micros0ft/, /app1e/, /netf1ix/];
  fakeBrands.forEach(pattern => {
    if (pattern.test(lowercaseURL)) score += 2;
  });

  // 🔗 Shortener URLs
  const shorteners = ["bit.ly", "is.gd", "tinyurl.com", "t.co", "shorte.st", "loclx.io"];
  if (shorteners.some(short => lowercaseURL.includes(short))) score += 2;

  // 🧠 AI-inspired Heuristic: high entropy/random characters
  if (/([a-z0-9]{5,}){2,}/.test(lowercaseURL)) score += 1;

  // Final Verdict
  let verdict = "✅ Safe";
  let color = "#00ff88";

  if (score >= 10) {
    verdict = "🚨 High Risk";
    color = "#ff2d75";
  } else if (score >= 6) {
    verdict = "⚠️ Suspicious";
    color = "#ffae42";
  }

  result.innerHTML = `Result: <span style="color: ${color}; font-weight: bold">${verdict} [Score: ${score}/10]</span>`;
}
