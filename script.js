function checkURL() {
  const url = document.getElementById("url").value.trim();
  const resultEl = document.getElementById("result");

  if (!url) {
    resultEl.innerText = "⚠️ Please enter a URL.";
    resultEl.style.color = "#ffcc00";
    return;
  }

  let score = 0;
  let reasons = [];

  const suspiciousKeywords = [
    "login", "secure", "verify", "account", "bank", "dropbox",
    "update", "signin", "confirm", "validate"
  ];
  const badTLDs = [".tk", ".ml", ".ga", ".cf", ".gq", ".ru"];
  const shorteners = ["bit.ly", "is.gd", "t.co", "tinyurl.com", "ow.ly"];
  const urlLower = url.toLowerCase();

  // 1. Suspicious keywords
  suspiciousKeywords.forEach((word) => {
    if (urlLower.includes(word)) {
      score += 2;
      reasons.push(`Contains keyword "${word}"`);
    }
  });

  // 2. Bad TLD
  badTLDs.forEach((tld) => {
    if (urlLower.endsWith(tld)) {
      score += 2;
      reasons.push(`Ends with risky TLD "${tld}"`);
    }
  });

  // 3. Shortener services
  shorteners.forEach((short) => {
    if (urlLower.includes(short)) {
      score += 2;
      reasons.push(`Uses URL shortener "${short}"`);
    }
  });

  // 4. IP address in URL
  if (/http[s]?:\/\/\d{1,3}(\.\d{1,3}){3}/.test(url)) {
    score += 2;
    reasons.push("Uses IP address");
  }

  // 5. @ symbol in URL
  if (url.includes("@")) {
    score += 2;
    reasons.push("Contains '@' symbol");
  }

  // 6. Brand misspellings
  if (/paypa1|faceb00k|g00gle|micros0ft|netf1ix|app1e/.test(urlLower)) {
    score += 3;
    reasons.push("Contains brand typo (e.g. paypa1, g00gle)");
  }

  // Final result
  let resultText = "";
  let color = "";

  if (score >= 7) {
    resultText = `🚨 High Risk [Score: ${score}/10]`;
    color = "#ff4c4c";
  } else if (score >= 3) {
    resultText = `⚠️ Suspicious [Score: ${score}/10]`;
    color = "#ffaa00";
  } else {
    resultText = `✅ Safe [Score: ${score}/10]`;
    color = "#00ff88";
  }

  // Display result
  resultEl.innerHTML = `<strong>${resultText}</strong><br>${reasons.length ? "Reasons:<br>• " + reasons.join("<br>• ") : ""}`;
  resultEl.style.color = color;
}
