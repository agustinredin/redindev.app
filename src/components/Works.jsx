import React from 'react'
import * as chakra from '@chakra-ui/react'
import WaveDivider from './WaveDivider'
import { useContext } from 'react'
import { appContext } from '../Context.jsx'

const Works = () => {
    const { styles } = useContext(appContext)

    const boxStyles = {
        boxShadow:'xl', 
        rounded:'55',
         padding:'2px',
        overflow:'hidden',
         borderRadius:'10%',
         borderTop: '1px solid #e4e4e4'
    }

    return (
        <>
            <chakra.Box minH='100vh' pt={{ sm: '20vh', md: '15vh', lg: '10vh' }}>
                <chakra.Container minW={{ base: '90vw', md: '80vw' }} m={'auto'}>
                    <chakra.Heading fontSize={'5xl'} mb={1} fontWeight={'bold'}>
                        Works & contributions
                    </chakra.Heading>
                    <chakra.Flex color={styles.colors.blue} fontSize={'large'} fontWeight={'bold'} h={5} justifyContent={'start'} alignItems='center' pr={8} mt={{ md: 11 }} mb={20}>
                        <chakra.Divider opacity={'1'} display='inline' h='1' w='300px' bg={styles.colors.blue} mr='5'></chakra.Divider>
                    </chakra.Flex>
                    <chakra.Grid
                        minH={'150vh'}
                        templateRows='repeat(2, 1fr)'
                        templateColumns='repeat(4, 1fr)'
                        gap={5}
                        
                    >
                        <chakra.GridItem {...boxStyles} rowSpan="1" colSpan="3">
                        </chakra.GridItem>
                        <chakra.GridItem  bg='papayawhip' />
                        <chakra.GridItem rowSpan="1" colSpan="3" bg='papayawhip' />
                        <chakra.GridItem  bg='tomato' />
                    </chakra.Grid>
                </chakra.Container>
            </chakra.Box>
        </>
    )
}

export default Works