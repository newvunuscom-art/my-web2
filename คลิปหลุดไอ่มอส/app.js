// เล่นวิดีโอ
function playVideo(btn){
  const card = btn.closest('.card');
  const mainVideo = card.querySelector('.video-player');
  const preview = card.querySelector('.preview');

  // หยุดวิดีโออื่นทั้งหมด
  document.querySelectorAll('.video-player').forEach(v=>{
    v.pause();
    v.style.display = "none";
  });

  // ใส่ source จาก preview
  const src = preview.querySelector('source').src;
  mainVideo.src = src;

  // แสดงวิดีโอ
  card.querySelector('.thumbnail').style.display = "none";
  mainVideo.style.display = "block";

  mainVideo.play();
}

// hover preview autoplay
document.querySelectorAll('.card').forEach(card=>{
  const preview = card.querySelector('.preview');

  card.addEventListener('mouseenter', ()=>{
    preview.play();
  });

  card.addEventListener('mouseleave', ()=>{
    preview.pause();
    preview.currentTime = 0;
  });
});