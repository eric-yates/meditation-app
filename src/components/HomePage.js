import React, {useEffect, useState} from 'react';
import {Stack, Box, Text, Button, Icon, Image} from '@chakra-ui/react';

import Aarav from '../assets/Aarav.png'
import Ava from '../assets/Ava.png'
import Ethan from '../assets/Ethan.png'
import Jamal from '../assets/Jamal.png'
import Nari from '../assets/Nari.png'
import Zara from '../assets/Zara.png'

import LeafEmoji from '../assets/leaf-emoji.png';
import PlayButton from '../assets/play-button.png'

const HomePage = (props) => {

    const [selectedAgent, setSelectedAgent] = useState('Ava');
    const [selectedDuration, setSelectedDuration] = useState(3);
    const [agentWarningGuard, setAgentWarningGuard] = useState(false);
    const [durationWarningGuard, setDurationWarningGuard] = useState(false);

    const Agent = ({ name, src }) => {

        return (
            <div
                onClick={() => {
                    if (selectedAgent === name) {
                        setSelectedAgent(null);
                    } else {
                        setSelectedAgent(name)
                    }
                }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    height: 48,
                    marginTop: 16
                }}
            >
                <Image src={src} alt={name} height="48px" width="48px" style={{
                    display: 'inline',
                    marginRight: 10,
                    border: selectedAgent === name ? '2px solid #5aabfc' : '0.5px solid #333',
                    borderRadius: 100
                }}/>
                <Button
                    size="lg"
                    width="300px"
                    height="48px"
                    maxWidth="100%"
                    style={{
                        backgroundColor: 'white',
                        border: selectedAgent === name ? '2px solid #5aabfc' : '0.5px solid #333'
                    }}
                >
                    {name}
                </Button>
            </div>
        );
    };

    const Duration = ({ duration, marginLeft='auto', marginRight='auto'}) => {

        return (
            <Button
                size="lg"
                width="100px"
                height="48px"
                onClick={() => {
                    // props.setView('homePage', {duration: duration});
                    // setSelectedDuration(duration);
                }}
                style={{
                    marginLeft: marginLeft,
                    marginRight: marginRight,
                    backgroundColor: 'white',
                    border: selectedDuration === duration ? '2px solid #5aabfc' : '0.5px solid #333'
                }}
            >{ duration }
            </Button>
        );
    }

    useEffect(() => {
        setInterval(() => {
            setAgentWarningGuard(false);
            setDurationWarningGuard(false);
        }, 1000);
    }, [agentWarningGuard, durationWarningGuard])

    return (
        <Stack
            width="100%"
            height="864px"
            background="#FFFFFF"
            style={{
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
            <Text
                lineHeight="1.2"
                fontWeight="semibold"
                fontSize="22px"
                width="500px"
                height="23.12px"
                style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, color: agentWarningGuard ? '#5aabfc' : '#333'}}
            >
                Choose your agent for mindfulness training
            </Text>
            <Agent name={'Ava'} src={Ava} />
            <Agent name={'Ethan'} src={Ethan} />
            <Agent name={'Nari'} src={Nari} />
            <Agent name={'Aarav'} src={Aarav} />
            <Agent name={'Jamal'} src={Jamal} />
            <Agent name={'Zara'} src={Zara} />
            <Text
                lineHeight="1.2"
                fontWeight="semibold"
                fontSize="22px"
                width="437px"
                height="23px"
                maxWidth="100%"
                style={{marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, marginTop: 50, color: durationWarningGuard ? '#5aabfc' : '#333'}}
            >
                Choose your session length in minutes
            </Text>
            <div style={{disply: 'flex'}}>
                <Duration duration={3} marginRight={10} />
                <Duration duration={5} />
                <Duration duration={10} marginLeft={10} />
            </div>
            <Button
                size="lg"
                height="52.84px"
                onClick={() => {
                    if (selectedAgent && selectedDuration) {
                        props.setView('sessionStart')
                    } else {
                        if (!selectedAgent) {
                            setAgentWarningGuard(true);
                        }
                        if (!selectedDuration) {
                            setDurationWarningGuard(true);
                        }
                    }
                }}
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 50,
                    backgroundColor: selectedAgent && selectedDuration ? '#5aabfc' : '#aaaaaa',
                    color: 'white'
                }}
            >
                <Image src={PlayButton} alt={'Play button'} height={4} width={4} style={{marginRight: 10}}/>
                Start Session
            </Button>
            <span className="unsupported"/>
        </Stack>
    )
};

export default HomePage;