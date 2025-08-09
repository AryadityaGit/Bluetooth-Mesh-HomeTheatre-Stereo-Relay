async function connect() {
  const sdp = document.getElementById('offerInput').value;
  const pc = new RTCPeerConnection();

  pc.ontrack = event => {
    const audio = document.createElement('audio');
    audio.srcObject = event.streams[0];
    audio.autoplay = true;
    document.body.appendChild(audio);
  };

  await pc.setRemoteDescription({ type: 'offer', sdp });
  const answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);

  console.log('Answer SDP:', answer.sdp);
}