import * as chakra from "@chakra-ui/react";
import { HiArrowUpRight } from "react-icons/hi2";
import { appContext } from "../../Context";
import React from "react";
import Typewriter from "./Typewriter";

export default function FloatingEmailButton() {
  const { styles } = React.useContext(appContext);

  return (
    <chakra.Box
      className="fixed"
      bottom="20px"
      zIndex={'9999'}
      w='100vw'
    >
      <chakra.Box textAlign={'right'}>
      <div className="flex justify-end items-center pr-2">
        <a className="flex group max-md:py-4 py-1 items-center justify-center rounded-xl border-portfolio-black hover:border-portfolio-blue border w-fit text-center px-6 bg-white" href="mailto:agustintomasredin@gmail.com">
          <div className="group-hover:text-portfolio-blue transition-all opacity-100 delay-75 group-hover:block md:group-hover:opacity-100 text-3xl">
          <Typewriter wrapperTag="p" delay={5000} messages={['Email me']} loop={false}/>

          </div>
          <chakra.Icon
            className="mx-2 group-hover:text-portfolio-blue transition-all delay-75 group-hover:rotate-45 max-md:rounded-full max-md:px-2 max-md:text-4xl text-3xl"
            as={HiArrowUpRight}
            color={{
              base: "var(--portfolio-black)",
            }}
          />
        </a>
      </div>   
      </chakra.Box>
    </chakra.Box>
  );
}
