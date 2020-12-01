import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Button(props) {
    const className = [props.className]
    if(props.isPrimary) className.push("btn-primary")
    if(props.isLarge) className.push("btn-lg")
    if(props.isSmall) className.push("btn-sm")
    if(props.isBlock) className.push("btn-block")
    if(props.hasShadow) className.push("btn-shadow")

    const onClick = () => {
        if (props.onClick) props.onClick();
    }

    if (props.isDisabled || props.isLoading) {
        if (props.isDisabled) className.push("disabled")
        return (
            <span className={className.join(" ")} style={props.style}>
                {props.isLoading ? (
                    <>
                        <span className="spinner-border spinner-border-sm mx-5"></span>
                        <span className="sr-only">Loading...</span>
                    </>
                ) : (
                    props.children
                )}
            </span>
        )
    }

    if (props.type === "link") {
        if(props.isExternal) {
            return (
                <a 
                href={props.href} 
                className={className.join(" ")}
                style={props.style} 
                target={props.target==="_blank" ? "_blank" : undefined} 
                rel={props.target==="_blank" ? "noopener noreferer" : undefined}
                >
                    {props.children}
                </a>
            )
        } else {
            return (
                <NavLink
                to={props.href} 
                className={className.join(" ")}
                style={props.style} 
                onClick={onClick}
                >
                    {props.children}
                </NavLink>
            )
        }
    }

    return (
        <button 
            className={className.join(" ")}
            style={props.style}
            onClick={onClick}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(["button", "link"]),
    onClick: PropTypes.func,
    target: PropTypes.string,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool,
    isSmall: PropTypes.bool,
    isLarge: PropTypes.bool,
    isBlock: PropTypes.bool,
    isExternal: PropTypes.bool,
    hasShadow: PropTypes.bool
}