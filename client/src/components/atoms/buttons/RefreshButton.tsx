import React from 'react';
import styled from 'styled-components';
import RefreshIcon from '@material-ui/icons/Refresh';

import Palette from '../../../@types/Palette';
import { Size, TextSize } from '../../../@types/types';

export type RefreshButtonTypes = {
  onClickRefresh: () => void;
  size: Size;
};

const IconWrapper = styled.div<RefreshButtonStyleType>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: ${(props) => (props.size === Size.BIG ? '344px' : '232px')};
  height: 32px;
  cursor: pointer;
`;

type RefreshButtonStyleType = {
  size: Size;
};

const RefrshButtonWrapper = styled.div<RefreshButtonStyleType>`
  width: ${(props) => (props.size === Size.BIG ? '344px' : '232px')};
  height: 32px;
  margin: ${(props) => (props.size === Size.BIG ? '32px 0 16px 0;' : '0 0 16px 0')};
  border-radius: 5px;
  background-color: ${Palette.PUPAGO_BLUE};

  &:hover {
    background-color: ${Palette.DARK_PUPAGO_BLUE};
  }
`;

function RefreshButton({ onClickRefresh, size }: RefreshButtonTypes) {
  return (
    <RefrshButtonWrapper onClick={onClickRefresh} size={size}>
      <IconWrapper size={size}>
        <RefreshIcon style={{ fontSize: TextSize.MEGA, color: Palette.WHITE }} />
      </IconWrapper>
    </RefrshButtonWrapper>
  );
}

export default RefreshButton;
