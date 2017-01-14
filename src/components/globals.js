import { keyframes } from 'styled-components'

export const colors = {
  primary: ['#667f6d'],
  secondary: ['#5992cf'],
  alert: ['#d85262'],
  grayscale: ['#333', '#7f7373', '#7f7f7f', '#e5e5e5', '#fff']
}

export const fonts = {
  primary: "'Ubuntu Mono', monospace",
  secondary: "'Open Sans', sans-serif",
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
}

export const animations = {
  rotate360: keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `
}
