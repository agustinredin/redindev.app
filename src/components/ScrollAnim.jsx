import React from 'react'
import { Box } from '@chakra-ui/react'


const ScrollAnim = (h, children, childrenCount = 0) => {
    let count = childrenCount > 0 ? childrenCount : React.Children.count(children);

    return (
        <AnimatePresence>
            {count > 0 && (
                <Box as={motion.div} initial="hidden" animate="visible" variants={containerVariants}>
                    {React.Children.map(children, (child, index) => (
                        <motion.div key={index} variants={childVariants}>
                            {child}
                        </motion.div>
                    ))}
                </Box>
            )}
        </AnimatePresence>
    );
}

export default ScrollAnim
