
"use client"
import { useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

const VideoPlayer = ({ videoUrl, thumbnail, muted, autoPlay }: { videoUrl: string, thumbnail: string, muted: boolean, autoPlay: boolean, }) => {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Plyr | null>(null);

  useEffect(() => {

    if (videoRef.current) {

      new Plyr(videoRef.current, {
        speed: { selected: 1, options: [0.5, 1, 1.5, 2] },
        seekTime: 5,
        controls: [
          'play-large',
          'play',
          'mute',
          'current-time',
          'progress',
          'settings',
          'pip',
          'fullscreen',
        ],
      });


    }
  }, []);



  return (
    <video
      ref={videoRef}
      className="plyr rounded-b-lg"
      autoPlay={autoPlay}
      data-poster={thumbnail}
      playsInline
      controls
    >

      <source src={videoUrl}  type="video/mp4" />

    </video>
  );
};

export default VideoPlayer;
