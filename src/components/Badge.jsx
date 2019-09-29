import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/native'

import theme from '../theme'

const { colors, fontSizes, fontWeights } = theme

export default function Badge({ large, title }) {
  const widthAndHeight = large ? 22 : 18
  const Badge = styled.View({
    backgroundColor: colors.main.accentBlue.rgb,
    width: widthAndHeight,
    height: widthAndHeight,
    borderRadius: widthAndHeight / 2,
  })

  const BadgeContainer = styled.View({
    top: large ? 0 : -1.5,
    display: 'inline-block',
    justifyContent: 'center',
    alignSelf: 'center',
  })

  const BadgeText = styled.Text({
    color: colors.main.white.rgb,
    fontSize: fontSizes.s,
    lineHeight: 15,
    fontWeight: fontWeights.semi,
    justifyContent: 'center',
    alignSelf: 'center',
  })

  return (
    <Badge>
      <BadgeContainer>
        <BadgeText>{title}</BadgeText>
      </BadgeContainer>
    </Badge>
  )
}

Badge.propTypes = {
  large: PropTypes.bool,
  title: PropTypes.string,
}
