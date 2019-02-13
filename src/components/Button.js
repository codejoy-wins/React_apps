import React, { Component } from 'react'
import './css/Button.css';


class Button extends Component {
    render() {
        const {
            onClick,
            className,
            children,
        } = this.props;

        return (
            <button
                onClick={onClick}
                className={className}
                type="button"
                id="btn"
            >
                {children} via component
            </button>
        )
    }
}

export default Button;