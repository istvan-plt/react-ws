import React, { useState } from 'react'

// !useState

// !Hooks solution
export class Demo1Class extends React.PureComponent {
  state = { count: 0 }
  setCount = count => {
    this.setState({ count })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        Count: {count}
        <button onClick={() => this.setCount(0)}>Reset</button>
        <button onClick={() => this.setCount(count + 1)}>+</button>
        <button onClick={() => this.setCount(count - 1)}>-</button>
      </div>
    )
  }
}

// !Component solution
export function Demo1Hook() {
  const [count, setCount] = useState(0)
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}