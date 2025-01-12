import styled from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 0px 20px;
  height: 125px;
  border-bottom: 3px solid #2271D1;
  box-shadow: 0 0 25px rgba(30, 144, 255, 0.8);
`;

const Logo = styled.img`
  height: 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled.button`
  padding: 10px 35px;
  border: ${({ $primary }) => ($primary ? '3px solid #2271D1' : '3px solid #fff')};
  background-color: ${({ $primary }) => ($primary ? '#000' : 'transparent')};
  color: ${({ $primary }) => ($primary ? '#2271D1' : '#fff')};
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: ${({ $primary }) => ($primary ? 'inset 0 0 15px rgba(30, 144, 255, 0.8)' : 'none')};

  &:hover {
    background-color: ${({ $primary }) => ($primary ? '#333' : '#fff')};
    color: ${({ $primary }) => ($primary ? '#fff' : '#000')};
  }
`;

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

    return (
      <HeaderContainer>
        <Logo src="../../img/logo.png" alt="Logo" />
        <ButtonsContainer>
          <StyledButton $primary={location.pathname === "/"} onClick={() => handleNavigation("/")}>HOME</StyledButton>
          <StyledButton $primary={location.pathname === "/nuevo-video"} onClick={() => handleNavigation("/nuevo-video")}>NUEVO VIDEO</StyledButton>
        </ButtonsContainer>
      </HeaderContainer>
    );
  };
  

export default Header;
