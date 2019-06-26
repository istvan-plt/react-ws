import React, { useRef, useState, useEffect, createRef } from 'react';

export function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref.current]
  );

  return [ref, value];
}

export function withHover(WrappedComponent) {
  return class WithHover extends React.PureComponent {
    state = { isHovered: false }
    ref = createRef()

    componentDidMount() {
      const node = this.ref.current
      if (node) {
        node.addEventListener('mouseover', this.handleMouseOver);
        node.addEventListener('mouseout', this.handleMouseOut);
      }
    }

    componentWillUnmount() {
      const node = this.ref.current
      if (node) {
        node.removeEventListener('mouseover', this.handleMouseOver);
        node.removeEventListener('mouseout', this.handleMouseOut);
      }
    }

    handleMouseOver = () => this.setState({ isHovered: true })
    handleMouseOut = () => this.setState({ isHovered: false })

    render() {
      return (
        <WrappedComponent
          hoverRef={this.ref}
          isHovered={this.state.isHovered}
          {...this.props}
        />
      )
    }
  }
}