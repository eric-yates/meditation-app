import React, { useState, useEffect } from 'react';

const SpeechRecognitionComponent = () => {
    const [isRecording, setIsRecording] = useState(true);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const [pauseTimeout, setPauseTimeout] = useState(null);
    const [transcript, setTranscript] = useState('');
    let recognition = null;

    useEffect(() => {

        console.log('EFFECT', isRecording, recordedChunks, transcript);

        if ('SpeechRecognition' in window) {
            recognition = new window.SpeechRecognition();
        } else if ('webkitSpeechRecognition' in window) {
            recognition = new window.webkitSpeechRecognition();
        } else {
            console.error('Speech recognition not supported in this browser');
            return;
        }

        recognition.continuous = true;
        recognition.onresult = handleSpeechRecognitionResult;
        recognition.onend = handleSpeechRecognitionEnd;

        if (isRecording) {
            recognition && recognition.start();
        } else {
            recognition && recognition.stop();
            clearTimeout(pauseTimeout);
            setTranscript('');
            setRecordedChunks([]);
        }
    }, [isRecording]);

    const handleSpeechRecognitionResult = (event) => {
        const result = event.results[event.results.length - 1][0];
        const { transcript } = result;

        console.log('Transcript:', transcript);
        setTranscript(transcript);

        clearTimeout(pauseTimeout);
        setPauseTimeout(setTimeout(handlePauseDetection, 5000)); // 5 seconds
    };

    const handleSpeechRecognitionEnd = () => {
        console.log('END', transcript)
        setIsRecording(false);
    };

    const handlePauseDetection = () => {
        if (recordedChunks.length > 0) {
            const audioBlob = new Blob(recordedChunks, { type: 'audio/webm' });
            const textSnippet = transcript.trim();

            // Send textSnippet to another endpoint for further processing
            console.log('Sending text snippet:', textSnippet);

            setRecordedChunks([]);
        }
    };

    return (
        <></>
    );
};

export default SpeechRecognitionComponent;
