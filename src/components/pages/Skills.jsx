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
    { icon: <SiBootstrap />, title: 'Bootstrap' },
    { icon: <SiChakraui />, title: 'ChakraUI' },
    { icon: <SiCss3 />, title: 'CSS3' },
    { icon: <SiCsharp />, title: 'C#' },
    { icon: <SiDotnet />, title: '.NET Framework' },
    { icon: <SiExpress />, title: 'Express' },
    { icon: <SiFirebase />, title: 'Firebase' },
    { icon: <SiHtml5 />, title: 'HTML5' },
    { icon: <SiJavascript />, title: 'JavaScript' },
    { icon: <SiMysql />, title: 'MySQL' },
    { icon: <SiNodedotjs />, title: 'Node.js' },
    { icon: <SiPostman />, title: 'Postman' },
    { icon: <SiReact />, title: 'React' },
    { icon: <SiReactrouter />, title: 'React Router' },
    { icon: <SiSass />, title: 'Sass' },
    { icon: <SiVisualbasic />, title: 'Visual Basic' },
    { icon: <TbBrandVite />, title: 'Vite' }
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
    <chakra.Box minH={'50vh'} w={styles.containerWidth} m="auto" pt={'15vh'} pb={'5vh'}>
            <chakra.Flex align='center' position='relative' mb={{ base: '10vh', md: '15vh', lg: '20vh' }} h={'20vh'}>
                {/* <motion.div variants={styles.titleAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin: '-200px' }}> */}
                    <chakra.Heading fontSize={{ base: '15vw', md: '8xl', xl: '9xl' }} fontWeight="bold" letterSpacing={styles.headingLetterSpacing} mb='0.5rem' id='sectionTitle-skills'>
                        Skills
                    </chakra.Heading>
                {/* </motion.div> */}
            </chakra.Flex>
      <chakra.Flex wrap='wrap' gap='2rem' alignItems={'center'} justifyContent={'center'} rowGap='2rem'>
        {
          skillItems.map((item, key) => {
            
            return(
              <motion.span key={key} variants={fadeInAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin:'-20px' }} custom={key}>
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
    <chakra.Flex alignItems='center' rounded='5' border='1px solid var(--portfolio-blue)' px='1rem' fontSize='40'>
        {item.icon}
        <chakra.Text pl='1rem'>{item.title}</chakra.Text>
    </chakra.Flex>
  )
}

export default Skills