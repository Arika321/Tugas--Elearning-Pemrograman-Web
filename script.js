function showPage(page) {
  const content = document.getElementById('content');
  
  switch (page) {
    case 'home':
      content.innerHTML = `
        <h2>Selamat Datang di <b>BookNest</b></h2>
        <p>Temukan berbagai buku menarik dari fiksi, motivasi, hingga ilmu pengetahuan. Nikmati sensasi membaca digital yang menyenangkan untuk semua kalangan.</p>
        <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80"
             width="450"
             style="border-radius: 20px; margin-top: 25px; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
        <div style="margin-top:30px">
          <button class="next-btn" onclick="showPage('koleksi')">📖 Lihat Koleksi Buku</button>
        </div>
      `;
      break;

    case 'koleksi':
      content.innerHTML = `
        <h2>📚 Koleksi Buku Pilihan</h2>
        <div class="book-card">
          <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80" alt="Novel Fiksi">
          <h4>Langit di Ujung Senja</h4>
          <p>Kisah yang menghangatkan hati tentang cinta, waktu, dan pengampunan.</p>
        </div>
        <div class="book-card">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=80" alt="Motivasi">
          <h4>Langkah Menuju Mimpi</h4>
          <p>Panduan penuh semangat untuk meraih cita-cita dan kebahagiaan.</p>
        </div>
        <div class="book-card">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80" alt="Edukasi">
          <h4>Membaca Dunia</h4>
          <p>Perjalanan inspiratif menelusuri kekuatan literasi di berbagai budaya.</p>
        </div>
        <div style="margin-top:30px">
          <button class="next-btn" onclick="showPage('motivasi')">💬 Lanjut ke Motivasi</button>
        </div>
      `;
      break;

    case 'motivasi':
      content.innerHTML = `
        <h2>💬 Inspirasi Hari Ini</h2>
        <p>"Membaca bukan hanya membuka halaman, tapi juga membuka pikiran dan hati."</p>
        <img src="https://images.unsplash.com/photo-1496317556649-f930d733eea6?auto=format&fit=crop&w=900&q=80"
             width="450"
             style="border-radius: 20px; margin-top: 20px;">
        <p style="margin-top:20px;">Ayo mulai membaca hari ini, karena setiap buku menyimpan cerita baru yang menantimu!</p>
        <div style="margin-top:30px">
          <button class="next-btn" onclick="showPage('kontak')">📞 Hubungi Kami</button>
        </div>
      `;
      break;

    case 'kontak':
      content.innerHTML = `
        <h2>📞 Kontak BookNest</h2>
        <p>Ingin menghubungi kami atau memberi saran bacaan? Yuk, kirim pesan!</p>
        <p>Email: <a href="mailto:booknest.online@gmail.com">booknest.online@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram.com/booknest.id" target="_blank">@booknest.id</a></p>
        <button class="next-btn" onclick="showPage('home')">⬅️ Kembali ke Beranda</button>
      `;
      break;

    default:
      showPage('home');
  }
}

// Saat pertama kali dibuka
window.onload = () => showPage('home');
