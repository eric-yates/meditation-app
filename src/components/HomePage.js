import React, {useEffect, useState} from 'react';
import {Stack, Box, Text, Button, Icon, Image} from '@chakra-ui/react';

import Aarav from '../assets/Aarav.png'
import Ava from '../assets/Ava.png'
import Ethan from '../assets/Ethan.png'
import Jamal from '../assets/Jamal.png'
import Nari from '../assets/Nari.png'
import Zara from '../assets/Zara.png'
import Crown  from '../assets/crown.png'
import { FaPlay } from "react-icons/fa";
import LeafEmoji from '../assets/leaf-emoji.png';
import PlayButton from '../assets/play-button.png'

const HomePage = (props) => {

    const [selectedAgent, setSelectedAgent] = useState('Ava');
    const [selectedDuration, setSelectedDuration] = useState(3);
    const [agentWarningGuard, setAgentWarningGuard] = useState(false);
    const [durationWarningGuard, setDurationWarningGuard] = useState(false);

    const Agent = ({ name, src, pro }) => {

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
                    border: selectedAgent === name ? '0.5px solid #E2E8F0' : '0.5px solid #E2E8F0',
                    borderRadius: 100
                }}/>
                <Button
                    size="md"
                    borderRadius="md"
                    width="15rem"
                    height="3rem"
                    style={{
                        backgroundColor: selectedAgent === name ? '#4F4F4F' : 'white',
                        border: selectedAgent === name ? null : '0.5px solid #E2E8F0',
                        color: selectedAgent === name ? 'white' : 'black'
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
                size="md"
                width="9rem"
                borderRadius="md"
                height="3rem"
                onClick={() => {
                    // props.setView('homePage', {duration: duration});
                    // setSelectedDuration(duration);
                }}
                style={{
                    marginLeft: marginLeft,
                    marginRight: marginRight,
                    backgroundColor: selectedDuration === duration ? '#4F4F4F' : 'white',
                    border: selectedDuration === duration ? null : '0.5px solid #E2E8F0',
                    color: selectedDuration === duration? 'white' : 'black'
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
                    style={{display: 'inline', color: 'rgba(109, 183, 20, 1)'
                    }}
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
                Choose your agent for mindfulness coaching
            </Text>
            <Agent name={'Ava'} src={Ava} pro = {null}/>
            <Agent name={'Ethan'} src={Ethan} pro = {null}/>
            <Agent name={'Nari'} src={Nari} pro = {Crown}/>
            <Agent name={'Aarav'} src={Aarav} pro = {Crown}/>
            <Agent name={'Jamal'} src={Jamal} pro = {Crown}/>
            <Agent name={'Zara'} src={Zara} pro = {Crown}/>
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
                <Duration duration={3} marginRight={10} pro = {null}/>
                <Duration duration={5} pro = {Crown}/>
                <Duration duration={10} marginLeft={10} pro = {Crown}/>
            </div>
            {/* <Button
                size="lg"
                height="3.5rem"
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
                    color: 'black'
                }}
            >
                <Image src={PlayButton} alt={'Play button'} height={4} width={4} style={{marginRight: 10}}/>
                Start Session
            </Button> */}
            <Stack align={"center"}>

            <Button
                position="fixed"
                bottom={4}
                left={4}
                right={4}
                mx="auto"
                width="fit-content"
                backgroundColor="#6FCF97"
                size="lg"
                borderRadius="lg"
                px={6}
                py={3}
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
                //   _before={{
                //     content: '""',
                //     position: 'absolute',
                //     top: 0,
                //     left: 0,
                //     right: 0,
                //     bottom: 0,
                //     zIndex: -1,
                //     backdropFilter: 'blur(10px)',

                //   }}
                _hover={{
                    cursor: 'pointer',
                    backgroundColor: '#38A169'
                    }}
                >
                <FaPlay style={{ height: '1rem', marginRight: '0.5rem' }} />
                Start Session
                {/* <Crown></Crown> */}
                </Button>
      </Stack>
            <span className="unsupported"/>
        </Stack>
    )
};

export default HomePage;