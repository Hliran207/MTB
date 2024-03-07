import React, { useState, useEffect, useRef } from "react";
import musicFile1 from "./music1.mp3"; // Import the music file
import musicFile2 from "./music2.mp3"; // Import the music file
import musicFile3 from "./music3.mp3"; // Import the music file
import musicFile4 from "./music4.mp3"; // Import the music file

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayMusicClick = () => {
    setIsPlaying(!isPlaying);
  };

  const MusicFiles = [musicFile1, musicFile2, musicFile3, musicFile4];

  return (
    <div>
      <button className="ButtonPlayMusic" onClick={handlePlayMusicClick}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <audio
        ref={(ref) => (audioRef.current = ref)}
        src={MusicFiles[Math.floor(Math.random() * MusicFiles.length)]}
        preload="auto"
      ></audio>
    </div>
  );
};

export default Music;
