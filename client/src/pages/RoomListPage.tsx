import React from 'react';
import styled from 'styled-components';

import MyProfile from '../components/organisms/roomListPage/MyProfile';
import EnterCodeButton from '../components/organisms/roomListPage/EnterCodeButton';
import RefreshButton from '../components/organisms/roomListPage/RefreshButton';
import RoomList from '../components/organisms/roomListPage/roomList';

const RoomListPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function RoomListPage() {
  return (
    <RoomListPageWrapper>
      <MyProfile />
      <EnterCodeButton />
      <RefreshButton />
      <RoomList />
    </RoomListPageWrapper>
  );
}

export default RoomListPage;
