import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  background-color: #f3f3f3;
  border-radius: 10px;
  overflow: hidden;
`

const ProgressBarFill = styled.div`
    height: 20px;
    background-color: #5aabfc;
    transition: width 1s ease-in-out;
`

const ProgressBar = ({ durationMinutes }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return oldProgress + (100/(durationMinutes*60));
            });
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [durationMinutes]);

    return (
        <Container>
            <ProgressBarFill style={{ width: `${progress}%` }} />
        </Container>
    );
};

export default ProgressBar;
