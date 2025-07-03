
import React from 'react';

interface IconProps {
  name: 'play' | 'pause' | 'next' | 'previous' | 'stop';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className = 'w-6 h-6' }) => {
  const icons = {
    play: <path d="M8 5.14v14l11-7-11-7z" />,
    pause: <path d="M6 4h4v16H6zM14 4h4v16h-4z" />,
    next: <path d="M6 18l8.5-6L6 6v12zM18 6v12h-2V6h2z" />,
    previous: <path d="M18 6l-8.5 6L18 18V6zM6 6v12h2V6H6z" />,
    stop: <path d="M6 6h12v12H6z" />,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
};
