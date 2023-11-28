import styled from '@emotion/styled';
import image from '../../assets/images/nebo_svet.jpg';

export const Container = styled.div`
  max-width: 1440px;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 375px) {
    width: 375px;
    padding: 0 20px;
  }

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 20px;
  }
`;

export const Header = styled.header`
  padding: 22px 38px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const LogoContainer = styled.div`
  background-color: rgba(70, 66, 57, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px;
  border-radius: 40px;
  heigt: 100px;
`;

export const Logo = styled.img`
  width: 80px;
`;

export const LogoText = styled.p`
  color: white;
  font-size: 28px;
`;
