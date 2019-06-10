import * as React from 'react';

interface IProps {
  text: string;
  onClick?: () => void;
}

export default function Button(props: IProps) {
  const { text, onClick } = props;
  return (
    <button onClick={onClick}>{text}</button>
  )
}