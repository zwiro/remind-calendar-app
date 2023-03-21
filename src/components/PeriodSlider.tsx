import { Period } from "../types"

interface PeriodSliderProps {
  chosenPeriod: Period
  setPeriod: (arg0: Period) => void
}

function PeriodSlider({ chosenPeriod, setPeriod }: PeriodSliderProps) {
  return (
    <div
      className={`relative flex text-sm after:absolute after:-bottom-2 after:h-1 after:w-1/3 after:bg-blue-500 after:transition-transform ${
        chosenPeriod === Period.week
          ? "after:translate-x-[0%]"
          : chosenPeriod === Period.twoWeeks
          ? "after:translate-x-[100%]"
          : "after:translate-x-[200%]"
      } `}
    >
      <button onClick={() => setPeriod(Period.week)} className="w-1/3">
        Next week
      </button>
      <button onClick={() => setPeriod(Period.twoWeeks)} className="w-1/3">
        Next two weeks
      </button>
      <button onClick={() => setPeriod(Period.month)} className="w-1/3">
        Next month
      </button>
    </div>
  )
}

export default PeriodSlider
