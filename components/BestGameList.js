import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function BestGameList() { 

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true
    };

  return (
    <BigStyledSlider {...settings} >
      {items.map(item => {
        return (
          <Image key={item.id} src={item.url} />
        );
      })}
    </BigStyledSlider>
  )
}

export default BestGameList

const BigStyledSlider = styled(Slider)``;

const Image = styled.img`
  height: 100%;
  border-radius: 10%;
  padding : 0 15px;
`;

const imgUrl = '/image1.jpg';

const items = [
  { id: 1, url: imgUrl },
  { id: 2, url: imgUrl },
  { id: 3, url: imgUrl },
  { id: 4, url: imgUrl },
  { id: 5, url: imgUrl },
  { id: 6, url: imgUrl },
  { id: 7, url: imgUrl },
  { id: 8, url: imgUrl },
  { id: 9, url: imgUrl },
  { id: 10, url: imgUrl },
];
