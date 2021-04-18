import React from 'react'
import styled from 'styled-components'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {IconButton} from '@material-ui/core'

function Header() {
    return (
        <Container>
            <Titles>
                <CategoryTitle>Play</CategoryTitle>
                <AppTitle>Instant Plays</AppTitle>
            </Titles>
            <IconButton><AppMoreVertIcon/></IconButton>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    background-color : white;
    z-index : 1;
    padding : 0 15px ;
`;

const Titles = styled.div`
    display: flex;
    align-items : center;
    margin-left : 15px;
`;

const CategoryTitle = styled.h1`
`;

const AppTitle = styled.h3`
    padding-left: 10px;
    color : gray;
`;


const IconsContainer = styled.div`
`;

const AppMoreVertIcon = styled(MoreVertIcon)`    
`;