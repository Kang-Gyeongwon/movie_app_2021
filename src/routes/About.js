import styled from 'styled-components'

const Wapper = styled.div`
  width: 45%; height: 25%;
  background-color: #EEE9E9;
  position: relative;
  top: 235px;
  margin: 0 auto;
  padding: 6%;
  @media all and (max-width: 850px){
    width: 67%; height: 35%;
    background-color: #EEE9E9;
    top: 235px;
  }
`
const AboutText = styled.p`
  @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'NEXON Lv1 Gothic OTF';
  width: 100%;
  font-size: 18px;
  @media all and (max-width: 850px){
  font-size: 15px;
  }
`
const AboutBoxstyle = { 
  height: "100%",
  display: "flex", justifyContent: "cneter",
  alignItems: "center", flexWrap: "wrap"
}

const About = props => {
  console.log(props)
  return <div style={AboutBoxstyle}>
    <Wapper>
      <AboutText>
        "Freedom is the freedom to say that two plus two make four.
        If that is granted, all else follows."
      </AboutText>
      <AboutText>- George Orwell, 1984</AboutText>
    </Wapper>
  </div>
}

export default About;