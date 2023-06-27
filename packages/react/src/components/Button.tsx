import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: 'medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  padding: '$2 $4',

  '&:disabled': {
    cursor: 'not-allowed'
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100'
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hovver': {
          background: '$ignite300'
        },

        '&:disabled': {
          backgroundColor: '$gray200'
        }
      },
      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hovver': {
          background: '$ignite500',
          color: '$white'
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200'
        }
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hovver': {
           color: '$white'
        },

        '&:disabled': {
          color: '$gray600',
        }
      }
    },
    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends  ComponentProps<typeof Button> {
  as?: ElementType
}


Button.displayName = 'Button'