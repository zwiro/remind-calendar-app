import { useState } from "react"

function useExpand() {
  const [isExpanded, setIsExpanded] = useState(false)

  function toggleMenu() {
    setIsExpanded((prevState) => !prevState)
  }

  return {
    isExpanded,
    toggleMenu,
  }
}

export default useExpand
