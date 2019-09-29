import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing, TouchableOpacity } from 'react-native'

import theme from '../theme'

const { colors } = theme

const offset = 26

export default function Switch({ isOn, onChange }) {
  const [switchState, setSwitchState] = useState(isOn || false)
  const [animatedValue] = useState(new Animated.Value(isOn ? offset : 0))
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: switchState ? offset : 0,
      easing: Easing.elastic(0.7),
      duration: 200,
    }).start()
  }, [switchState])
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
        width: 52,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
      }}
      onPress={() => onSwitch(!switchState)}
    >
      <Animated.View
        style={{
          width: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor: colors.main.white.rgb,
          alignSelf: 'baseline',
          margin: 3,
          transform: [
            {
              translateX: animatedValue,
            },
          ],
        }}
      />
    </TouchableOpacity>
  )
}

Switch.propTypes = {
  onChange: PropTypes.func,
  isOn: PropTypes.bool,
}
