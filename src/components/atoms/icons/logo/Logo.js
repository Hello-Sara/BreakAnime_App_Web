import React from 'react';
import { ReactComponent as Icon } from '../../../../assets/logos/logoVNoir.svg';

function Logo({ width = '200px', color = '', className = '', onClick }) {
  return (
    <Icon
      style={{ '--color': color, 'fill': color, 'cursor': onClick ? 'pointer' : 'auto' }}
      width={width}
      height={width}
      className={className + (onClick ? ' clickable-icon' : '')}
      onClick={onClick}
    />
  );
}

export default Logo;
