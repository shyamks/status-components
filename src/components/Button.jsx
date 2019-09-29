import React from 'react'
import PropTypes from 'prop-types'

import styled from '@emotion/native'
// Theme
import theme from '../theme'
import NextIcon from '../Icons/NextIcon'
import BackIcon from '../Icons/BackIcon'

const { colors, fontSizes, spacings, borderRadius } = theme

const Container = styled.View({
  flexDirection: 'row',
  flexWrap: 'wrap',
})

export default function Button({
  main,
  title,
  disabled,
  onPress,
  accessibilityLabel,
  stretched,
  nextIcon,
  backIcon,
}) {
  const disabledButtonColor = colors.main.lightGrey.rgb
  const disabledTextColor = colors.main.darkGrey.rgb
  const iconColor = disabled ? disabledTextColor : colors.main.accentBlue.rgb

  const horizonatalMargin = stretched ? 86 : spacings.tera

  const TouchableButton = styled.TouchableOpacity({
    borderRadius: borderRadius.byte,
    display: 'inline-block',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: disabled
      ? disabledButtonColor
      : main
      ? colors.main.accentBlue.rgb
      : colors.main.white.rgb,
  })

  const StyledText = styled.Text({
    marginRight: nextIcon ? spacings.bit : horizonatalMargin,
    marginLeft: backIcon ? spacings.bit : horizonatalMargin,
    marginVertical: 11,
    color: disabled
      ? disabledTextColor
      : main
      ? colors.main.white.rgb
      : colors.main.accentBlue.rgb,
    fontSize: fontSizes.m,
  })

  const SvgContainer = styled.View({
    display: 'inline-flex',
    flexDirection: 'row',
    alignSelf: 'center',
    padding: '0px 7.5px 20px',
    marginRight: nextIcon ? spacings.kilo : spacings.bit,
    marginLeft: nextIcon ? spacings.bit : spacings.kilo,
    width: spacings.giga,
    height: spacings.giga,
  })

  return (
    <TouchableButton
      underlayColor={'#ECEFFC'}
      disabled={disabled}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
    >
      <Container>
        {backIcon && (
          <SvgContainer>
            <BackIcon color={iconColor} />
          </SvgContainer>
        )}
        <StyledText>{title}</StyledText>
        {nextIcon && (
          <SvgContainer>
            <NextIcon color={iconColor} />
          </SvgContainer>
        )}
      </Container>
    </TouchableButton>
  )
}

Button.propTypes = {
  accessibilityLabel: PropTypes.func,
  disabled: PropTypes.bool,
  nextIcon: PropTypes.bool,
  backIcon: PropTypes.bool,
  stretched: PropTypes.bool,
  main: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string,
}
