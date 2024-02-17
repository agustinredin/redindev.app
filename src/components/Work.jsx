import React from 'react';
import * as chakra from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Work = ({ elem }, key) => {
    const durationString = elem.duration.fromYear && elem.duration.toYear ? elem.duration.fromYear === elem.duration.toYear ? `${elem.duration.fromYear}` : `${elem.duration.fromYear}-${elem.duration.toYear}` : `${elem.duration.fromYear}-NOW`;

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0
        },
        animate: (index) => ({
            opacity: 1,
            transition: {
                delay: 3 * index
            }
        }),
        exit: {
            opacity: 0,
            transition: {
                delay: 2
            }
        }
    }

    return (
        /*To do: 1 hacer logo el bg en greyscale y con gradient a transparente hacia el lado izq */
        /*To do: 2 achicar titulo segun viewport */
        /*To do: 3 darle un titulo a tech usada con geist mono y ajustar ese div abajo de todo de la caja */
        /*To do: 4 reagregar titulo general a seccion */
        /*To do: 5 ajustar grillas segun viewport para que sea bento grid */
        
        <chakra.Box gridColumn='span 2' gridRow='span 1' boxShadow={'xl'} borderRadius={'3%'} p='2rem'>
            <motion.div style={{height: '100%'}} variants={fadeInAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true }} custom={key}>
                <chakra.Box h={'20%'} display={'flex'} flexDirection={{ base: 'row', md: 'row' }} justifyContent={'space-between'} m='0' p='0'>
                    <chakra.Flex flex={2} flexDirection='column' justifyContent='center' alignItems='flex-start'>
                        <chakra.Text fontSize={{ base: 'md', md: 'xl' }}>{durationString}</chakra.Text>
                        <chakra.Heading fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}>{elem.title}</chakra.Heading>
                    </chakra.Flex>
                    <chakra.Flex flex={1} justifyContent={'flex-end'}>
                        <chakra.Image src='foto hero.png' w='6rem' h='6rem' objectFit='cover' alignSelf={'center'}>
                        </chakra.Image>
                    </chakra.Flex>
                </chakra.Box>
                <chakra.Box h={'80%'} display='flex' flexDirection={'column'} justifyContent='space-around'>
                    <chakra.Flex flexDirection={'column'} gap='4' overflow='hidden'>
                        <chakra.Flex flexDirection={'row'} wrap='wrap' gap='4'>
                            {elem.tags.map((tag, index) => (
                                <chakra.Flex key={index} minW='3rem' borderRadius='5px' bg='var(--portfolio-blue)' justifyContent={'center'} alignItems={'center'} p='1'>
                                    <chakra.Text fontFamily={'monospace !important'} color='white'>{tag}</chakra.Text>
                                </chakra.Flex>
                            ))}
                        </chakra.Flex>
                        <chakra.Text fontSize={{ base: 'sm', md: 'xl' }} my='1rem' dangerouslySetInnerHTML={{ __html: elem.body }}></chakra.Text>
                    </chakra.Flex>
                    <chakra.Flex gap='2rem' alignItems={'center'} flexDirection={'row'} wrap='wrap'>
                        {elem.tech.map((tool, index) => (
                            <chakra.Image key={index} src={`${tool}.png`} boxSize='3rem' objectFit='contain' filter='grayscale(0.5)' alt={tool} />
                        ))}
                    </chakra.Flex>
                </chakra.Box>
            </motion.div>
        </chakra.Box>
    );
};

export default Work;
