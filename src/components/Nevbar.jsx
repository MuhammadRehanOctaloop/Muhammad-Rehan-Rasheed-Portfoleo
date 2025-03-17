import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

const NevBar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className='flex flex-shrink-0 items-center'>
      <h1 className='text-4xl'>MRR</h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://linkedin.com/in/muhammad-rehan-rasheed" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/MuhammadRehanRasheed" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/rehan_rasheed_chaudhary" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
        </a>
      </div>
    </nav>
  )
}
export default NevBar
