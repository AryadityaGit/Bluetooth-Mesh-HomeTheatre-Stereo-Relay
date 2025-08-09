Here's the full scaffold for your Multi-Speaker Sync Web App, ready to be dropped into a GitHub repo or zipped for deployment. This version includes:

- ✅ Host and Peer pages
- 🎧 WebRTC audio streaming
- 📱 QR code-based onboarding
- 🧩 Modular JS structure
- 🖼️ Static hosting compatibility

# 🎧 Multi-Speaker Sync Web App

Stream audio from one host phone to multiple peer phones, each connected to a Bluetooth speaker.

## Features

- WebRTC-based audio sync
- QR code onboarding
- Static hosting (GitHub Pages compatible)

## How to Use

1. Open `index.html` on host phone
2. Play audio and click "Start Sync"
3. Peers open `peer.html` and scan QR or paste SDP
4. Each peer plays audio via its Bluetooth speaker

## Notes

- Works best on Chrome/Edge mobile
- Audio file must be in `assets/your-audio.mp3`