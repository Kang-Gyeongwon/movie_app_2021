import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex; justify-contnet: center;
  align-items: center;
`
export const Loder = styled.div`
  width: 100vh; height:100vh;
  display: flex; justify-contnet: center;
  align-items: center;
  text-align: center;
`
export const LoderText = styled.p`
  @font-face {
    font-family: 'BBTreeGB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'BBTreeGB';
  font-size: 32px;
  font-weight: 500
`
export const Movies = styled.div`
  width: 90%;
  margin: 5% auto; padding: 2% auto;
  display: flex; flex-wrap: wrap;
  background-color: #EEE9E9;
`

export const MovieContent = styled.div`
  width: 36.5%; height: 550px;
  border-radius: 1.5%;
  background-color: #e8bbbd;
  padding: 1% 5%; margin: 5% auto;
  display: flex; flex-wrap: wrap;
  box-shadow: 5px 5px 20px 5px #D3D3D3;
  &:hover{
    transform: scalex(1.1);
  }
  @media all and (max-width: 850px){
    width: 90%;
    &:hover{
      transform: none;
    }
    margin: 11% auto;
`
export const Poster = styled.img`
  position: relative;
  top: -50px; max-width: 150px; widht: 100%;
  padding: 0;
  box-shadow: 0 11px 30px -8px #86797A, 
  0 11px 30px -7px #86797A,
  0 -11px 30px -7px #86797A;
`
export const ContentTitle = styled.p`
  @font-face {
    font-family: 'paybooc-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'paybooc-Bold';
  font-size : 25px;
  width: 100%;
`
export const ContentText = styled.p`
  @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 13px;
  width: 100%;
`
export const Genres = styled.ul`
  list-style: none;
  padding: 0; width: 100%;
  display: flex; flex-wrap: wrap; 
`
export const Genre = styled.li`
  margin-right: 2.5%;
`