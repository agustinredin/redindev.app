import React, { useContext } from 'react'
import * as chakra from '@chakra-ui/react'
import { motion } from 'framer-motion'

const boxStyles = {
    boxShadow: '2xl',
    overflow: 'hidden',
    borderRadius: '5%'
}

const fadeInAnimationVariants = {
    initial: {
        opacity: 0
    },
    animate: (index) => ({
        opacity: 1,
        transition: {
            delay: 0.15 * index
        }
    }),
}

const Work = ({ elem }, key) => {
    console.log(elem)

    let durationString = elem.fromYear && elem.ToYear ? elem.fromYear === elem.toYear ? `${elem.fromYear}` : `${elem.fromYear}-${elem.toYear}` : `${elem.fromYear}-NOW`
    return (
        <chakra.GridItem {...boxStyles} colSpan={{ 'base': '5', xl: elem.colSpan }} rowSpan={elem.colSpan}>
            <motion.div style={{ height: '100%' }} variants={fadeInAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true }} custom={key}>
                <chakra.Box h='30%' p='2rem 2rem 0 2rem' display={'flex'} justifyContent={'space-around'}>
                    <chakra.Flex w='80%' flexDirection='column' justifyContent='center'>
                        <chakra.Text fontSize='xl'>{durationString}</chakra.Text>
                        <chakra.Heading fontSize='8xl'>{elem.title}</chakra.Heading>
                    </chakra.Flex>
                    <chakra.Flex w='20%' alignItems={'center'} justifyContent={'center'}>
                        <chakra.Flex w='100%' h='100%' overflow='hidden'>
                            <chakra.Image src={elem.logo}>
                            </chakra.Image>
                        </chakra.Flex>
                    </chakra.Flex>
                </chakra.Box>
                <chakra.Box h='70%' flexDirection={'column'} display='flex' justifyContent='space-around' p='1rem 2rem 2rem 2rem'>
                    <chakra.Flex flexDirection={'column'}>{/*caja body*/}
                        <chakra.Flex h='2rem' gap='10px'>
                            {
                                elem.tags.map((tag, key) => (<chakra.Flex key={key} minW='3rem' borderRadius='5px' bg='var(--portfolio-blue)' justifyContent={'center'} alignItems={'center'} p='1'><chakra.Text fontFamily={'monospace !important'} color='white'>{tag}</chakra.Text></chakra.Flex>))
                            }
                        </chakra.Flex>
                        <chakra.Flex maxW='80%' wordBreak='break-word' my='3rem'>
                            <chakra.Text fontSize='xl'>{elem.body}</chakra.Text>
                        </chakra.Flex>
                    </chakra.Flex>
                    <chakra.Flex h='fit-content' gap='1rem' alignItems={'center'} flexDirection={'row'}>{/*tech usada*/}
                        {
                            elem.tech.map((tool, key) => {
                                return (
                                    <chakra.Flex w='4rem' h='4rem' overflow='hidden' key={key}>
                                        <chakra.Image src={`${tool}.png`}>
                                        </chakra.Image>
                                    </chakra.Flex>
                                )
                            })
                        }
                    </chakra.Flex>
                </chakra.Box>
            </motion.div>
        </chakra.GridItem>

    )
}

export default Work