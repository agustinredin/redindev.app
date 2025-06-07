import { Box, Heading } from '@chakra-ui/react'
import { CheckCircle } from 'lucide-react'
import MailService from '../../../utils/MailService'
import { useRef, useState } from 'react'

export default function ContactForm() {
  return (
    <Box as="section" px={{ base: 4, md: 12, lg: 32 }} py={12}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Contact me
      </Heading>
      <FormCore/>
    </Box>
  )
}
const FormCore = () => {
  const formRef = useRef()
  const tooltipRef = useRef()

  const [formState, setFormState] = useState({
    fullName: '',
    email: '',
    message: '',
    serviceType: 'API',
  })
  const [pending, setPending] = useState(false)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setPending(true)
    await new MailService().send(formState)
    tooltipRef.current.style.display = 'block'
    setTimeout(() => {
      tooltipRef.current.style.display = 'none'
    }, 3000)
    setPending(false)
  }

  return (
    <div className={`text-grey-800 px-8 py-6 rounded-tr-[3rem] rounded-sm xs:max-lg:w-full`}>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="flex flex-col h-full space-y-4"
      >
        <div className="fixed top-5 left-5 p-4 text-md bg-green rounded-lg hidden transition" ref={tooltipRef}>
          <div className="flex gap-4">
            <CheckCircle />
            <p>Message sent successfully</p>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="fullName"
            value={formState.fullName}
            onChange={handleChange}
            className="w-full p-2 transition border-[2px] bg-lblue/50 text-[#2c2c2c] border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Mail address</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full p-2 transition border-[2px] bg-lblue/50 text-[#2c2c2c] border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">What do you need?</label>
          <select
            name="serviceType"
            value={formState.serviceType}
            onChange={handleChange}
            className="w-full p-2 transition border-[2px] bg-lblue/50 text-[#2c2c2c] border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
          >
            <option value="API">API</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Web App">Web App</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col grow">
          <label className="block font-medium mb-1">Your message</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            className="w-full p-2 transition border-[2px] bg-lblue/50 text-[#2c2c2c] grow border-gray-300 rounded-lg focus:outline-none focus:bg-lblue/80"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="cursor-pointer xs:w-full self-end md:w-fit px-8 py-2 text-[#2c2c2c] bg-white font-semibold hover:bg-portfolio-orange/50 hover:text-white transition block rounded-tr-xl rounded-sm"
        >
          {pending ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  )
}