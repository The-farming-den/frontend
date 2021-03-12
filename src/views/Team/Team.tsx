import React from 'react';
import { Heading } from '@pancakeswap-libs/uikit'

import Page from 'components/layout/Page'
import styled from 'styled-components';

const Profiles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ProfileCard = styled.div`
  border-radius: 12px;
  padding: 15px;
  background-color: white;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: 15px;
  margin-right: 15px;
`;

const ProfileImage = styled.img`
  width: 100%;
`;

const ProfileTitle = styled.div`
  font-size: 18px;
  margin-top: 20px;
`;

const ProfileName = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

const Team: React.FC = (props) => {
  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        Teams & Profiles
      </Heading>
      <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        The Farming Den core team members
      </Heading>

      <Profiles>
        <ProfileCard>
          <ProfileImage src="/images/profile/urlebull.png" />
          <ProfileTitle>Project Lead</ProfileTitle>
          <ProfileName>Justin</ProfileName>
        </ProfileCard>
        <ProfileCard>
          <ProfileImage src="/images/profile/redbull2.png" />
          <ProfileTitle>Designer</ProfileTitle>
          <ProfileName>Zomp</ProfileName>
        </ProfileCard>
        <ProfileCard>
          <ProfileImage src="/images/profile/greenbull.png" />
          <ProfileTitle>Senior Developer</ProfileTitle>
          <ProfileName>$H@$T@</ProfileName>
        </ProfileCard>
        <ProfileCard>
          <ProfileImage src="/images/profile/redbull.png" />
          <ProfileTitle>Seinor Developer</ProfileTitle>
          <ProfileName>\/\/@®®!0®</ProfileName>
        </ProfileCard>
      </Profiles>
    </Page>
  )
};

export default Team;