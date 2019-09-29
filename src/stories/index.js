import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'

// Font
import 'typeface-roboto'

// Components
import Button from '../components/Button'
import Switch from '../components/Switch'
import RadioButton from '../components/RadioButton'
import Badge from '../components/Badge'
import Checkbox from '../components/Checkbox'

// Style Guide
import ColorPalette from '../components/styleguide/ColorPalette'
import Icons from '../components/styleguide/Icons'
import Typography from '../components/styleguide/Typography'

storiesOf('Button', module)
  .add('Main button', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Button main={true} title="Click Me" />
      <Button main={true} disabled={true} title="Click Me" />
      <Button main={true} nextIcon={true} disabled={true} title="Click Me" />
      <Button main={true} backIcon={true} disabled={true} title="Click Me" />
      <Button main={true} stretched={true} title="Click Me" />
    </View>
  ))
  .add('Secondary button', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Button title="Click Me" />
      <Button nextIcon={true} title="Click Me" />
      <Button disabled={true} title="Click Me" />
      <Button nextIcon={true} disabled={true} title="Click Me" />
      <Button backIcon={true} title="Click Me" />
      <Button backIcon={true} disabled={true} title="Click Me" />
    </View>
  ))
  .add('Switch', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Switch />
      <Switch isOn={true} />
    </View>
  ))
  .add('Radio Button', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <RadioButton />
      <RadioButton isOn={true} />
    </View>
  ))
  .add('Badge', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Badge title={'5'} />
      <Badge large={true} title={'5'} />
    </View>
  ))
  .add('Checkbox', () => (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <Checkbox />
      <Checkbox isOn={true} />
    </View>
  ))

storiesOf('Theming', module)
  .add('Color Palette', () => <ColorPalette />)
  .add('Icons', () => <Icons />)
  .add('Typography', () => <Typography />)
