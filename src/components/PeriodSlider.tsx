import { Period } from "../types"

interface PeriodSliderProps {
  chosenPeriod: Period
  setChosenPeriod: (arg0: Period) => void
}

function PeriodSlider({ chosenPeriod, setChosenPeriod }: PeriodSliderProps) {
  const underlineOffset = (() => {
    switch (chosenPeriod) {
      case Period.twoWeeks:
        return "100%"
      case Period.month:
        return "200%"
      default:
        return "0%"
    }
  })()
  return (
    <div
      className={`relative flex text-sm after:absolute after:-bottom-2 after:h-1 after:w-1/3 after:translate-x-[${underlineOffset}] after:bg-blue-500 after:transition-transform`}
    >
      <button onClick={() => setChosenPeriod(Period.week)} className="w-1/3">
        Next week
      </button>
      <button
        onClick={() => setChosenPeriod(Period.twoWeeks)}
        className="w-1/3"
      >
        Next two weeks
      </button>
      <button onClick={() => setChosenPeriod(Period.month)} className="w-1/3">
        Next month
      </button>
    </div>
  )
}

export default PeriodSlider
