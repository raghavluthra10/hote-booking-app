import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import ListBox from '../../components/listBox/ListBox';


const List: FC<{}> = () => {

    let { path, url } = useRouteMatch();


    return (
        <ListContainer>
            <ListBox />

            <ListBox />

            <ListBox />
        </ListContainer>
    );
};

export default List;


const ListContainer = styled.div`
    min-height: 100vh;
    /* width: 100%; */
    padding: 75px 100px;
`