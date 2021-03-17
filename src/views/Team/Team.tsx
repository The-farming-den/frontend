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

const StyledSocialIcon = styled.img`
  width: 20px;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

const Button = styled.button`
  border: none;
  padding: 0px;
  margin-left: 5px;
  margin-right: 5px;
  background: none;
  &:focus {
    outline: none;
    cursor: pointer;
    opacity: 1;
  }
  &:active {
    opacity: 1;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const SubTitle = styled.div`
  font-size: 26px;
  text-align: center;
  margin-top: 30px;
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
          <ProfileTitle>Senior Developer</ProfileTitle>
          <ProfileName>\/\/@®®!0®</ProfileName>
        </ProfileCard>
      </Profiles>
      <SubTitle>Advisors</SubTitle>
      <Profiles>
        <ProfileCard>
          <ProfileImage src="/images/profile/Garlam.jpg" />
          <ProfileName>Garlam WON</ProfileName>
          <StyledRow>
            <Button onClick={() => window.open('https://twitter.com/garlamwon?s=21', '_target')}>
              <StyledSocialIcon draggable={false} alt="Twitter" src="/images/profile/twitter.png"/>
            </Button>
            <Button onClick={() => window.open('https://www.linkedin.com/in/garlam/', '_target')}>
              <StyledSocialIcon alt="Linkedin" src="/images/profile/linkedin.png"/>
            </Button>
          </StyledRow>
        </ProfileCard>
      </Profiles>
    </Page>
  )
};

export default Team;