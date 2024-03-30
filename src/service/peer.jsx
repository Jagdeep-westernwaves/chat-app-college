class PeerService {
  constructor() {
    if (!this.peer) {
      this.peer = new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com:19302",
              "stun:global.stun.twilio.com:3478",
            ],
          },
        ],
      });
    }
  }

  async getAnswer(offer) {
    if (this.peer) {
      await this.peer.setRemoteDescription(offer);
      const ans = await this.peer.createAnswer();
      await this.peer.setLocalDescription(new RTCSessionDescription(ans));
      return ans;
    }
  }

  async setLocalDescription(ans) {
    if (this.peer) {
      await this.peer.setRemoteDescription(new RTCSessionDescription(ans));
    }
  }

  async getOffer() {
    if (this.peer) {
      const offer = await this.peer.createOffer();
      await this.peer.setLocalDescription(new RTCSessionDescription(offer));
      return offer;
    }
  }

  endCall() {
    if (this.peer) {
      this.peer.close();
      this.peer = null; // Resetting peer connection
    }
  }

  toggleAudioMute() {
    if (this.peer) {
      const audioTracks = this.peer
        .getSenders()
        .map((sender) => sender.track)
        .filter((track) => track.kind === "audio");
      audioTracks.forEach((track) => {
        track.enabled = !track.enabled; // Toggle audio track enabled state
      });
    }
  }

  turnOffCamera() {
    if (this.peer) {
      const videoTracks = this.peer
        .getSenders()
        .map((sender) => sender.track)
        .filter((track) => track.kind === "video");
      videoTracks.forEach((track) => {
        this.peer.removeTrack(
          this.peer.getSenders().find((sender) => sender.track === track)
        );
      });
    }
  }
}

export default new PeerService();
