import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function LatestGameList() {

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3,
        arrows: false,
        centerMode: false
    };

    return (
        <Container>
            <Title>최근 게임</Title>
            <StyledSlider {...settings}>
            {items.map(item => {
              return (
                <ItemContainer key={item.id}>
                  <Thumbnail src={item.url}></Thumbnail>
                  <Thumnail_name>{item.name}</Thumnail_name>
                </ItemContainer>
              );
            })}
            </StyledSlider>

        </Container>
    )
}

export default LatestGameList

const Container = styled.div`
    display: flex;
    flex-direction : column;    
    margin-top : 30px;
    margin-left : 15px;
`;

const StyledSlider = styled(Slider)``;

const Title = styled.label`
  font-weight : bold;
  margin-bottom : 15px;
`;

// const ListContainer = styled.div`
//   display: flex;
//   overflow : scroll;
//   ::-webkit-scrollbar {
//     display : none;
//   }
// `;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content : center;
  padding-right : 15px;
`;

const Thumbnail = styled.img`
  display : flex;
  width : 100%;
  border-radius : 50%;
  justify-content : center;
`;

const Thumnail_name = styled.label`
  display : flex;
  justify-content : center;
`;

const imgUrl = '/image1.jpg';

const items = [
  { id: 1, url: imgUrl , name: '버드타워'},
  { id: 2, url: imgUrl , name: '버드타워'},
  { id: 3, url: imgUrl , name: '버드타워'},
  { id: 4, url: imgUrl , name: '버드타워'},
  { id: 5, url: imgUrl , name: '버드타워'},
  { id: 6, url: imgUrl , name: '버드타워'},
  { id: 7, url: imgUrl , name: '버드타워'},
  { id: 8, url: imgUrl , name: '버드타워'},
  { id: 9, url: imgUrl , name: '버드타워'},
  { id: 10, url: imgUrl , name: '버드타워'},
];
