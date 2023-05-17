import React from 'react';
import {Stack, Box, Progress, Text, Image, Button} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import SessionBackground from '../assets/session-background.png';
import LeafEmoji from "../assets/leaf-emoji.png";
import ProgressBar from "./ProgressBar";
import PlayButton from "../assets/play-button.png";

const SessionStart = (props) => (
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
        <ArrowBackIcon
            data-icon="CkArrowBack"
            onClick={() => props.setView('homePage', {})}
            style={{height: 29, width: 29, position: 'absolute', top: 57.5, left: 640}} />
        <Box style={{display: 'flex', justifyContent: 'center'}}>
            <ProgressBar durationMinutes={3} style={{width: 400}} />
        </Box>
        <Button
            size="lg"
            height="52.84px"
            onClick={() => {
                props.setView('homePage', {})
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
)

export default SessionStart;
