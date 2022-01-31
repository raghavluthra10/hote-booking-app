import { Box, IconButton, } from '@material-ui/core';
import React, { FC } from 'react';
import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { black } from 'material-ui/styles/colors';
import ButtonComp from '../button/ButtonComp';
import  EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useRouteMatch } from 'react-router-dom';

interface Props {
    name: string;
    image?: string;
    sqft: number;
    price: number;
    onClick: (e: any) => any;
};

const ListBox:FC<Props> = ({ name, image, sqft, price, onClick }) => {

    let { path, url } = useRouteMatch();    

    const checkoutHotel = () => {
        console.log('checkout');
    }

    return (
        <ListBoxContainer >

            <ImageView             />

            <ListInfo>
                <h3>
                    {name}
                </h3>
                    
                <InfoSection>
                    <article>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                        a galley of type and scrambled it to make a type specimen book.
                    </article>

                    <div>
                        <div>Sqft: {sqft}</div>

                        <div>Rs: {price}</div>
                    </div>
                </InfoSection>

                <ButtonComp onClick={onClick} color="red" >
                    Have a look
                </ButtonComp>
            </ListInfo>

        </ListBoxContainer>
    );
};

export default ListBox;

const ListBoxContainer = styled.div`
    border-radius: 10px;
    padding: 20px;
    display: flex;
    margin-bottom: 50px;
    box-shadow:  4px 4px 20px rgba(121, 119, 119, 0.7);

    /* .ListInfo_top {
        display: flex;
        justify-content: space-between;
    } */

    &:hover {
        box-shadow:  2px 2px 20px rgba(121, 119, 119, 0.7);
        cursor: pointer;
        transform: scale(1.02);
        transition: 0.3s;
    }

`;

const ImageView = styled.img`
    border-radius: 10px;
    border: 1px solid black;
    height: 200px;
    width: 300px
`;

const ListInfo = styled.div`
    /* border: 1px solid black; */
    flex: 1;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const InfoSection = styled.section`
    display: flex;
    flex-direction: column;
`;