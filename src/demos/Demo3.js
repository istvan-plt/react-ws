import React, { useContext } from 'react'


// !useContext

const TestContext = React.createContext();

// !Hooks solution
export function DisplayHook() {
  const value = useContext(TestContext);
  return <div>{value}, a cool company to work for.</div>;
}

export function Demo3Hook() {
  return (
    <TestContext.Provider value={"Pretty Little Thing"}>
      <DisplayHook />
    </TestContext.Provider>
  );
}

// !Component solution
export class DisplayClass extends React.PureComponent {
  render() {
    return (
      <TestContext.Consumer>
        {value => (
          <div>{value}, a cool company to work for.</div>
        )}
      </TestContext.Consumer>
    )
  }
}

export class Demo3Class extends React.PureComponent {
  render() {
    return (
      <TestContext.Provider value={"Pretty Little Thing"}>
        <DisplayHook />
      </TestContext.Provider>
    )
  }
}