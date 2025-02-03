import * as chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { appContext } from "../../Context.jsx";
import { useContext } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

//iconos
import { TbBrandVite } from "react-icons/tb";
import { SiVisualbasic } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { TbBrandSass } from "react-icons/tb";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Work = ({ elem }, key) => {
  const { styles } = useContext(appContext);
  const { isOpen, onOpen, onClose } = chakra.useDisclosure();

  const durationString =
    elem.duration.fromYear && elem.duration.toYear
      ? elem.duration.fromYear === elem.duration.toYear
        ? `${elem.duration.fromYear}`
        : `${elem.duration.fromYear}-${elem.duration.toYear}`
      : `${elem.duration.fromYear}-NOW`;

  const iconDict = (key) => {
    return {
      vite: <TbBrandVite size="30px" key={key} />,
      vb: <SiVisualbasic size="30px" key={key} />,
      reactrouter: <SiReactrouter size="30px" key={key} />,
      react: <SiReact size="30px" key={key} />,
      sql: <SiMysql size="30px" key={key} />,
      sass: <TbBrandSass size="30px" key={key} />,
      js: <SiJavascript size="30px" key={key} />,
      html: <SiHtml5 size="30px" key={key} />,
      firebase: <SiFirebase size="30px" key={key} />,
      dotnet: <SiDotnet size="30px" key={key} />,
      css: <SiCss3 size="30px" key={key} />,
      csharp: <SiCsharp size="30px" key={key} />,
      chakraui: <SiChakraui size="30px" key={key} />,
      bootstrap: <SiBootstrap size="30px" key={key} />,
    };
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: -30,
    },
    animate: (index) => ({
      opacity: 1,
      transition: {
        delay: 0.25 * index,
      },
    }),
    exit: {
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
  };

  return (
    <motion.a
      href={elem.href}
      target="_blank"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "0px 0px -25px 0px" }}
      custom={elem.key}
      className="group flex items-center"
    >
      <div
        className={
          (!elem.last ? `border-t ` : `border-t border-b `) +
          `w-full border-black/30 py-6 px-2 md:mx-16 md:px-8`
        }
      >
        <div className="flex">
          <div className="flex w-1/3 items-center">
            <chakra.Image
              display={{ base: "none", md: "block" }}
              mr="3vw"
              src={elem.logo}
              w={"3rem"}
              h={"3rem"}
              objectFit="contain"
              alignSelf={"center"}
            ></chakra.Image>
            <chakra.Heading
              fontWeight="bold"
              className="highlight text-sm"
              fontSize="2xl"
              letterSpacing={styles.headingLetterSpacing}
              ml={{ md: 8 }}
            >
              {elem.duration.fromYear}
            </chakra.Heading>
          </div>
          <div className="flex relative items-center justify-between flex-1">
            <chakra.Heading fontSize={{base: 'x-large', md:'xx-large'}} className="tracking-[-0.03em]">{elem.title}</chakra.Heading>
            <chakra.Heading>
              <chakra.Icon
                className="mx-1 group-hover:text-portfolio-blue transition-all delay-75 group-hover:rotate-45 max-md:rounded-full max-md:border-2 max-md:border-portfolio-blue max-md:px-2 max-md:text-portfolio-blue max-md:text-5xl text-3xl"
                as={HiArrowUpRight}
                color={{
                  base: "var(--portfolio-blue)",
                  md: "var(--portfolio-black)",
                }}
              />
            </chakra.Heading>
            <p className="group-hover:text-portfolio-blue transition-all opacity-0 delay-75 right-0 group-hover:right-12 group-hover:block md:group-hover:opacity-100 absolute top-2 text-xl hidden md:block">
              View live
            </p>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default Work;

{
  /* <chakra.Box as='div' onMouseEnter={onOpen} onMouseLeave={onClose} key={key}>
            <motion.div style={{ minHeight: '450px', height: '100%', position: 'relative' }} variants={fadeInAnimationVariants} initial='initial' whileInView='animate' viewport={{ once: true, margin: '0px 0px -25px 0px' }} custom={elem.key}>
                <chakra.Fade as='div' in={!isOpen} style={{ height: '100%' }}>
                    <chakra.Box p='5%' h='100%' boxShadow={'xl'} borderRadius={'3%'} bg='white'>
                        <chakra.Box h={'20%'} display={'flex'} flexDirection={{ base: 'row', md: 'row' }} justifyContent={'space-between'} m='0'>
                            <chakra.Flex flex={2} flexDirection='column' justifyContent='center' alignItems='flex-start' pb='1em'>
                                <chakra.Text color='var(--portfolio-blue)' fontSize={{ base: 'md', md: 'xl' }}>{durationString}</chakra.Text>
                                <chakra.Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>{elem.title}</chakra.Heading>
                            </chakra.Flex>
                            <chakra.Flex flex={1} justifyContent={'flex-end'}>
                                <chakra.Image src={elem.logo} w={{base: '5rem', md: '6rem'}} h={{base: '5rem', md: '6rem'}} objectFit='contain' alignSelf={'center'}>
                                </chakra.Image>
                            </chakra.Flex>
                        </chakra.Box>
                        <chakra.Box h={'80%'} display='flex' flexDirection={'column'} justifyContent='space-around'>
                            <chakra.Flex flexDirection={'column'} gap='0.75rem' overflow='hidden'>
                                <chakra.Flex flexDirection={'row'} wrap='wrap' gap='5'>
                                    {elem.tags.map((tag, index) => (
                                        <chakra.Flex key={index} minW='3rem' justifyContent={'center'} alignItems='center' rounded='5' border='1px solid var(--portfolio-blue)' p='1'>
                                            <chakra.Text fontFamily={'monospace !important'}>{tag}</chakra.Text>
                                        </chakra.Flex>
         
                                    ))}
                                </chakra.Flex>
                                <chakra.Text fontSize={{ base: 'xl', lg: 'xl', xl: 'lg' }} my='1rem' dangerouslySetInnerHTML={{ __html: elem.body }}></chakra.Text>
                            </chakra.Flex>
                            <chakra.Flex direction={'column'}>
                                <chakra.Text mb='10px' fontFamily={'monospace !important'} fontSize={'large'} fontWeight={'bold'}>TECH USED</chakra.Text>
                                <chakra.Flex gap='1.5rem' alignItems={'center'} flexDirection={'row'} wrap='wrap'>
                               
                                    {
                                        elem.tech.map((elem, key) => (
                                            iconDict(key)[elem]
                                        ))
                                    }
                                </chakra.Flex>
                            </chakra.Flex>
                        </chakra.Box>
                    </chakra.Box>
                </chakra.Fade>

                <chakra.Fade as='div' in={isOpen} style={{ height: '100%', position: 'absolute', width: '100%', top: '0' }}>
                    <chakra.Box borderRadius={'3%'} h='100%'  boxShadow={'xl'} bg='white'>
                        <div style={{ borderRadius: '3%', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                            <chakra.Image autoPlay loop muted src={`${elem.title.toLocaleLowerCase()}.gif`} w='100%' h='100%' objectFit='cover' borderRadius={'3%'}></chakra.Image>
                            <chakra.Box position='absolute' top={0} left={0} w='100%' h='100%' bg='none' zIndex={2} borderRadius='3%' transition='all 1s' _hover={{ background: 'linear-gradient(0deg, rgba(0,0,0,1) 1%, rgba(0,0,0,0) 100%)' }}></chakra.Box>
                        </div>
                    </chakra.Box>
                </chakra.Fade>
            </motion.div>
        </chakra.Box> */
}
