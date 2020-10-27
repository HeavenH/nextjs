import Head from 'next/head'
import { 
  Container, 
  HeaderContainer, 
  SubmenuContainer, 
  Navbar, 
  MenuTab, 
  Submenu,
  ProfileContainer,
  ProfileBox,
  ProfileAvatar,
  ProfileDetails,
  ProfileName,
  Subname,
  CardContainer,
  Card,
  InfoTop,
  DashboardContainer,
  InfoBoxName,
  AvatarContainer,
  InfoName,
  Visit,
  InfoBottom
} from '../styles/main';

export default function Home() {
  return (
    <Container>
    <HeaderContainer>
      <Navbar />
      <SubmenuContainer>
        <Submenu>
          <MenuTab href="/">Overview</MenuTab>
          <MenuTab href="/">Projects</MenuTab>
          <MenuTab href="/">Integrations</MenuTab>
          <MenuTab href="/">Activity</MenuTab>
          <MenuTab href="/">Domains</MenuTab>
          <MenuTab href="/">Usage</MenuTab>
          <MenuTab href="/">Settings</MenuTab>
        </Submenu>
      </SubmenuContainer>
    </HeaderContainer>
    <DashboardContainer>
    <ProfileContainer>
      <ProfileBox>
        <AvatarContainer>
        <ProfileAvatar src="https://vercel.com/api/www/avatar/6aa9366632707cc7e468d85485ef83897982a7c5?s=204" alt="avatar" />
        </AvatarContainer>
        <ProfileDetails>
        <ProfileName>Gilmar Silva</ProfileName>
        <Subname>Github</Subname>
        </ProfileDetails>
        </ProfileBox>
    </ProfileContainer>
    <CardContainer>
    <Card>
      <InfoTop>
        <InfoName>Lannsty</InfoName>
        <Visit>Visit</Visit>
      </InfoTop>
      <InfoBottom>

      </InfoBottom>
    </Card>
    </CardContainer>
    </DashboardContainer>
    </Container>
  )
}
