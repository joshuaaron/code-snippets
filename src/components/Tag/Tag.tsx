import * as React from 'react';

interface IProps {
  text?: string;
  showIconDot?: boolean;
  iconColour?: string;
}

export default function Tag(props: IProps) {
  const { text, showIconDot, iconColour } = props;

  return (
    <div>
      {showIconDot && renderIconDot()}
      <div>{text}</div>
    </div>
  )

  function renderIconDot() {
    return (
      <span className='tag--icon' />
    )
  }
}