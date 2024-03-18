import React from 'react'
import * as chakra from '@chakra-ui/react'
import { appContext } from '../../Context'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
    const { styles } = React.useContext(appContext)
    const { isOpen, onOpen, onClose } = chakra.useDisclosure()

    const navItems = [
        {
            key: 0,
            title: 'Works',
            href: 'works'
        },
        {
            key: 1,
            title: 'Timeline',
            href: 'timeline'
        },
        {
            key: 2,
            title: 'Skills',
            href: 'skills'
        },
        {
            key: 3,
            title: 'About me',
            href: 'about'
        }
    ]

    return (
        <>
            <chakra.Flex h={{ base: "10vh", md: "10vh" }} justifyContent={'space-between'} alignItems={'end'} position='sticky' w={styles.containerWidth} m='auto'>
                <chakra.Heading fontSize='30' letterSpacing={styles.headingLetterSpacing} className='transparent stroke-black'>AR</chakra.Heading>
                <chakra.IconButton
                    fontSize={48}
                    size="lg"
                    icon={<chakra.Icon as={HamburgerIcon} />}
                    rounded="none"
                    bg={'none'}
                    color={'black'}
                    aria-label="Abrir menú"
                    onClick={isOpen ? onClose : onOpen} />
            </chakra.Flex>
            {isOpen && (
                <chakra.Box display={{ base: 'flex', lg: 'none' }} px='5' pb='5' position='absolute' zIndex='999' background='white' w='100%'>
                    <chakra.Stack as="nav" spacing={5} animation={'ease-in-out'}>
                        <chakra.Drawer onClose={onClose} isOpen={isOpen} size={'full'} placement='left'>
                            <chakra.DrawerOverlay />
                            <chakra.DrawerContent>
                                <chakra.DrawerCloseButton size={'lg'} my={3} />
                                <chakra.DrawerHeader display={'flex'} justifyContent={'center'} pt='1.5rem'>
                                    <chakra.Heading fontSize='30' letterSpacing={styles.headingLetterSpacing} className='transparent stroke-black'>AR</chakra.Heading>
                                </chakra.DrawerHeader>
                                <chakra.DrawerBody>
                                    <chakra.Flex marginLeft='10vw' justifyContent='center' alignItems='' direction='column' h='100%' gap={10} w='fit-content'>
                                        {/*                               {navItems.map((item, key) => {
                              const isActiveElement = location === item.path.split('/').pop()
                              return (
                                <chakra.Box key={key} color={!isActiveElement ? 'blackAlpha.900' : 'whiteAlpha.900'} background={isActiveElement ? 'blackAlpha.900' : 'none'} _hover={location !== item.path.split('/').pop() ? {background: 'blackAlpha.900', color: 'whiteAlpha.900'} : {}} px={5} py={1}>
                                  
                                  <chakra.NavLink to={`${item.path}`} onClick={isActiveElement ? null : onClose}>
                                    <chakra.Text fontSize='xxx-large'  transitionDuration='0.5s' fontWeight='500'>{item.name}</chakra.Text>
                                  </chakra.NavLink>
                                </chakra.Box>
                              )})} */}
                                        <chakra.Box>
                                            {
                                                navItems.map((item, key) => (
                                                    <NavLink item={item} key={key} onClose={onClose}/>
                                                ))
                                            }
                                        </chakra.Box>
                                    </chakra.Flex>
                                </chakra.DrawerBody>
                            </chakra.DrawerContent>
                        </chakra.Drawer>
                    </chakra.Stack>
                </chakra.Box>
            )}
        </>
    )
}

const NavLink = ({ item, key, onClose }) => {
    console.log(item, key, onClose)
    const handleClick = (tag) => {
        const section = document.getElementById(`sectionTitle-${tag}`)
        if(section)
        {
            onClose()
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <chakra.Heading className='hover-custom' fontSize={{base: '5xl', sm: '7xl', md: '8xl'}} lineHeight={'2 !important'} transitionDuration='0.5s' fontWeight='500' onClick={() => handleClick(item.href)}>{item.title}</chakra.Heading>
    )
}

export default Navbar