const msgs = [
    '"Kamu adalah alasan aku tersenyum setiap pagi, dan bintangku di setiap malam." ✨',
    '"Bersamamu, aku merasa rumah bukan tempat tapi perasaan. Dan kamu adalah rumahku." 🏡',
    '"Aku tidak punya kata-kata yang cukup untuk menjelaskan betapa berartinya kamu." 💫',
    '"Setiap momen bersamamu selalu menjadi kenangan terindah yang ingin kuulang." 🌹',
    '"Kamu bukan hanya pasanganku, kamu adalah sahabat jiwa dan cahaya hidupku." 🌟',
    '"Cintaku padamu tumbuh lebih besar setiap harinya, tanpa batas dan tanpa akhir." ∞',
    '"Terima kasih sudah memilihku dan membiarkanku memilihmu setiap hari." 💍',
    '"Kamu adalah versi terbaik dari semua doaku yang pernah terkabul." 🙏',
  ];
  
  let msgIdx = 0;
  let clickCount = 0;
  
  function nextMsg() {
    msgIdx = (msgIdx + 1) % msgs.length;
    const box = document.getElementById('msg-box');
    box.style.opacity = '0';
    box.style.transform = 'translateY(10px)';
    setTimeout(() => {
      box.textContent = msgs[msgIdx];
      box.style.transition = 'all 0.4s';
      box.style.opacity = '1';
      box.style.transform = 'translateY(0)';
    }, 300);
  }
  
  function burst() {
    clickCount++;
    document.getElementById('counter').textContent = '❤️ ' + clickCount + ' cinta sudah dikirim!';
    spawnPetals(12);
  }
  
  function spawnPetals(n) {
    const wrap = document.getElementById('wrap');
    const emojis = ['❤️','💖','💗','💝','🌸','💕','✨','🌹','💓','⭐'];
    for (let i = 0; i < n; i++) {
      const el = document.createElement('div');
      el.className = 'petal';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left = Math.random() * 95 + '%';
      el.style.fontSize = (18 + Math.random() * 16) + 'px';
      el.style.animationDuration = (2 + Math.random() * 2) + 's';
      el.style.animationDelay = Math.random() * 0.8 + 's';
      wrap.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }
  }
  
  function makeStars() {
    const c = document.getElementById('stars');
    for (let i = 0; i < 60; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      const sz = Math.random() * 3 + 1;
      s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*3}s;animation-duration:${2+Math.random()*2}s;opacity:${0.4+Math.random()*0.6}`;
      c.appendChild(s);
    }
  }
  
  makeStars();
  setInterval(() => spawnPetals(3), 3000);
  
  document.getElementById('name-input').addEventListener('input', function () {
    const n = this.value.trim();
    document.getElementById('main-title').textContent = n
      ? '❤️ I Love You, ' + n + '! ❤️'
      : '❤️ I Love You ❤️';
  });
  
  document.getElementById('file-input').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
      const img = document.getElementById('preview-img');
      img.src = ev.target.result;
      img.style.display = 'block';
      document.getElementById('placeholder').style.display = 'none';
      burst();
    };
    reader.readAsDataURL(file);
  });