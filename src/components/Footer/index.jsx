import styled from "styled-components"

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    border-top: 3px solid #2271D1;
    box-shadow: 0 0 25px rgba(30, 144, 255, 0.8);
    width: 100%;
    height: 125px;
`

const Logo = styled.img`
  height: 40px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Logo src="../../img/logo.png" alt="Logo" />
        </FooterContainer>
    )
}

export default Footer