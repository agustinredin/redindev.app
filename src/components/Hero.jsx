import * as chakra from '@chakra-ui/react'
import { useContext } from 'react'
import { appContext } from '../Context.jsx'
import Typewriter from './Typewriter.jsx'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
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
        <chakra.Container minW={{ base: '90vw', lg: '70vw' }} m={'auto'} minH={'100vh'} >
                <chakra.Flex direction="column">
                    <chakra.Flex h={{ base: "20vh", md: "15vh" }} justifyContent={'space-between'} alignItems={'center'}  px={'3rem'} py={5}>
                        <chakra.Box transition='all 1s' _hover={''} as="button" w='6rem' h='6rem' display={"block"} overflow='hidden' boxShadow={'lg'} rounded={55} padding='2px' border='2px solid var(--portfolio-orange)'>
                            <chakra.Image src='foto hero.png' w='100%' pos='relative' top='-20px'>
                            </chakra.Image>
                        </chakra.Box>
                        <chakra.IconButton
                            p={2} fontSize={48}
                            size="lg"
                            icon={<chakra.Icon as={HamburgerIcon} />}
                            rounded="none"
                            px={2}
                            bg={'none'}
                            color={'black'}
                            aria-label="Abrir menú"
                            display={{ base: 'inherit' }} />
                    </chakra.Flex>
                    <chakra.Flex justifyContent={'end'} w='100%' mb={{sm: 10}}>
                        <chakra.Flex w='fit-content' h={5} padding='15px' justifyContent={'end'} alignItems='center' mr={'3.5rem'} mt={{ md: 10 }} rounded={5} background="rgb(150 255 150 / 50%)">
                            <chakra.Divider display='inline' h='2' w='2' mr='2' rounded={5} bg={styles.colors.black}></chakra.Divider> <chakra.Text>Available for work</chakra.Text>
                        </chakra.Flex>
                    </chakra.Flex>
                    <chakra.Box mt={{ md: 10 }} ml={'3rem'}>
                        <chakra.Box w={'fit-content'}>
                            <chakra.Box position="relative" w={{md: '441px', lg: '100%'}}>
                                <chakra.Box position="absolute" top="0" right="0" bottom="0" left="0" zIndex="1" pointerEvents="none">
                                    <chakra.Box position="absolute" left="0" top="0" bottom="0" w="10%" bgGradient="linear(to-r, rgba(255,255,255,1), transparent)"></chakra.Box>
                                    <chakra.Box position="absolute" right="0" top="0" bottom="0" w="10%" bgGradient="linear(to-l, rgba(255,255,255,1), transparent)"></chakra.Box>
                                </chakra.Box>
                                <chakra.Text as="marquee" behavior="scroll" color="var(--portfolio-blue)" direction="right" scrollamount="10" zIndex="0" position="relative">Currently {currdate} here in Argentina</chakra.Text>
                            </chakra.Box>
                            <chakra.Heading w display={'block'} fontSize={'120'} letterSpacing={styles.headingLetterSpacing} className='transparent stroke-black'>Agustin Redin</chakra.Heading>
                        </chakra.Box>
                        <chakra.Heading fontSize={'90'}>
                            a Fullstack Developer
                        </chakra.Heading>
                        <chakra.Box fontFamily={"'Geist Sans', sans-serif"} fontSize={'85'} className="portfolio-orange-hex"  height={{sm:'4.5em', md: '4em', lg:'fit-content'}}>
                            <Typewriter delay={5000} messages={messages} wrapperTag={'h2'}/>
                        </chakra.Box>

                    </chakra.Box>
                    <chakra.Flex mx={'4rem'} px={'4rem'} className={'button-custom'} mt={'2rem'} alignItems={'center'} position="relative">
                        <chakra.Text className='highlight' fontSize={'40'}> Get in touch </chakra.Text>
                        <chakra.Icon mx={'0.15em'} fontSize={'20'} as={HiArrowUpRight}/>
                    </chakra.Flex>
                </chakra.Flex>
        </chakra.Container>
    )
}

export default Hero