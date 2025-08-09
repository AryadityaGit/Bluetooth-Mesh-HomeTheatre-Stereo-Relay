function generateQR(data) {
  const container = document.getElementById('qrContainer');
  container.innerHTML = '';
  new QRCode(container, {
    text: data,
    width: 256,
    height: 256
  });
}