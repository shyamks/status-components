import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/native'

import theme from '../theme'
import CheckIcon from '../Icons/CheckIcon'

const { colors } = theme

export default function Checkbox({ isOn, onChange }) {
  const [switchState, setSwitchState] = React.useState(isOn || false)

  const onSwitch = value => {
    setSwitchState(value)
    onChange && onChange(value)
  }

  const CheckboxContainer = styled.TouchableOpacity({
    backgroundColor: switchState
      ? colors.main.accentBlue.rgb
      : colors.main.lightGrey.rgb,
    width: 20,
    height: 20,
    borderRadius: 2,
    alignItems: 'center',
  })
  return (
    <CheckboxContainer
      activeOpacity={0.5}
      onPress={() => onSwitch(!switchState)}
    >
      <CheckIcon style={{ marginTop: 1 }} color={colors.main.white.rgb} />
    </CheckboxContainer>
  )
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  isOn: PropTypes.bool,
}
