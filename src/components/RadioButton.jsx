import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Animated, TouchableOpacity } from 'react-native'

import theme from '../theme'

const { colors, spacings } = theme

export default function RadioButton({ isOn, onChange }) {
  const [switchState, setSwitchState] = useState(isOn || false)
  const onSwitch = value => {
    setSwitchState(value)
    onChange && onChange(value)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        backgroundColor: switchState
          ? colors.main.accentBlue.rgb
          : colors.main.lightGrey.rgb,
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
      }}
      onPress={() => onSwitch(!switchState)}
    >
      <Animated.View
        style={{
          width: spacings.kilo,
          height: spacings.kilo,
          borderRadius: 6,
          backgroundColor: colors.main.white.rgb,
          alignSelf: 'baseline',
          margin: spacings.bit,
        }}
      />
    </TouchableOpacity>
  )
}

RadioButton.propTypes = {
  onChange: PropTypes.func,
  isOn: PropTypes.bool,
}
