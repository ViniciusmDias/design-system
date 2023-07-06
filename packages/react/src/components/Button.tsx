import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '$0 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',

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
        background: '$galactic500',

        '&:not(:disabled):hover': {
          background: '$galactic300'
        },

        '&:disabled': {
          backgroundColor: '$gray200'
        }
      },
      secondary: {
        color: '$galactic300',
        border: '2px solid $galactic500',

        '&:not(:disabled):hovver': {
          background: '$galactic500',
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