import React, { useState } from 'react';

const AudioPlayer = ({ filename }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            {isPlaying && <audio src={filename} controls autoPlay />}
        </div>
    );
};

export default AudioPlayer;
