import * as chakra from '@chakra-ui/react'
import { useContext } from 'react'
import { appContext } from '../../Context.jsx'
import Typewriter from '../ui/Typewriter.jsx'
import { HiArrowUpRight } from "react-icons/hi2";

const Hero = () => {

    const messages = [
        'making dynamic apps',
        'solving real world stuff',
        'pushing the web forward',
        'crafting user experiences',
        'coding efficiently',
        'embracing new tech']

    const { styles } = useContext(appContext)

    let currdate = new Date(new Date().getTime()).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    return (
        <chakra.Box m={'auto'} minH={'100vh'} w={styles.containerWidth}>
            <chakra.Flex direction="column">
                <chakra.Flex justifyContent={'end'} w='100%' my={10}>
                    <chakra.Flex w='fit-content' h={5} padding='15px' justifyContent={'end'} alignItems='center' rounded={5} background="rgb(150 255 150 / 50%)">
                        <chakra.Divider display='inline' h='2' w='2' mr='2' rounded={5} bg={styles.colors.black}></chakra.Divider> <chakra.Text>Available for work</chakra.Text>
                    </chakra.Flex>
                </chakra.Flex>
                <chakra.Box mt={{ md: 10 }}>
                    <chakra.Box w={'fit-content'}>
                        <chakra.Box position="relative" w={{ base: '264px', md: '441px', xl: '100%' }}>
                            <chakra.Box position="absolute" top="0" right="0" bottom="0" left="0" zIndex="1" pointerEvents="none">
                                <chakra.Box position="absolute" left="0" top="0" bottom="0" w="10%" bgGradient="linear(to-r, rgba(255,255,255,1), transparent)"></chakra.Box>
                                <chakra.Box position="absolute" right="0" top="0" bottom="0" w="10%" bgGradient="linear(to-l, rgba(255,255,255,1), transparent)"></chakra.Box>
                            </chakra.Box>
                            <chakra.Text as="marquee" behavior="scroll" color="var(--portfolio-blue)" direction="right" scrollamount="10" zIndex="0" position="relative">Currently {currdate} here in Argentina</chakra.Text>
                        </chakra.Box>
                        <chakra.Heading w display={'block'} fontSize={{ base: '70', md: '120', lg: '120' }} letterSpacing={styles.headingLetterSpacing} className='transparent stroke-black'>Agustin Redin</chakra.Heading>
                    </chakra.Box>
                    <chakra.Heading fontSize={{ base: '50', md: '80', lg: '90' }}>
                        Fullstack Developer
                    </chakra.Heading>
                    <chakra.Box fontFamily={"'Geist Sans', sans-serif"} fontSize={{ base: '45', md: '70', lg: '82' }} className="portfolio-orange-hex" height={{ base: '350px', md: '4em', lg: '3em', xl: '2em' }}>
                        <Typewriter delay={5000} messages={messages} wrapperTag={'h2'} />
                    </chakra.Box>

                </chakra.Box>

                <chakra.Link href='https://calendly.com/agustintomasredin' target='_blank' textDecoration={'none !important'}>
                    <chakra.Flex ml={{ sm: '0px', md: '1em', lg: '2em' }} justifyContent={'center'} w={{ sm: '100%', md: '75%', lg: '60%', xl: '50%' }} px={{ base: '2rem', md: '4rem' }} h={{ base: '8em' }} className={'button-custom'} mt={{ sm: '0.5rem', md: '10em', xl: '6em' }} alignItems={'center'} position="relative">
                        <chakra.Text className='highlight' fontSize={{ base: '30', xl: '40' }}> Schedule a call </chakra.Text>
                        <chakra.Icon mx={'0.15em'} fontSize={'20'} as={HiArrowUpRight} />
                    </chakra.Flex>
                </chakra.Link>
            </chakra.Flex>
        </chakra.Box>
    )
}

export default Hero