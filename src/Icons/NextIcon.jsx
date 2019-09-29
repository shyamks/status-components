import React from 'react'
import PropTypes from 'prop-types'

export default function NextIcon({ color, style }) {
  let finalColor = color || 'black'
  return (
    // next.svg
    <svg
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.7072 12.7143L9.69578 19.7079C9.3074 20.0953 8.6812 20.0988 8.29107 19.7097C7.90365 19.3232 7.9093 18.6911 8.29281 18.3085L14.6188 11.9986L8.29281 5.68865C7.90443 5.30126 7.90095 4.67664 8.29107 4.28751C8.67849 3.90107 9.31227 3.9067 9.69578 4.28924L16.7072 11.2828C16.9318 11.5069 17.0277 11.8103 16.9931 12.1016C16.973 12.3261 16.8772 12.5448 16.7072 12.7143Z"
        fill={finalColor}
      />
    </svg>
  )
}

NextIcon.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
}
