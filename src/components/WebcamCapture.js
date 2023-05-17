import React from 'react';
import Webcam from 'react-webcam';

import useInterval from '../useInterval.js';

const videoConstraints = {
    width: 224,
    height: 224,
    facingMode: 'user'
};

const WebcamCapture = ({ onCapture }) => {

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        onCapture(imageSrc)
    }, [webcamRef]);

    useInterval(capture, 1000);

    return (
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            width={224}
            height={224}
        />
    );
};

export default WebcamCapture;