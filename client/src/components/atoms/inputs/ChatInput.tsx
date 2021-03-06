import React from 'react';
import styled from 'styled-components';

import Palette from '../../../@types/Palette';

const StyledChatInput = styled.textarea`
  display: block;
  width: 476px;
  height: 96px;
  padding: 25px;
  outline: none;
  border: none;
  border-radius: 30px 0 0 0;
  background-color: ${Palette.ALMOST_WHITE};
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 14px;
  line-height: 20px;
  resize: none;
  overflow: hidden;
`;

export type ChatInputPropsType = {
  value: string;
  onChangeInput?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

function ChatInput({ value, onChangeInput }: ChatInputPropsType) {
  return <StyledChatInput onChange={onChangeInput} value={value} />;
}

export default ChatInput;
