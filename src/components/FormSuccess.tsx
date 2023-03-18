import { motion } from "framer-motion"

function FormSuccess() {
  const icon = {
    hidden: {
      opacity: 0,
      rotate: 360,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      opacity: 1,
      rotate: 0,
      fill: "rgba(59, 130, 246 1)",
    },
  }
  return (
    <div className="absolute grid h-full w-full place-items-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="h-1/2 w-1/2 fill-blue-500"
      >
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3 }}
          d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
        />
      </motion.svg>
    </div>
  )
}

export default FormSuccess
