import * as React from 'react'
import theme from '../../utils/theme'

const ArrowRightIcon: React.FC<React.SVGAttributes<SVGSVGElement>> = ({ width, height, ...rest }) => {
  return (
    <svg viewBox="0 0 16 16" width={width} height={height} {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7,7.29l-5-5C9.52,2.1,9.27,1.99,8.99,1.99c-0.55,0-1,0.45-1,1
          c0,0.28,0.11,0.53,0.29,0.71l3.29,3.29H1.99c-0.55,0-1,0.45-1,1s0.45,1,1,1h9.59l-3.29,3.29c-0.18,0.18-0.29,0.43-0.29,0.71
          c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l5-5c0.18-0.18,0.29-0.43,0.29-0.71S14.88,7.47,14.7,7.29z"
      />
    </svg>
  )
}

ArrowRightIcon.defaultProps = {
  width: 16,
  height: 16,
  fill: theme.colors.white
}

export default ArrowRightIcon
