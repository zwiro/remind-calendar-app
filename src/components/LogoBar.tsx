import logo from "../assets/logo.svg"
import { formatDate } from "../utils/formatDate"
import { BsSunFill, BsMoonFill } from "react-icons/bs"
import { motion, AnimatePresence } from "framer-motion"

interface LogoBarProps {
  toggleDarkMode: () => void
  isDarkMode: boolean
}

function LogoBar({ toggleDarkMode, isDarkMode }: LogoBarProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <img src={logo} alt="" />
      <p className="ml-auto">Today is {formatDate(new Date())}</p>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ rotateY: 180 }}
        onClick={toggleDarkMode}
        className="cursor-pointer"
      >
        {!isDarkMode ? <BsMoonFill size={24} /> : <BsSunFill size={24} />}
      </motion.div>
    </div>
  )
}

export default LogoBar
