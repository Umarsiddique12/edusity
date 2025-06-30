import React, { useRef } from 'react';
import video from '../../assets/video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  console.log("VideoPlayer playState:", playState);

  return (
    <div
      className={`video-player ${playState ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.9)',
        display: playState ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
      }}
    >
      <video
        src={video}
        autoPlay
        controls
        muted
        className="video"
        style={{
          width: '90%',
          maxWidth: '900px',
          height: 'auto',
          border: '4px solid #fff',
        }}
      />
    </div>
  );
};

export default VideoPlayer;
