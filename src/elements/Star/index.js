import React from 'react'
import PropTypes from 'prop-types'


export default function Star({ className, value, height, width, spacing }) {
    const decimals = Number(value) % 1;

    const star = [];
    let leftPos = 0;

    for (let index = 0; index < 5 && index < value - decimals; index++) {
        leftPos = leftPos + width;
        star.push(
            <div 
                className="star" 
                key={`star-${index}`} 
                style={{left:index * width, width: width, marginRight: spacing}}
            ></div>
        )
    }

    if (decimals > 0 && value <= 5) {
        star.push(
            <div 
                className="star" 
                key={`star-${index}`} 
                style={{left:leftPos, width: width + spacing}}
            ></div> 
        )
    }

    const starPlaceholder = []
    for (let index = 0; index < 5; index++) {
        starPlaceholder.push(
            <div 
                className="star placeholder" 
                key={`starPlaceholder-${index}`} 
                style={{left:index * width, width: width, marginRight: spacing}}
            ></div>
        )
    }

    return (
        <>
            
        </>
    )
}

Star.PropTypes = {
    className : PropTypes.string,
    value: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    spacing: PropTypes.number
}
