import * as chakra from "@chakra-ui/react";
import * as motion from "framer-motion";
import { appContext } from "../../Context.jsx";
import React from "react";

export default function WorkingProcess() {
  const { styles } = React.useContext(appContext)
  const steps = [
    {
      number: "01",
      title: "Research",
      description:
        "I begin by thoroughly analyzing the client's brief, existing resources, and market trends to gain a deep understanding of their needs, goals, and expectations. This phase includes conducting competitor research, audience analysis, and gathering relevant data to ensure a solid foundation. This phase is about setting the groundwork for a strategic and well-informed approach.",
      isHighlighted: true,
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Once the research is complete, I move on to structuring the project plan, defining milestones, and setting a realistic budget. This phase involves outlining the workflow, selecting the appropriate tools and technologies, and establishing a timeline to ensure smooth execution.",
      isHighlighted: false,
    },
    {
      number: "03",
      title: "Development",
      description:
        "With a clear plan in place, I begin the development phase by translating ideas into functional components. This includes setting up the project environment, writing foundational code, implementing core features, and ensuring technical feasibility. Throughout this phase, I conduct regular testing and iteration to refine the work, ensuring alignment with the original vision.",
      isHighlighted: false,
    },
  ]

  return (
    <section className="px-4 py-24 min-h-screen flex items-center">
      <chakra.Box minH={'50vh'} w={styles.containerWidth} m="auto" pb={'5vh'}>
        <chakra.Heading fontSize={{ base: '10vw', md: '5xl', xl: '7xl' }} className="font-bold mb-24" letterSpacing={styles.headingLetterSpacing}>My working process</chakra.Heading>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-px h-full bg-gray-800" />

          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline dot */}
              <div className={`hidden md:block absolute left-1/2 w-3 h-3 rounded-full bg-portfolio-orange transform -translate-x-1.5 ` + ` top-${index * 4}`} />

              <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] gap-16">
                {/* Left side - Title */}
                <div className={`text-right flex items-start justify-start gap-4 relative ` +  `top-${index * 4}`}>
                  <div className="text-lg opacity-60">{step.number}.</div>
                  <chakra.Heading className={`!text-3xl tracking-tight ${step.isHighlighted ? "text-portfolio-orange" : ""}`}>
                    {step.title}
                  </chakra.Heading>
                </div>

                {/* Right side - Description */}
                <div>
                  <p className="text-gray-700 text-lg !leading-loose">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </chakra.Box>
    </section>
  )
}

