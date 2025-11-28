import react from "react";
import React,{ useRef } from "react";
import "./videoPlayer.css";
import video from "../../assets/mkce clg.mp4";
const VideoPlayer = ({ playstate, setplaystate }) => {
  const player = useRef(null);

  const closePlayer=(e)=>{
  if(e.target===player.current){
    setplaystate(false);
  }
  }
  
  
  
  return (
    <div className={`Video-Player ${playstate ? "" : "hide"}`} ref={player}
    onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};
export default VideoPlayer;
