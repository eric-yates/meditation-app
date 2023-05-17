import React, { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import './App.css';

import HomePage from './components/HomePage.js'
import SessionPage from './components/SessionPage.js';
import SessionStart from './components/SessionStart.js'

function App() {

    const defaultViewType = 'homePage';

    const defaultViewProps = {
        'homePage': {duration: 5},
        'sessionStart': {duration: 5}
    }

    const [viewType, setViewType] = useState(defaultViewType);
    const [viewProps, setViewProps] = useState(defaultViewProps[defaultViewType])

    const setView = (type, props) => {

        if (type === viewType) {
            setViewProps({...props})
        } else {
            setViewType(type)
            if (props) {
                setViewProps({...defaultViewProps[type], ...props})
            }
        }
    }

    const views = {
        'homePage': HomePage,
        'sessionPage': SessionPage,
        'sessionStart': SessionStart
    }

    const currentView = views[viewType];

    return (
        <ChakraProvider>
            {React.createElement(currentView, {...viewProps, setView: setView})}
        </ChakraProvider>
    );
}

export default App;
