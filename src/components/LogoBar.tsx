import { BsSunFill, BsMoonFill } from "react-icons/bs"
import { motion } from "framer-motion"
import { formatDate } from "../utils/formatDate"
import logo from "../assets/logo.svg"

interface LogoBarProps {
  toggleDarkMode: () => void
  isDarkMode: boolean
}

function LogoBar({ toggleDarkMode, isDarkMode }: LogoBarProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2">
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <img src={logo} alt="" />
        <p className="ml-auto">Today is {formatDate(new Date())}</p>
      </div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ rotate: 180 }}
        onClick={toggleDarkMode}
        className="ml-auto cursor-pointer"
      >
        {!isDarkMode ? <BsMoonFill size={24} /> : <BsSunFill size={24} />}
      </motion.div>
    </div>
  )
}

export default LogoBar
