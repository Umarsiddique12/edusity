import React, { useRef } from 'react';
// import video from '../../assets/video.mp4';

const VideoPlayer = ({ playState, setPlayState, videoSrc }) => {
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
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          controls
          style={{
            width: '90%',
            maxWidth: '900px',
            height: '400px',
            border: '4px solid #fff',
            background: '#333',
          }}
        />
      ) : (
        <div
          className="video"
          style={{
            width: '90%',
            maxWidth: '900px',
            height: '400px',
            border: '4px solid #fff',
            background: '#333',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '18px'
          }}
        >
          Video Player Placeholder
          <br />
          (Replace with actual video file)
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
