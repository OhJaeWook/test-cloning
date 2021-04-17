import React from 'react'
import styled from 'styled-components'

function HotGameList() {
    return (
        <Container>
          <HotGameTitle>지금 뜨는 게임</HotGameTitle>

          {items.map(item => {
            return (
              <ItemContainer key ={item.id}>
                <Thumbnail src={item.url}></Thumbnail>
                <Meta>
                  <Name>{item.id}.{item.name}</Name>
                  <Provider>{item.provider}</Provider>
                </Meta>
              </ItemContainer>
            );
          })}
        </Container>
    )
}

export default HotGameList

const HotGameTitle = styled.label`
  font-weight : bold;
  margin-bottom : 15px;
`;

const Container = styled.div`
  margin-top : 30px;
  margin-left : 15px;
`;

const ItemContainer = styled.div`
  display: flex;
  margin-top : 15px;
`;

const Thumbnail = styled.img`
  display : flex;
  width : 20%;
  border-radius : 10px;
  justify-content : center;
`;

const Meta = styled.div`
  margin-left : 15px;
  display : flex;
  flex-direction : column;
  justify-content : center;
`;

const Name = styled.label`
  font-weight : bold;
`;

const Provider = styled.label`
  color : gray;
`;

const imgUrl = '/image1.jpg';

const items = [
  { id: 1, url: imgUrl ,name:"버즈타워" , provider : "MOVISOFT"},
  { id: 2, url: imgUrl ,name:"버즈타워" , provider : "MOVISOFT"},
  { id: 3, url: imgUrl ,name:"버즈타워" , provider : "MOVISOFT"},
  { id: 4, url: imgUrl ,name:"버즈타워" , provider : "MOVISOFT"},
  { id: 5, url: imgUrl ,name:"버즈타워" , provider : "MOVISOFT"},
  { id: 6, url: imgUrl ,name:"버즈타워" , provider : "MOVISOFT"},
  { id: 7, url: imgUrl ,name:"버즈타워" , provider : "MOVISOFT"},
  { id: 8, url: imgUrl ,name:"버즈타워" , provider : "MOVISOFT"},
  { id: 9, url: imgUrl ,name:"버즈타워" , provider : "MOVISOFT"},
  { id: 10, url: imgUrl ,name:"버즈타워" , provider : "MOVISOFT"},
];