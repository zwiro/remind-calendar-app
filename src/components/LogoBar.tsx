import logo from "../assets/logo.svg"
import { formatDate } from "../utils/formatDate"

function LogoBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <img src={logo} alt="" />
      <p>Today is {formatDate(new Date())}</p>
    </div>
  )
}

export default LogoBar
