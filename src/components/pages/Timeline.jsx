import React from 'react'
import * as chakra from '@chakra-ui/react'
import { appContext } from '../../Context.jsx'
import { MdWork } from "react-icons/md";
import { FaUserGraduate, FaCode } from "react-icons/fa6";
import { motion } from 'framer-motion'

const Timeline = () => {
    const { styles } = React.useContext(appContext)

    let timelineData = [
        {
            idx: 0,
            icon: <MdWork size='28%' />,
            title: "TMS, RTV and Core Systems",
            place: 'Vigiloo',
            desc: '.NET project for logistics management with Last-Mile solutions, Cargo delivery tracking and IoT solutions.',
            fromYear: '2021',
            toYear: '2023'
        },
        {
            idx: 1,
            icon: <FaUserGraduate size='22%' />,
            title: "Bachelor's Degree in Information Systems",
            place: 'University of Buenos Aires - School of Economics',
            desc: 'Not your standard IT degree. It stems from the Economics School of the University of Buenos Aires, so there is general business management as well.',
            fromYear: '2022',
            toYear: '2027 (EXPECTED)'
        },
        {
            idx: 2,
            icon: <FaCode size='30%' />,
            title: "Web Development Course",
            place: 'Coderhouse',
            desc: 'Web Development course carried out along the span of four months reinforcing HTML, CSS and JS.',
            fromYear: '2022',
            toYear: '2022'
        },
        {
            idx: 3,
            icon: <FaCode size='30%' />,
            title: "ReactJS Course",
            place: 'Coderhouse',
            desc: 'ReactJS course finished October 2023. Created a custom project using custom UI and integrated Firebase.',
            fromYear: '2023',
            toYear: '2023'
        },
        {
            idx: 4,
            icon: <MdWork size='28%' />,
            title: "Dux3",
            place: 'Mymtec',
            desc: 'Reforming a 2006 foreign trade system using .NET Stack.',
            fromYear: '2023',
            toYear: '2024'
        },
        {
            idx: 5,
            icon: <FaCode size='30%' />,
            title: "Product Manager Course",
            place: 'Coderhouse',
            desc: 'Studied how to develop a commercial strategy for a Digital Product and have positive market impact.',
            fromYear: '2024',
            toYear: '2024'
        },
    ]

    return (
        <chakra.Box minH={'150vh'} w={styles.containerWidth} m="auto" pt={'30vh'}>
            <chakra.Box position='relative' mb={{ base: '10vh', md: '15vh', lg: '20vh' }} h={'20vh'} id='sectionTitle-timeline'>
                <motion.div variants={styles.titleAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin: '0px 0px -200px 0px' }}>
                    <chakra.Heading fontSize={{ base: '15vw', md: '8xl', xl: '9xl' }} fontWeight="bold" letterSpacing={styles.headingLetterSpacing} mb='0.5rem'>
                        Timeline
                    </chakra.Heading>
                </motion.div>
            </chakra.Box>
            <chakra.Box>
                {
                    timelineData.map((item, key) => (
                        <TimeLineItem item={item} isLastChild={item.idx == timelineData.length - 1} key={key} styles={styles} />
                    ))
                }
            </chakra.Box>
        </chakra.Box>

    )
}

const TimeLineItem = ({ item, isLastChild, styles }, key) => {

    const SvgArrow = ({ rotate, display }) => {
        return display ? (
            <chakra.Box position="absolute" width='200px' top='66%' left={!rotate ? '52%' : '48%'} transform={rotate ? 'translate(-50%, -50%) scale(-1, 1)' : 'translate(-50%, -50%)'}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 800" width="100%" height="100%">
                    <g strokeWidth="10" stroke="#FF5800" fill="none" strokeLinecap="square" transform="matrix(0.6560590289905073,0.754709580222772,-0.754709580222772,0.6560590289905073,438.4602204929059,-164.30744368531168)">
                        <path d="M261 261Q449 348 539 539 " markerEnd="url(#SvgjsMarker1802)"></path>
                    </g>
                    <defs>
                        <marker markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" viewBox="0 0 5 5" orient="auto" id="SvgjsMarker1802">
                            <polygon points="0,5 0,0 5,2.5" fill="#FF5800"></polygon>
                        </marker>
                    </defs>
                </svg>
            </chakra.Box>
        ) : null
    }

    let breakpoint = (() => {
        let current = chakra.useBreakpoint()
        return current == 'base' || current == 'sm' ? 'sm' : current == 'md' || current == 'lg' ? 'md' : 'lg'
    })()

    let even = (() => {
        return item.idx == 0 || item.idx % 2 == 0;
    })()

    const getResponsiveProperties = (() => {

        //[0, 1, 2]
        return [
            {
                display: 'flex',
                order: even && breakpoint == 'lg' ? 2 : breakpoint == 'md' ? 1 : 0,
                gridColumn: 'span 2'
            },
            {
                display: breakpoint !== 'sm' ? 'block' : 'none',
                order: breakpoint == 'lg' ? 1 : 0,
                gridColumn: 'span 1'
            },
            {
                display: breakpoint === 'lg' ? 'block' : 'none',
                order: even && breakpoint == 'lg' ? 0 : 2,
                gridColumn: 'span 2'
            }
        ]
    })()

    const gridItemDisplayProps = ({ display, order, gridColumn }) => {
        return {
            h: 'calc(60vh - 10vmin)',
            gridRow: 'span 1',
            display,
            gridColumn,
            order
        }
    }

    return (
        <chakra.SimpleGrid columns={{ base: 2, md: 3, xl: 5 }} w='100%' key={key}>
            <chakra.GridItem {...gridItemDisplayProps(getResponsiveProperties[0])} alignItems={'center'}>
                <TimelineItemDescription item={item} styles={styles} />
            </chakra.GridItem>
            <chakra.GridItem {...gridItemDisplayProps(getResponsiveProperties[1])}>
                <chakra.Flex align='center' justify='center' h='100%' transform='scale(3)' position='relative'>
                    <chakra.Flex className='timeline-highlight' w='25%' h='25%' align='center' justify='center' pr={even ? '8px' : '0px'} pl={!even ? '4px' : '0px'}>
                        {item.icon}
                    </chakra.Flex>
                    <SvgArrow rotate={even} display={!isLastChild} />
                </chakra.Flex>
            </chakra.GridItem>
            <chakra.GridItem {...gridItemDisplayProps(getResponsiveProperties[2])}></chakra.GridItem>
        </chakra.SimpleGrid>
    )
}

const TimelineItemDescription = ({ item, styles }) => {
    let durationString = item.fromYear == item.toYear ? item.fromYear : `${item.fromYear} - ${item.toYear}`
    return (
        <motion.div variants={styles.titleAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin: '0px 0px -300px 0px' }}>
            <chakra.Flex flexDirection="column" h={{ base: '', md: '100%' }} p='5%' justify={'center'}>
                <chakra.Text className={'portfolio-blue-hex'} fontSize={{ base: '2xl', md: '2xl' }}>{durationString}</chakra.Text>
                <chakra.Heading fontSize={{ base: '3xl', md: '2xl', lg: '3xl' }}>{item.title}</chakra.Heading>
                <chakra.Text fontSize={{ base: '2xl', md: '2xl' }}>{item.place}</chakra.Text>
                <chakra.Text fontSize={{ base: '2xl', md: '2xl' }} py={'5%'}>{item.desc}</chakra.Text>
            </chakra.Flex>
        </motion.div>
    )
}

export default Timeline