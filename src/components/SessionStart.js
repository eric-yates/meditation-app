import React, { useEffect, useState } from 'react';
import {Stack, Box, Progress, Text, Image, Button} from '@chakra-ui/react'
import axios from 'axios';
import { ArrowBackIcon } from '@chakra-ui/icons'

import SessionBackground from '../assets/session-background.png';
import ProgressBar from './ProgressBar.js';
import AudioPlayer from './AudioPlayer.js';
import SpeechRecognition from './SpeechRecognition.js';
import LeafEmoji from '../assets/leaf-emoji.png';
import PlayButton from '../assets/play-button.png';

const SessionStart = (props) => {

    const [agentAudioPlayed, setAgentAudioPlayed] = useState(false);
    const [introDone, setIntroDone] = useState(false);

    const audioAgent = new Audio('/intro.mp3');
    const audioBackground = new Audio('/background.mp3');

    useEffect(() => {
        audioBackground.volume = 0;
        audioBackground.play();

        const fadeInDuration = 2000; // 2 seconds
        const fadeInInterval = 50; // Increase volume every 50ms
        const maximumVolume = 0.4; // 40%

        const fadeInSteps = fadeInDuration / fadeInInterval;
        const volumeStep = maximumVolume / fadeInSteps;

        let currentVolume = 0;
        let stepCount = 0;

        const fadeInTimer = setInterval(() => {
            currentVolume += volumeStep;
            audioBackground.volume = currentVolume;

            stepCount++;
            if (stepCount >= fadeInSteps) {
                clearInterval(fadeInTimer);
            }
        }, fadeInInterval);

        const agentAudioTimeout = setTimeout(() => {
            if (!agentAudioPlayed) {
                audioAgent.play();

                setTimeout(() => {
                    setIntroDone(true);
                }, 8000)
            }
        }, 3000)
    }, []);

    return (
        <Stack
            width="100%"
            height="864px"
            background="#FFFFFF"
            style={{
                // backgroundImage: `url(${SessionBackground})`,
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                color: '#333333',
                fontFamily: 'Nunito',
                textAlign: 'center'
            }}
        >
            <Box style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 50, marginBottom: 30}}>
                <Image src={LeafEmoji} alt="Sprout logo" height="39px" width="39px" style={{display: 'inline'}}/>
                <Text
                    lineHeight="1.2"
                    fontWeight="semibold"
                    fontSize="30px"
                    width="300px"
                    height="39px"
                    style={{display: 'inline'}}
                >
                    sprout
                </Text>
            </Box>
            {/*<ArrowBackIcon*/}
            {/*    data-icon="CkArrowBack"*/}
            {/*    onClick={() => {*/}
            {/*        setAgentAudioPlayed(true);*/}
            {/*        audioBackground.pause()*/}
            {/*        audioAgent.pause()*/}
            {/*        props.setView('homePage', {});*/}
            {/*    }}*/}
            {/*    style={{height: 29, width: 29, position: 'absolute', top: 57.5, left: 640}}/>*/}
            <SpeechRecognition introDone={introDone} />
            <Box style={{display: 'flex', justifyContent: 'center'}}>
                <ProgressBar durationMinutes={3} style={{width: 400}}/>
            </Box>
            <Button
                size="lg"
                height="52.84px"
                onClick={() => {
                    setAgentAudioPlayed(true);
                    audioBackground.pause()
                    audioAgent.pause()
                    props.setView('homePage', {});
                }}
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 50,
                    backgroundColor: '#5aabfc',
                    color: 'white'
                }}
            >
                <Image src={PlayButton} alt={'End session symbol'} height={4} width={4} style={{marginRight: 10}}/>
                End Session
            </Button>
        </Stack>
    );
}

export default SessionStart;
