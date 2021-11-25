if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => {
        console.log(`pendaftaran SW berhasil`);
      })
      .catch(() => {
        console.log(`pendaftaran SW gagal`);
      })
  })
} else {
  console.log(`SW belum didukung browser ini`);
}