import React from 'react'
import * as chakra from '@chakra-ui/react'
import { appContext } from '../../Context.jsx'
import LinkButton from '../ui/LinkButton.jsx'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { TbMailFilled } from "react-icons/tb";
import { FaPhone, FaCalendarPlus, FaFilePdf } from "react-icons/fa6";
const About = () => {
    const { styles } = React.useContext(appContext)


    return (
        <>
            <chakra.Box minH={'50vh'} w={styles.containerWidth} m="auto" pt={'15vh'}>
                <chakra.Flex align='center' position='relative' mb={{ base: '10vh', md: '15vh', lg: '20vh' }} h={'20vh'}>
                    <motion.div variants={styles.titleAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin: '0px 0px -250px 0px' }}>
                        <chakra.Heading fontSize={{ base: '15vw', md: '8xl', xl: '9xl' }} fontWeight="bold" letterSpacing={styles.headingLetterSpacing} mb='0.5rem' id='sectionTitle-about'>
                            About me
                        </chakra.Heading>
                    </motion.div>
                </chakra.Flex>
                <chakra.Box>
                    <chakra.SimpleGrid columns={{ base: 2, lg: 3 }}>
                        <chakra.GridItem gridColumn={{ base: 'span 2', lg: 'span 1' }} h={{ base: '40vh', lg: 'calc(80vh - 10vmin)' }} display='flex' alignItems={{ base: 'center', lg: 'baseline' }} justifyContent={{ base: 'center', lg: 'right' }}>
                            <chakra.Box w={{ base: "40vw", lg: "15rem" }} h={{ base: "40vw", lg: "15rem" }} as="button" overflow='hidden' boxShadow={'2xl'} rounded={'full'} border='5px solid var(--portfolio-orange)' mr={{ base: '0', lg: '2rem' }} mb={{ base: '5vh', lg: '0' }}>
                                <chakra.Image src='foto cv nueva adaptada portfolio mar25.png' w='100%' h='100%' objectFit='cover'>
                                </chakra.Image>
                            </chakra.Box>
                        </chakra.GridItem>
                        <chakra.GridItem gridColumn='span 2' h='fit-content' marginBottom='20vh'>
                            <chakra.Flex flexDirection="column" h='100%' p={{ base: '5%', lg: '0 15% 0 5%' }} justify={'center'}>
                                <motion.div variants={styles.titleAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin: '0px 0px -120px 0px' }}>
                                    <chakra.Heading fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}>Agustin</chakra.Heading>
                                    <chakra.Text fontSize={{ base: '2xl', md: '2xl' }} p={'1% 0 6% 0'}>
                                        I&apos;m Agustin, a <b>Fullstack Developer</b> from Argentina. I started this journey in <b>2021</b> and I&apos;ve
                                        been passionate about Software Development ever since. I&apos;m currently studying an <b> IT Degree</b> in
                                            <b> University of Buenos Aires</b> and working a full-time job, while keeping up to date with <b>latest technologies</b>&nbsp;
                                        through courses and online education.
                                    </chakra.Text>
                                </motion.div>
                                {/*  */}
                                <motion.div variants={styles.titleAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin: '0px 0px -160px 0px' }}>
                                    <chakra.Heading fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}>Objectives</chakra.Heading>
                                    <chakra.Text fontSize={{ base: '2xl', md: '2xl' }} p={'1% 0 6% 0'}>
                                        My primary goal is to <b>be part of the IT job market</b> with
                                        its continuous changes and fluctuations.
                                        More specifically, my dream is being a <b>digital nomad</b> and travelling
                                        the world while having a <b>SaaS project of my own</b> or being a key part in a newborn project.
                                    </chakra.Text>
                                </motion.div>
                                {/*  */}
                                <motion.div variants={styles.titleAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin: '0px 0px -200px 0px' }}>
                                    <chakra.Heading fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}>Hobbies</chakra.Heading>
                                    <chakra.Text fontSize={{ base: '2xl', md: '2xl' }} p={'1% 0 6% 0'}>
                                        I like to <b>go out clubbing</b> once in a while.
                                        I love <b>lifting weights</b> and have an eye for fashion. I enjoy cooking from time to time.
                                    </chakra.Text>
                                </motion.div>
                                {/*  */}
                                <motion.div variants={styles.titleAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin: '0px 0px -150px 0px' }}>
                                    <chakra.Heading fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}>Contact links</chakra.Heading>
                                    <chakra.Flex alignContent='center' gap='2rem' p={'2% 0 8% 0'} flexWrap={'wrap'}>
                                        <LinkButton icon={<FaGithub size='25' />} title='GitHub' href='https://github.com/agustinredin' _bgColor='#1a202c' _textColor='white' />
                                        <LinkButton icon={<FaLinkedin size='23' />} title='LinkedIn' href='https://linkedin.com/in/agustintomasredin' _bgColor='#0a66c2' _textColor='white' />
                                        <LinkButton icon={<TbMailFilled size='25' />} title='Mail' href='mailto:agustintomasredin@gmail.com' _bgColor='#bf211e' _textColor='white' />
                                        <LinkButton icon={<FaPhone size='20' />} title='Phone' href='tel:+5491141850218' _bgColor='#3fbf3a' _textColor='white' />
                                        <LinkButton icon={<FaCalendarPlus size='18' />} title='Calendly' href='https://calendly.com/agustintomasredin' _bgColor='#4144ed' _textColor='white' />
                                        <LinkButton icon={<FaFilePdf size='18' />} title='Resume' href='https://drive.google.com/file/d/1X1s-VTXB_Q00S1YpvHvmIJkx0R0FAJfM/view?usp=drive_link' _bgColor='white' _textColor='#1a202c' _border={true}/>
                                    </chakra.Flex>
                                </motion.div>
                            </chakra.Flex>
                        </chakra.GridItem>
                    </chakra.SimpleGrid>
                </chakra.Box>
            </chakra.Box>
            <chakra.Box display='flex' scrolldelay="50" scrollamount="50" as='marquee' textAlign={'center'} fontSize={{ base: '15', lg: '20' }} justifyContent={'center'} p='1rem' bg='var(--portfolio-orange)' color='white' zIndex={'9998'} position={'absolute'}  width='100%' bottom='0px'>
                Built in 2024 by Agustin Redin
            </chakra.Box>
        </>
    )
}

export default About