import React from 'react';
import styled from 'styled-components';

import { COLORS, UNIT } from '../../constants';

import Spacer from '../Spacer';
import UnstyledButton from '../UnstyledButton';
import StatusIcon from './StatusIcon';

const Toggle = ({ size, onIcon, offIcon, value, onChange }) => {
  const toggleWrapperRef = React.useRef(null);

  const padding = 2;
  const borderWidth = 1;

  const side = value === true ? 'right' : 'left';

  return (
    <Wrapper>
      <StatusIcon
        size={14}
        opacity={value ? 0.5 : 1}
        icon={offIcon}
        onClick={() => onChange(false)}
      />
      <Spacer size={UNIT} />

      <ToggleWrapper
        ref={toggleWrapperRef}
        style={{
          width: size * 2 + padding * 2 + borderWidth * 2,
          height: size + padding * 2 + borderWidth * 2,
          padding,
          borderWidth,
        }}
        onClick={ev => {
          onChange(!value);
          toggleWrapperRef.current.blur();
        }}
      >
        <Ball style={{ [side]: padding, width: size, height: size }} />
      </ToggleWrapper>
      <Spacer size={UNIT} />
      <StatusIcon
        size={14}
        opacity={value ? 1 : 0.5}
        icon={onIcon}
        onClick={() => onChange(true)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const ToggleWrapper = styled(UnstyledButton)`
  position: relative;
  border-color: ${COLORS.blueGray[500]};
  border-style: solid;
  border-radius: 500px;
  cursor: pointer;
`;

const Ball = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  background: ${COLORS.blueGray[100]};
`;

export default Toggle;