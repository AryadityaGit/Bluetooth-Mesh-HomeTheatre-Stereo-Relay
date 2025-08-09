async function startSync() {
  const audio = document.getElementById('audio');
  const stream = audio.captureStream();
  const pc = new RTCPeerConnection();

  stream.getTracks().forEach(track => pc.addTrack(track, stream));
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);

  generateQR(JSON.stringify({ sdp: offer.sdp }));
}