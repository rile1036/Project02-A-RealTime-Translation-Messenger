import React from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

import { SideBarStatus } from '../../../@types/types';
import SideBarBox from '../../atoms/boxes/SideBarBox';
import SideBarTab from '../../atoms/buttons/SideBarTab';

const SideBarTabWrapper = styled.div`
  display: flex;
`;

const SideBarContent = styled.div`
  width: inherit;
  height: 648px;
  padding: 16px 24px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export type SideBarPropsType = {
  children: React.ReactNode;
  onClickSideBarTab: React.Dispatch<React.SetStateAction<SideBarStatus>>;
  selected: SideBarStatus;
};

function SideBar({ children, onClickSideBarTab, selected }: SideBarPropsType) {
  const { formatMessage } = useIntl();
  return (
    <SideBarBox>
      <SideBarTabWrapper>
        <SideBarTab
          isSelected={selected === SideBarStatus.PARTICIPANTS ? true : false}
          isTabNameParticipant={true}
          onClick={() => {
            onClickSideBarTab(SideBarStatus.PARTICIPANTS);
          }}
        >
          {formatMessage({ id: 'participants' })}
        </SideBarTab>
        <SideBarTab
          isSelected={selected === SideBarStatus.CHAT_ROOMS ? true : false}
          isTabNameParticipant={false}
          onClick={() => {
            onClickSideBarTab(SideBarStatus.CHAT_ROOMS);
          }}
        >
          {formatMessage({ id: 'rooms' })}
        </SideBarTab>
      </SideBarTabWrapper>
      <SideBarContent>{children}</SideBarContent>
    </SideBarBox>
  );
}

export default SideBar;
