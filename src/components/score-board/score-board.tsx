import ScoreCard from "./score-card"
import './score-car.css'
const ScoreBoard = () => {
  return (
    <div className="h-[15rem] mt-[3rem] px-1 score-board">
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
            <ScoreCard />
    </div>
  )
}

export default ScoreBoard