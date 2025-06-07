import * as chakra from '@chakra-ui/react'
import { HiArrowUpRight } from 'react-icons/hi2'
//variant: subtle || highlight
const LinkButton = ({ icon, title, href, _bgColor, _textColor, _border }) => {

    let tooltipText = href.includes('tel:') || href.includes('mailto:') ? href.split(':')[1] : href

    return (
        <chakra.Link href={href} target='_blank' textDecoration={'none !important'} w={{base: '100%', md: 'auto'}}>
            <chakra.Tooltip label={tooltipText}>
                <chakra.Flex w='100%' h='100%' border={_border ? `1px solid ${_textColor}` : 'none'} _hover={{ bgColor: `${_textColor}`, color: `${_bgColor}`, border: `1px solid ${_bgColor}`, transition: 'all 0.2s', transform: 'translateY(-5px)' }}
                    p='0.5rem'
                    justifyContent={'center'} backgroundColor={_bgColor} color={_textColor}
                    fontFamily={'Geist Mono !important'} rounded={'8'} alignItems={'center'}>
                    {icon}
                    <chakra.Text lineHeight={'1 !important'} pl='5px' className='highlight' fontSize='20'> {title} </chakra.Text>
                    <chakra.Icon mx={'0.15em'} fontSize='20' as={HiArrowUpRight} />
                </chakra.Flex>
            </chakra.Tooltip>
        </chakra.Link>
    )
}

export default LinkButton