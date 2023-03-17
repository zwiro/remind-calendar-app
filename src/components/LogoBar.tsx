import logo from "../assets/logo.svg"

function LogoBar() {
  const todayDate = new Date().toLocaleDateString("en-UK", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    weekday: "long",
  })

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <img src={logo} alt="" />
      <p>Today is {todayDate}</p>
    </div>
  )
}

export default LogoBar
