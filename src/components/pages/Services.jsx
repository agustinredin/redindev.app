import React from "react";
import * as chakra from "@chakra-ui/react";
import { appContext } from "../../Context.jsx";
import { motion } from "framer-motion";
import { Code, Layout, Server } from "lucide-react";
import { HiArrowUpRight } from "react-icons/hi2";
import Typewriter from "../ui/Typewriter.jsx";

const services = [
  {
    title: "Websites",
    description:
      "Creating beautiful, responsive websites tailored to your needs.",
    icon: Layout,
  },
  {
    title: "Web Apps",
    description:
      "Building powerful, scalable web applications with modern technologies.",
    icon: Code,
  },
  {
    title: "APIs",
    description:
      "Designing and integrating robust APIs to power your applications.",
    icon: Server,
  },
];

const Services = () => {
  const { styles } = React.useContext(appContext);

  return (
    <>
      <chakra.Box w={styles.containerWidth} m="auto" pt={"15vh"} pb={"10vh"}>
        <chakra.Box
          position="relative"
          mb={{ base: "5vh", md: "7vh", lg: "10vh" }}
          h={"20vh"}
          id="sectionTitle-timeline"
        >
          <motion.div
            variants={styles.titleAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          >
            <chakra.Heading
              fontSize={{ base: "10vw", md: "5xl", xl: "7xl" }}
              fontWeight="bold"
              letterSpacing={styles.headingLetterSpacing}
              mb="0.5rem"
            >
              Services I Provide
            </chakra.Heading>
          </motion.div>
        </chakra.Box>
        <chakra.Box>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-20 mb-32">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105 flex flex-col gap-4 max-lg:w-full max-w-[420px]"
              >
                <service.icon className="w-16 h-16 text-portfolio-orange mr-3" />
                <div className="flex flex-col justify-between h-full mb-4">
                  <chakra.Heading
                    className="max-xl!text-3xl"
                    letterSpacing={"-0.03em"}
                  >
                    {service.title}
                  </chakra.Heading>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </chakra.Box>
        {/* <chakra.Link
          href="https://linkedin.com/in/agustintomasredin"
          target="_blank"
          className="group"
          textDecoration="none !important"
        > */}
        <div className="flex justify-center">
          <a href='https://linkedin.com/in/agustintomasredin' target='_blank' rel='noreferrer' className="flex group items-center justify-center rounded-xl border-portfolio-black hover:border-portfolio-blue border w-full md:w-fit text-center px-4">
              <div className="group-hover:text-portfolio-blue transition-all opacity-100 delay-75 group-hover:block md:group-hover:opacity-100 text-4xl">
              <Typewriter wrapperTag="p" delay={5000} messages={['Contact me via LinkedIn']} loop={false} />
              </div>
              <chakra.Icon
                className="mx-2 group-hover:text-portfolio-blue transition-all delay-75 group-hover:rotate-45 max-md:rounded-full max-md:px-2 max-md:text-5xl text-3xl"
                as={HiArrowUpRight}
                color={{
                  base: "var(--portfolio-blue)",
                  md: "var(--portfolio-black)",
                }}
              />
            </a>
        </div>
      </chakra.Box>
    </>
  );
};

export default Services;
