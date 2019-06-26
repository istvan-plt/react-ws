import React, { useState, useRef, createRef } from 'react'

// !useRef

// !Hooks solution
export function Demo4Hook() {
  const [name, setName] = useState("some name");
  const nameRef = useRef();

  const submitButton = () => { setName(nameRef.current.value); };

  return (
    <div>
      <p>{name}</p>
      <div>
        <input ref={nameRef} type="text" />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
}

// !Component solution
export class Demo4Class extends React.PureComponent {
  state = { name: 'some name' }
  nameRef = createRef()

  setName = name => this.setState({ name })
  submitButton = () => { this.setName(this.nameRef.current.value); };

  render() {
    const { name } = this.state
    return (
      <div>
        <p>{name}</p>
        <div>
          <input ref={this.nameRef} type="text" />
          <button type="button" onClick={this.submitButton}>
            Submit
        </button>
        </div>
      </div>
    )
  }
}