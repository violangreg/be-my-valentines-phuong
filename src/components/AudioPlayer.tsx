"use client";

import { useState, useRef, useEffect } from "react";
import { getAssetPath } from "@/lib/assetPath";
import { useAudio } from "@/lib/AudioContext";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { registerAudio } = useAudio();

  useEffect(() => {
    if (audioRef.current) {
      registerAudio(audioRef as React.RefObject<HTMLAudioElement>);
    }
  }, [registerAudio]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={getAssetPath("/audio/background-music.mp3")}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        onClick={toggleAudio}
        className="fixed top-4 right-4 z-50 bg-pink-500 hover:bg-pink-600 text-white rounded-full p-3 shadow-lg transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "🔊" : "🔇"}
      </button>
    </>
  );
}
