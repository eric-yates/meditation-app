import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';

import WebcamCapture from './WebcamCapture.js';

function SessionPage(props) {

    const timeLimit = 60;

    const [motionDetected, setMotionDetected] = useState(false);
    const [currentTime, setCurrentTime] = useState(-1);
    const [currentFrames, setCurrentFrames] = useState(['', ''])
    const prevFrameRef = useRef('');

    const onCapture = (screenshot) => {
        setCurrentFrames([prevFrameRef.current, screenshot]);
        prevFrameRef.current = screenshot;
    };

    useEffect(() => {

        let data = {
            'frames': currentFrames
        };

        axios({
            method: 'post',
            url: 'http://127.0.0.1:5000/predictions/segmentation',
            data: data,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                console.log('Response:', response);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        // setMotionDetected(!motionDetected);

        if (currentTime >= 0) {
            setCurrentTime(currentTime + 1);
        }
    }, [currentFrames]);

    useEffect(() => {
        if (motionDetected && (currentTime === -1 || currentTime > timeLimit)) {
            console.log('I noticed that you are moving around a bit.')
            setCurrentTime(0);
        } else {
            console.log('No movement.')
        }
    }, [motionDetected])

    return (
        <div className="App">
            <WebcamCapture onCapture={onCapture}/>
        </div>
    );
}

export default SessionPage;
