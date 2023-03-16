import logo from "../assets/logo.svg"
import SectionContainer from "./SectionContainer"

function LogoBar() {
  return (
    <div className="bg-slate-300 px-4 py-2">
      <img src={logo} alt="" />
    </div>
  )
}

export default LogoBar
