import React, { useContext } from 'react'
import * as chakra from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { appContext } from '../Context.jsx'
import Work from './Work.jsx'

const Works = () => {
    const { styles } = useContext(appContext)


    let data = [
        {
            colSpan: 3,
            rowSpan: 1,
            duration: {
                fromYear: 2021,
                toYear: 2023
            },
            title: 'Vigiloo',
            logo: 'vigiloo.png',
            tags: ['Logistics', 'API Development', 'IoT', 'Entity Framework'],
            body: '.NET project for logistics management. Completed <b>2 API integrations</b> and modeled data for complex Web App. This project involved working closely with the client to understand their specific requirements and deliver a <b>scalable solution</b>.',
            tech: ['csharp', 'dotnet', 'html', 'css', 'js', 'mssql']
        },
        {
            colSpan: 2,
            rowSpan: 1,
            duration: {
                fromYear: 2022,
                toYear: 2022
            },
            title: 'Gamarra',
            logo: 'gamarra.png',
            tags: ['Landing page', 'Personal trainer', 'Bootstrap 5', 'Responsive design'],
            body: 'Landing page for a personal trainer. Built using <b>Bootstrap</b> and <b>SASS</b> for styles and applying <b>responsive design</b> principles. The page includes a contact form for potential clients.',
            tech: ['html', 'sass', 'bootstrap']
        },
        {
            colSpan: 2,
            rowSpan: 1,
            duration: {
                fromYear: 2023,
                toYear: 2023
            },
            title: 'Hypestore',
            logo: 'hypestore.png',
            tags: ['E-Commerce', 'UI Design', 'Front-end frameworks', 'Cloud database'],
            body: 'Front-end design-oriented <b>E-commerce template</b> built using React and ChakraUI. This project focused on creating a <b>user-friendly interface</b> with smooth animations to enhance the shopping experience.',
            tech: ['vite', 'react', 'reactrouter', 'chakraui', 'firebase']
        },
        {
            colSpan: 3,
            rowSpan: 1,
            duration: {
                fromYear: 2023,
                toYear: 2024
            },
            title: 'Mymtec',
            logo: 'mymtec.png',
            tags: ['Foreign trade', 'Management system', '.NET Core', 'MVC Architecture'],
            body: 'Reforming a 2006 foreign trade system using modern .NET and <b>SPA architecture</b> with advanced performance techniques. This project aimed to <b>streamline processes</b>, improve user experience, and enhance overall efficiency.',
            tech: ['csharp', 'dotnet', 'vb', 'html', 'css', 'js']
        }
    ]


    return (
        <chakra.Box minH={'150vh'} w={styles.containerWidth} m="auto" pt={'30vh'}>
            <chakra.Box position='relative' mb={{base: '0vh', md: '15vh', lg: '10vh'}}>
                <chakra.Heading fontSize={{ base: '7xl', md: '8xl', xl: '9xl' }} fontWeight="bold" letterSpacing={styles.headingLetterSpacing} mb='0.5rem'>
                    Projects 
                </chakra.Heading>
                <chakra.Heading position='absolute' top='-15%' opacity='0.1' left='40%' zIndex={9999} display={'block'} fontSize={{ base: '250', md: '300', xl: '350' }} letterSpacing={styles.headingLetterSpacing}>
                    &
                </chakra.Heading>
                <chakra.Heading fontSize={{ base: '7xl', md: '8xl', xl: '9xl' }} fontWeight="bold" letterSpacing={styles.headingLetterSpacing}>
                    contributions 
                </chakra.Heading>
            </chakra.Box>
            <chakra.SimpleGrid columns={{ base: 2, md: 4 }} spacing={5} autoFlow="row dense">
            {
                data.map((elem, i) => (
                    <Work elem={elem} key={i}/>
                ))
            }
        </chakra.SimpleGrid>
        </chakra.Box>
        /*{ <chakra.Grid
            w={styles.containerWidth} m="auto" pt={'30vh'}
            minH="150vh"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={5}
        >
            <chakra.GridItem colSpan="5" rowSpan={'1'} display='flex' alignItems={'flex-end'}>
                <chakra.Heading fontSize="7xl" mb={'10vh'} fontWeight="bold" letterSpacing={styles.headingLetterSpacing}>
                    Projects & contributions
                </chakra.Heading>
            </chakra.GridItem>
            {
                data.map((elem, i) => (
                    <Work elem={elem} key={i}/>
                ))
            }
        </chakra.Grid> }*/
    )
}

export default Works