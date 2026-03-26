---
permalink: /
layout: null
---
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <script>
    var lang = (navigator.language || navigator.userLanguage || 'en').slice(0, 2);
    window.location.replace(lang === 'fr' ? '/fr/' : '/en/');
  </script>
</head>
<body>
  <p><a href="/en/">English</a> | <a href="/fr/">Français</a></p>
</body>
</html>
