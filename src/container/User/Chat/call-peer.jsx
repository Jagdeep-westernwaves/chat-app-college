import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../../../service/peer";
import { useSocket } from "../../../context/SocketProvider";
import { useParams } from "react-router-dom";

const RoomPage = () => {
  const { uname } = useParams();
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [clicked, setClicked] = useState(false);
  const [remoteStream, setRemoteStream] = useState();

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
    setClicked(true);
  }, [remoteSocketId, socket]);

  const handleEndCall = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    peer.endCall();
    socket.emit("user:call", { to: remoteSocketId, offer: "" });
    setMyStream(stream);
    setClicked(false);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    socket.emit("room:join", { email: uname, room: "1" });
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);
  const handleJoinRoom = useCallback((data) => {
    const { email, room } = data;
    console.log("✌️email, room --->", email, room);
  }, []);

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("room:join", handleJoinRoom);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  return (
    <div>
      <h1>Room Page-{uname}</h1>
      <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>
      {/* {myStream && <button onClick={sendStreams}>Send Stream</button>} */}
      {!clicked && (
        <button onClick={handleCallUser}>{clicked ? "Join " : "CALL"}</button>
      )}
      <button onClick={handleEndCall}>End call</button>
      {myStream && (
        <>
          <ReactPlayer
            playing
            muted
            pip
            height="100px"
            style={{
              height: "100px",
              position: "absolute",
              top: 60,
              right: 10,
              minHeight: "100px",
              maxWidth: "100px",
              border: "2px solid #fff",
            }}
            url={myStream}
          />
        </>
      )}
      {remoteStream && (
        <ReactPlayer
          playing
          volume={2}
          style={{
            background: "#b1b1b1",
            minHeight: "calc(100vh - 60px)",
            minWidth: "100vW",
            maxWidth: "100vW",
          }}
          url={remoteStream}
        />
      )}
    </div>
  );
};

export default RoomPage;
