import React from 'react'
import PropTypes from 'prop-types'

export default function CheckIcon({ large, color, style }) {
  let fillColor = color || 'black'

  if (large) {
    return LargeCheckIcon({ color: fillColor, style })
  } else {
    return (
      //tiny-check.svg
      <svg
        style={style}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.76413 9.69006L12.3248 4.27888C12.7068 3.90717 13.3248 3.90591 13.7111 4.28187C14.0948 4.65523 14.0968 5.25861 13.7142 5.63093L7.45575 11.7211C7.26582 11.906 7.01753 11.9992 6.76838 12C6.51183 11.9981 6.26284 11.9063 6.07584 11.7244L3.28423 9.0078C2.9041 8.63789 2.90429 8.03795 3.29064 7.66199C3.67431 7.28863 4.29863 7.29084 4.67363 7.65576L6.76413 9.69006Z"
          fill={fillColor}
        />
      </svg>
    )
  }
}

CheckIcon.propTypes = {
  large: PropTypes.bool,
  color: PropTypes.string,
  style: PropTypes.object,
}

function LargeCheckIcon({ color, style }) {
  let fillColor = color || 'black'
  return (
    //check.svg
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
        d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z"
        fill={fillColor}
      />
    </svg>
  )
}

LargeCheckIcon.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
}
