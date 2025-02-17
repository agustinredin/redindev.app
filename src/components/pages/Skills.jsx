import React from 'react'
import * as chakra from '@chakra-ui/react'
import { appContext } from '../../Context'
import { motion } from 'framer-motion';

//iconos
import { SiBootstrap } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiVisualbasic } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";

const Skills = () => {
  const { styles } = React.useContext(appContext)

  let skillItems = [
    { icon: <SiBootstrap color="var(--portfolio-orange"/>, title: 'Bootstrap' },
    { icon: <SiChakraui color="var(--portfolio-orange"/>, title: 'ChakraUI' },
    { icon: <SiCss3 color="var(--portfolio-orange"/>, title: 'CSS3' },
    { icon: <SiCsharp color="var(--portfolio-orange"/>, title: 'C#' },
    { icon: <SiDotnet color="var(--portfolio-orange"/>, title: '.NET Framework' },
    { icon: <SiExpress color="var(--portfolio-orange"/>, title: 'Express' },
    { icon: <SiFirebase color="var(--portfolio-orange"/>, title: 'Firebase' },
    { icon: <SiHtml5 color="var(--portfolio-orange"/>, title: 'HTML5' },
    { icon: <SiJavascript color="var(--portfolio-orange"/>, title: 'JavaScript' },
    { icon: <SiMysql color="var(--portfolio-orange"/>, title: 'MySQL' },
    { icon: <SiNodedotjs color="var(--portfolio-orange"/>, title: 'Node.js' },
    { icon: <SiPostman color="var(--portfolio-orange"/>, title: 'Postman' },
    { icon: <SiReact color="var(--portfolio-orange"/>, title: 'React' },
    { icon: <SiReactrouter color="var(--portfolio-orange"/>, title: 'React Router' },
    { icon: <SiSass color="var(--portfolio-orange"/>, title: 'Sass' },
    { icon: <SiVisualbasic color="var(--portfolio-orange"/>, title: 'Visual Basic' },
    { icon: <TbBrandVite color="var(--portfolio-orange"/>, title: 'Vite' }
  ]


  const fadeInAnimationVariants = {
    initial: {
        opacity: 0
    },
    animate: (index) => ({
        opacity: 1,
        transition: {
            delay: 0.05 * index
        }
    }),
    exit: {
        opacity: 0,
        transition: {
            delay: 2
        }
    },
}

  return (
    <chakra.Box minH={'50vh'} id='skills' w={styles.containerWidth} m="auto" pb={'5vh'}>
            <chakra.Flex align='center' position='relative' mb={{ base: '5vh', md: '7vh' }} h={'20vh'} justifyContent={'center'}>
                {/* <motion.div variants={styles.titleAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin: '-200px' }}> */}
                    <chakra.Heading fontSize={{ base: '10vw', md: '5xl', xl: '7xl' }} fontWeight="bold" letterSpacing={styles.headingLetterSpacing}  mb='0.5rem' id='sectionTitle-skills'>
                        Skills <span className='transparent stroke-black'>& Tools</span>
                    </chakra.Heading>
                {/* </motion.div> */}
            </chakra.Flex>
      <chakra.Flex wrap='wrap' gap='2rem' alignItems={'center'} justifyContent={'center'} rowGap='2rem'>
        {
          skillItems.map((item, key) => {
            
            return(
              <motion.span key={key} variants={fadeInAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin:'-15px' }} custom={key}>
                <SkillItem item={item} />
              </motion.span>
            )
          })
        }
      </chakra.Flex>
    </chakra.Box>
  )
}

const SkillItem = ({item}) => {
  return (
    <chakra.Flex alignItems='center' rounded='10' px='1rem' fontSize='40' className="transition-transform hover:scale-[1.02]">
        {item.icon}
        <chakra.Text pl='1rem'>{item.title}</chakra.Text>
    </chakra.Flex>
  )
}

export default Skills