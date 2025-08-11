// Zyqox AI-Style Phishing URL Detection
function checkURL() {
  const url = document.getElementById('url').value.toLowerCase().trim();
  const resultEl = document.getElementById('result');

  let score = 0;

  // Detection patterns
  const suspiciousPatterns = [
    /\d{1,3}(\.\d{1,3}){3}/, // IP address
    /@/, // @ symbol in URL
    /(login|verify|secure|account|update|signin|dropbox|bank)/, // Keywords
    /(paypa1|faceb00k|g00gle|app1e|micros0ft|netf1ix|instaqram)/, // Misspelled brands
    /(bit\.ly|is\.gd|tinyurl\.com|t\.co|ow\.ly)/, // Shorteners
    /\.tk$|\.ml$|\.ga$|\.cf$|\.gq$/ // Suspicious TLDs
  ];

  // Apply checks
  suspiciousPatterns.forEach((pattern) => {
    if (pattern.test(url)) score += 2;
  });

  // Classify result
  let resultText = '';
  let resultColor = '';

  if (score >= 8) {
    resultText = `🚨 High Risk [Score: ${score}/10]`;
    resultColor = '#ff4d4d';
  } else if (score >= 4) {
    resultText = `⚠️ Suspicious [Score: ${score}/10]`;
    resultColor = '#ffaa00';
  } else {
    resultText = `✅ Safe [Score: ${score}/10]`;
    resultColor = '#00e676';
  }

  // Show result
  resultEl.textContent = resultText;
  resultEl.style.color = resultColor;
}
