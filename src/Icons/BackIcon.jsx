import React from 'react'
import PropTypes from 'prop-types'

export default function BackIcon({ color, style }) {
  let finalColor = color || 'black'
  return (
    // back.svg
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
        d="M7.00687 11.8984C7.02704 11.6739 7.1228 11.4552 7.29281 11.2857L14.3042 4.29206C14.6926 3.90467 15.3188 3.9012 15.7089 4.29033C16.0963 4.67677 16.0907 5.30894 15.7072 5.69148L9.38119 12.0014L15.7072 18.3114C16.0956 18.6987 16.099 19.3234 15.7089 19.7125C15.3215 20.0989 14.6877 20.0933 14.3042 19.7108L7.29281 12.7172C7.06819 12.4931 6.97231 12.1897 7.00687 11.8984Z"
        fill={finalColor}
      />
    </svg>
  )
}

BackIcon.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
}
