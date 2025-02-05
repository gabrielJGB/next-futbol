
"use client"
import { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const VideoPlayer = ({ videoUrl,thumbnail,muted,autoPlay }:{videoUrl:string,thumbnail:string,muted:boolean,autoPlay:boolean}) => {

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      new Plyr(videoRef.current, {
        speed:{ selected: 1, options: [0.5, 1,1.5, 2] },
        seekTime:5,
        controls: [
            
            'play-large',
            'play',
            'volume',
            'current-time',
            'progress',
            'settings',
            'fullscreen', 
            'download'
        ],
      });
    }
  }, []);

  return (
    <video ref={videoRef} className="plyr rounded-b" playsInline autoPlay={autoPlay} muted={muted} controls data-poster={thumbnail}>
      <source src={videoUrl} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
