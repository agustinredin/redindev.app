import { useContext } from "react";
import * as chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { appContext } from "../../Context.jsx";
import Work from "./Work.jsx";
import { InfoIcon, InfoOutlineIcon } from "@chakra-ui/icons";
import data from '../../data/projects.json'

const Works = () => {
  const { styles } = useContext(appContext);
  let dataReversed = []
  for (let count = data.length; count > 0; count--) {
    dataReversed.push({...data[count - 1], key: dataReversed.length})
  }

  return (
    <chakra.Box minH={"150vh"} m="auto" pt={"5vh"}>
      <chakra.Box
        position="relative"
        mb={{ base: "12vh" }}
        h={"50vh"}
      >
        <motion.div
          variants={styles.titleAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "0px 0px -300px 0px" }}
          id="sectionTitle-works"
          className="relative"
        >
          <chakra.Box pt="5vh" pos="relative" w={styles.containerWidth} m="auto">
            <chakra.Heading
              fontSize={{ base: "15vw", md: "8xl", xl: "9xl" }}
              fontWeight="bold"
              letterSpacing={styles.headingLetterSpacing}
              mb="0.5rem"
            >
              Projects
            </chakra.Heading>
            <chakra.Heading
              position="absolute"
              top="-50px"
              opacity="0.3"
              left="40%"
              zIndex={9999}
              display={"block"}
              fontSize={{ base: "250", md: "300", xl: "350" }}
              letterSpacing={styles.headingLetterSpacing}
            >
              &
            </chakra.Heading>
            <chakra.Heading
              fontSize={{ base: "12vw", md: "8xl", xl: "9xl" }}
              fontWeight="bold"
              letterSpacing={styles.headingLetterSpacing}
            >
              contributions
            </chakra.Heading>
            <chakra.Text className="absolute -bottom-8 text-gray-500 text-xl block md:hidden"> <InfoOutlineIcon/> Tap to view case studies</chakra.Text>
          </chakra.Box>
        </motion.div>
      </chakra.Box>
      {/* <chakra.Box display={"flex"}>
        {data.map((elem, key) => {
          return <Work elem={elem} key={key} />;
        })}
      </chakra.Box> */}
      <chakra.SimpleGrid columns={{ base: 1 }} autoFlow="row dense">
                {
                    dataReversed.map((elem, key) => {
                        return(
                            <Work elem={elem} key={key} />)
                    })
                }
            </chakra.SimpleGrid>
    </chakra.Box>
  );
};

export default Works;
