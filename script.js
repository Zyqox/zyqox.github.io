// Basic AI-style phishing URL detection
function checkURL() {
  const url = document.getElementById('url').value.toLowerCase();
  const resultEl = document.getElementById('result');

  let score = 0;

  // Heuristics
  const suspiciousPatterns = [
    /\d{1,3}(\.\d{1,3}){3}/, // IP address in URL
    /@/, // @ symbol in URL
    /(login|verify|secure|account|update|signin|dropbox|bank)/,
    /(paypa1|faceb00k|g00gle|app1e|micros0ft|netf1ix|instaqram)/,
    /(bit\.ly|is\.gd|tinyurl\.com|t\.co|ow\.ly)/, // Shorteners
    /\.tk$|\.ml$|\.ga$|\.cf$|\.gq$/ // Bad TLDs
  ];

  suspiciousPatterns.forEach((pattern) => {
    if (pattern.test(url)) score += 2;
  });

  // Classify
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

  resultEl.textContent = resultText;
  resultEl.style.color = resultColor;
}
