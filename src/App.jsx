import { useEffect, useState } from 'react'
import './App.css'
import { calculateFibonacci } from './Api/apiHook'

function App() {
  const [count, setCount] = useState(1)
  const [result, setResult] = useState(1)

  const fetchApi = async () => {
    const fetcha = await calculateFibonacci({ "position": count })
    if (fetcha.data) {
      setResult(fetcha.data.result)
    }
  }
  useEffect(() => {
    fetchApi()
  }, [count])
  return (
    <>
      <h1>Fibonacci</h1>
      <h2>Position : {count}</h2>
      <h2>{BigInt(result).toLocaleString()}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)} disabled={count === 1}>
          -
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
      <p className="read-the-docs">
        Created by Kittipot Laorngsri
      </p>
    </>
  )
}

export default App
