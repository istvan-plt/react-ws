import React, { useState, useEffect } from 'react'

// !useEffect

// !Hooks solution
export class Demo2Class extends React.PureComponent {
	state = { count: 0 }

	componentDidMount() {
		document.title = `You clicked ${this.state.count} times`;
	}

	componentDidUpdate() {
		document.title = `You clicked ${this.state.count} times`;
	}

	setCount = count => this.setState({ count })

	render() {
		const { count } = this.state
		return (
			<div>
				<p>You clicked {count} times</p>
				<button onClick={() => this.setCount(count + 1)}>Click me</button>
			</div>
		)
	}
}

// !Component solution
export function Demo2Hook() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
	});

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}