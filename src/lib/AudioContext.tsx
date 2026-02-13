"use client";

import React, { createContext, useContext, useRef } from "react";

interface AudioContextType {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  registerAudio: (ref: React.RefObject<HTMLAudioElement>) => void;
  changeSong: (songPath: string) => Promise<void>;
  pauseAudio: () => void;
  playAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const registerAudio = (ref: React.RefObject<HTMLAudioElement>) => {
    audioRef.current = ref.current;
  };

  const changeSong = async (songPath: string) => {
    if (audioRef.current) {
      audioRef.current.src = songPath;
      audioRef.current.currentTime = 0;
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log("Autoplay prevented or error occurred:", error);
      }
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <AudioContext.Provider
      value={{ audioRef, registerAudio, changeSong, pauseAudio, playAudio }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
