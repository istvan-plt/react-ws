import React, { useState, useEffect } from 'react'

// !Hooks solution
export function Demo5Hook() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => { setWidth(window.innerWidth) }
    window.addEventListener('resize', handleResize);
  });

  return <div>The width of the window is {width}</div>
}


// !Component solution
export class Demo5Class extends React.PureComponent {
  state = { width: window.innerWidth }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    return <div>The width of the window is {this.state.width}</div>
  }
}

export function withWindowWidth(WrappedComponent) {
  return class WithWindowWidth extends React.PureComponent {
    state = { width: window.innerWidth }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }

    handleResize = () => {
      this.setState({ width: window.innerWidth })
    }

    render() {
      return <WrappedComponent windowWidth={this.state.width} {...this.props} />
    }
  }
}

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => { setWidth(window.innerWidth) }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return width
}