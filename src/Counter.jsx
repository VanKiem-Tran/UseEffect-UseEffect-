import React, { useState, useEffect} from "react"

const Counter = () => {
      const [count, setCount] = useState(0)
      const [count2, setCount2] = useState(0)
      useEffect( () => {
            console.log('the use effect ran')
            return () => {
                  console.log(`we are in the cleanup - the count is ${count}`)
            }
      }, [count] )
      return (
            <div>
                  <h6> Counter </h6>
                  <p> current count: {count} </p>
                  <button onClick= {() => setCount(count + 1)}> Increse </button>
                  <button onClick= {() => setCount2(count2 + 1)}> Increse </button>
            </div>
      )
} 

export default Counter
