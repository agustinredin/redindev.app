import * as chakra from '@chakra-ui/react'
import { useContext } from 'react'
import { appContext } from '../Context.jsx'
import Typewriter from './Typewriter.jsx'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Hero = () => {

    const messages = [
        'making dynamic applications',
        'solving real world problems',
        'pushing the web forward.']

    const { styles } = useContext(appContext)

    return (
        <chakra.Container minW={{ base: '90vw', md: '80vw' }} m={'auto'}>
            <chakra.Box>

                <chakra.Flex direction="column">

                    <chakra.Flex h={{ base: "20vh", md: "15vh" }} justifyContent={'space-between'} alignItems={'stretch'} px={2} py={5}>
                        <chakra.Box transition='all 1s' _hover={''} as="button" w='6rem' h='6rem' display={"block"} overflow='hidden' boxShadow={'lg'} rounded={55} padding='2px' border='2px solid var(--portfolio-blue)'>
                            <chakra.Image src='foto hero.png' w='100%' pos='relative' top='-20px'>
                            </chakra.Image>
                        </chakra.Box>
                        <chakra.Box as="button" display={"block"}>
                        <chakra.IconButton
                            p={2} fontSize={20}
                            size="lg"
                            /* icon={!isOpen ? <Icon as={HamburgerIcon} /> : <CloseIcon />} */
                            icon={<chakra.Icon as={HamburgerIcon} />}
                            rounded="none"
                            border="1px solid black"
                            px={2}
                            bg={'none'}
                            color={'black'}
                            _hover={{
                                bg: 'blackAlpha.900',
                                color: 'whiteAlpha.900'
                            }}
                            aria-label="Abrir menú"
                            display={{ base: 'inherit', lg: 'none' }}
                            /* onClick={isOpen ? onClose : onOpen} */ />
                        </chakra.Box>
                    </chakra.Flex>
                    <chakra.Flex color={styles.colors.blue} fontSize={'large'} fontWeight={'bold'} h={5} justifyContent={'end'} alignItems='center' pr={8} mt={{ md: 10 }}>
                        <chakra.Divider display='inline' h='1' w='20' bg={styles.colors.blue} mr='5'></chakra.Divider> <chakra.Heading fontSize='medium'>Available for work</chakra.Heading>
                    </chakra.Flex>
                    <chakra.Box mt={{ md: 10 }}>
                        <chakra.Heading fontSize={'100'} letterSpacing={styles.headingLetterSpacing} className='transparent stroke-blue'>Hello! I&apos;m Agustin👋</chakra.Heading>

                        <chakra.Heading fontSize={'80'}>
                            I&apos;m a <span className='portfolio-blue-hex'>Fullstack Developer</span> from <span className='portfolio-blue-hex'>Argentina </span>
                            focused on <br />
                            <span className="portfolio-blue-hex">
                                <Typewriter delay={5000} messages={messages} />
                            </span>
                        </chakra.Heading>
                    </chakra.Box>
                    <chakra.Flex>
                        3
                    </chakra.Flex>
                </chakra.Flex>
            </chakra.Box>
        </chakra.Container>
    )
}

export default Hero