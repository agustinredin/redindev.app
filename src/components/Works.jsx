import React from 'react'
import * as chakra from '@chakra-ui/react'
import WaveDivider from './WaveDivider'
import { useContext } from 'react'
import { appContext } from '../Context.jsx'

const Works = () => {
    const { styles } = useContext(appContext)



    return (
        <>
        <WaveDivider/>
            <chakra.Box minH='100vh' bg={styles.colors.blue}>
                <chakra.Container minW={{ base: '90vw', md: '80vw' }} m={'auto'}>
                    a
                </chakra.Container>
            </chakra.Box>
        </>
    )
}

export default Works