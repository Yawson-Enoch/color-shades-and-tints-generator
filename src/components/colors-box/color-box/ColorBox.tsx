import { useState, useEffect } from 'react';
import { FaCopy } from 'react-icons/fa';
import { ColorBoxWrapper } from './ColorBox.styles';

const ColorBox = ({ color, index }: any) => {
  const { weight, hex } = color;
  const hexValue = `#${hex}`;
  const [copy, setCopy] = useState(false);
  const [clip, setClip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      copy && setCopy(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copy]);

  return (
    <ColorBoxWrapper
      style={{ backgroundColor: `${hexValue}` }}
      className='color-box'
      index={index}
      onClick={() => {
        setCopy(true);
        navigator.clipboard.writeText(hexValue);
      }}
      onMouseEnter={() => {
        setClip(true);
      }}
      onMouseLeave={() => {
        setClip(false);
      }}
    >
      <p>{hexValue}</p>
      <p>{weight}%</p>
      {clip && (
        <div className='copy'>
          <FaCopy />
        </div>
      )}
      {copy && <p className='last'>copied to clipboard</p>}
    </ColorBoxWrapper>
  );
};

export default ColorBox;
