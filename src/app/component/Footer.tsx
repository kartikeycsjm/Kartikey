import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 
      bg-[#2a3439] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center 
          justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">©
            {new Date().getFullYear()} Kartikey Mishra. All
            rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/myselfkartikey/"
              className="text-gray-400 text-2xl md:text-4xl
              hover:text-white duration-500">
              <FaInstagram />
            </a>
            <a href="https://x.com/myself_kartik_"
              className="text-gray-400 duration-500 
              hover:text-white text-2xl md:text-4xl">
              <FaXTwitter />
            </a>
            <a href="https://www.linkedin.com/in/kartikey-mishra-637a442b5/" className="text-gray-400 
              hover:text-white text-2xl md:text-4xl
              duration-500">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
