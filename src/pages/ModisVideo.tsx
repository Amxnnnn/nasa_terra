import React, { useRef, useState, useEffect } from 'react';

const ModisVideo = () => {
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div className="video-container bg-black">
      <video
        ref={videoRef}
        src="https://cccacruvlm4elohz.public.blob.vercel-storage.com/MODIS.mp4"
        autoPlay
        loop
        muted={false}
        className="video-element"
      />
      <div className="audio-control">
        <label htmlFor="volume" className="text-white mr-2">Volume:</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default ModisVideo;
