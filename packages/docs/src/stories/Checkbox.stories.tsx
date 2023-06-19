import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@pegasus-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Accept terms of use</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>
export const Primary: StoryObj<CheckboxProps> = {}
