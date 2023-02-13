import { useEffect, useRef } from "react"
import { Card } from "./Card"
import { useVisibleOnScreen } from "./hooks"
import { useGameData } from "./hooks/useGameData"

function App() {
  const { gameData, loading, handleFetchMore } = useGameData()
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useVisibleOnScreen(ref)

  useEffect(() => {
    !loading && isVisible && handleFetchMore()
  }, [isVisible])

  return (
    <div className="App">
      {loading && (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
      <h1>12/27 - Infinite Scrolling</h1>
      <h1>Popular Games</h1>
      <div>
        <div className="list">
          {gameData.map((game) => (
            <Card
              key={game.id}
              date={game.released}
              img={game.background_image}
              name={game.name}
              playtime={game.playtime}
              rating={game.rating}
            />
          ))}
          <div ref={ref}></div>
        </div>
      </div>
    </div>
  )
}

export default App
