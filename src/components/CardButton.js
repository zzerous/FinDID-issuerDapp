import React from 'react'

import './CardButton.scss'

const CardButton = ({
  name,
  id,
  onClick,
  icon,
  disabled,
}) => {
  const iconStyle = {
    paddingLeft: '18px',
    background: `left / 12px no-repeat url('/images/${icon}')`,
  }

  return (
    <button
      className='CardButton'
      onClick={onClick}
      disabled={disabled}
    >
      <span style={icon && iconStyle}>
        {name}
      </span>
    </button>
  )
}


export default CardButton
