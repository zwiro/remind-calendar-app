import { useState } from "react"

function useExpand(initialState = false) {
  const [isExpanded, setIsExpanded] = useState(initialState)

  function toggleMenu() {
    setIsExpanded((prevState) => !prevState)
  }

  return {
    isExpanded,
    toggleMenu,
  }
}

export default useExpand
