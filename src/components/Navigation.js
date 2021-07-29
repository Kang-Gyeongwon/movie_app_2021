import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContentText } from '../custom-styled';

const NavBar = styled.div`
  width: 5%; heigth: 14%;
  background-color: #BEC1A4;
  position: fixed;
  top: 40px; left: 10px;
  display: flex; flex-direction: column;
  @media all and (max-width: 850px) {
    width: 100%;
    left: initial; top: initial;
    bottom: 0;
  }
`
/*
*/
const ContentTextStyle = {
  fontSize: 16, textAlign: "center", fontWeight: 800
}
const LinkStyle = {
  textDecoration: "none", color: "#F5F5F5", textTransform: "uppercase"
}
const Navigation = () => {
  return <NavBar>
    <Link to="/" style={LinkStyle}>
      <ContentText style={ContentTextStyle}>Home</ContentText>
    </Link>
    <Link to="/About" style={LinkStyle}>
      <ContentText style={ContentTextStyle}>About</ContentText>
    </Link>
  </NavBar>
}

export default Navigation;