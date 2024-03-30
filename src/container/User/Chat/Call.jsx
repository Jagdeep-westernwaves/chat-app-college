import React from "react";
import { useParams } from "react-router-dom";

const Call = () => {
  const { uname } = useParams();
  function getUrlParams(url) {
    let urlStr = url.split("?")[1];
    const urlSearchParams = new URLSearchParams(urlStr);
    const result = Object.fromEntries(urlSearchParams.entries());
    return result;
  }
  const roomID = uname;
  const userID = Math.floor(Math.random() * 10000) + uname;
  const userName = "userName" + uname;
  const appID = 70025150;
  const serverSecret = "dbae0356503e9c8f953163e5dd6f1067";
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomID,
    userID,
    userName
  );

  const zp = ZegoUIKitPrebuilt.create(kitToken);
  zp.joinRoom({
    container: document.querySelector("#CallApp"),
    sharedLinks: [
      {
        name: "Personal link",
        url:
          window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?roomID=" +
          roomID,
      },
    ],
    scenario: {
      mode: ZegoUIKitPrebuilt.VideoConference,
    },

    turnOnMicrophoneWhenJoining: true,
    turnOnCameraWhenJoining: true,
    showMyCameraToggleButton: true,
    showMyMicrophoneToggleButton: true,
    showAudioVideoSettingsButton: true,
    showScreenSharingButton: true,
    showTextChat: true,
    showUserList: true,
    maxUsers: 50,
    layout: "Sidebar",
    showLayoutButton: true,
  });
  return <div id="CallApp" style={{ width: "100vw", height: "100vh" }} />;
};

export default Call;
