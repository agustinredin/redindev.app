import React, { useContext } from 'react'
import * as chakra from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { appContext } from '../Context.jsx'

const Works = () => {
    const { styles } = useContext(appContext)

    const boxStyles = {
        boxShadow: 'xl', 
        rounded: '55',
        padding: '2px',
        overflow: 'hidden',
        borderRadius: '10%',
        borderTop: '1px solid #e4e4e4'
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        },
        exit: { opacity: 0 }
    }

    const childVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <>
            <chakra.Box minH="100vh" pt={{ sm: '20vh', md: '15vh', lg: '10vh' }}>
                <chakra.Container minW={{ base: '90vw', md: '80vw' }} m="auto">
                    <chakra.Heading fontSize="5xl" mb={1} fontWeight="bold">
                        Works & contributions
                    </chakra.Heading>
                    <chakra.Flex 
                        color={styles.colors.blue} 
                        fontSize="large" 
                        fontWeight="bold" 
                        h={5} 
                        justifyContent="start" 
                        alignItems="center" 
                        pr={8} 
                        mt={{ md: 11 }} 
                        mb={20}
                    >
                        <chakra.Divider 
                            opacity="1" 
                            display="inline" 
                            h="1" 
                            w="300px" 
                            bg={styles.colors.blue} 
                            mr="5"
                        />
                    </chakra.Flex>
                    <AnimatePresence>
                        <chakra.Grid
                            as={motion.div}
                            minH="150vh"
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                            gap={5}
                            initial="hidden" 
                            animate="visible" 
                            exit="exit" 
                            variants={containerVariants}
                        >
                            <chakra.GridItem 
                                as={motion.div} 
                                key={0} 
                                variants={childVariants} 
                                bg="tomato" 
                                rowSpan="1" 
                                colSpan="3" 
                            />
                            <chakra.GridItem 
                                as={motion.div} 
                                key={1} 
                                variants={childVariants} 
                                bg="papayawhip" 
                                colSpan="2" 
                            />
                            <chakra.GridItem 
                                as={motion.div} 
                                key={2} 
                                variants={childVariants} 
                                rowSpan="1" 
                                colSpan="3" 
                                bg="papayawhip" 
                            />
                            <chakra.GridItem 
                                as={motion.div} 
                                key={3} 
                                variants={childVariants} 
                                bg="tomato" 
                            />
                        </chakra.Grid>
                    </AnimatePresence>
                </chakra.Container>
            </chakra.Box>
        </>
    )
}

export default Works