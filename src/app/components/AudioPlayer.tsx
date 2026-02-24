"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
  title: string;
  description: string;
  tag: string;
}

function formatTime(seconds: number): string {
  if (!seconds || !isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({
  src,
  title,
  description,
  tag,
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      setIsLoading(true);
      try {
        await audio.play();
      } catch {
        // Playback blocked or failed
      }
      setIsLoading(false);
    }
  }, [isPlaying]);

  const handleSeek = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const time = parseFloat(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-surface rounded-2xl p-5 sm:p-6 border border-border">
      <audio ref={audioRef} src={src} preload="metadata" />

      {/* Tag */}
      <span className="inline-block text-xs font-heading uppercase tracking-widest text-gold mb-3">
        {tag}
      </span>

      {/* Title & description */}
      <h3 className="font-heading text-xl sm:text-2xl font-semibold text-cream mb-2">
        {title}
      </h3>
      <p className="text-muted text-sm sm:text-base mb-5 leading-relaxed">
        {description}
      </p>

      {/* Player controls */}
      <div className="flex items-center gap-4">
        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          disabled={isLoading}
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
          className="flex-shrink-0 w-14 h-14 rounded-full bg-gold hover:bg-gold-light active:bg-gold-dark flex items-center justify-center transition-colors"
        >
          {isLoading ? (
            <svg
              className="w-6 h-6 text-bg animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          ) : isPlaying ? (
            <svg
              className="w-6 h-6 text-bg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-bg ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36A1 1 0 008 5.14z" />
            </svg>
          )}
        </button>

        {/* Progress & time */}
        <div className="flex-1 min-w-0">
          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="w-full"
            aria-label="Progreso de la cancion"
            style={{
              background: `linear-gradient(to right, var(--gold) ${progress}%, #2a2520 ${progress}%)`,
              height: "6px",
              borderRadius: "3px",
            }}
          />
          <div className="flex justify-between text-xs text-muted mt-1.5">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
