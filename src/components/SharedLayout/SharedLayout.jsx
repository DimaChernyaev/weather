import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  LogoContainer,
  LogoText,
} from './SharedLayout.styled';
import imageSun from '../../assets/images/sun.png';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <LogoContainer>
          <LogoText>Weather Dashboard</LogoText>
          <Logo src={imageSun} />
        </LogoContainer>
      </Header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </Container>
  );
};

export default SharedLayout;
