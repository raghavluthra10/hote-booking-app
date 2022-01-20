import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { black } from 'material-ui/styles/colors';
import ButtonComp from '../button/ButtonComp';

const useStyles = makeStyles((theme) =>
  createStyles({
    listBoxContainer: {

    },
  }),
);

const ListBox:FC = () => {

    const classes = useStyles();

    const checkoutHotel = () => {
        console.log('checkout');
    }

    return (
        <ListBoxContainer className={classes.listBoxContainer} >

            <ImageView             />

            <ListInfo>
                <h3>
                    ABC Hotel Ownwer Private Limited
                </h3>

                <section>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                    a galley of type and scrambled it to make a type specimen book. It has survived not only five 
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including v
                    ersions of Lorem Ipsum.
                </section>

                <ButtonComp onClick={checkoutHotel} >
                    Checkout
                </ButtonComp>
            </ListInfo>

        </ListBoxContainer>
    );
};

export default ListBox;

const ListBoxContainer = styled.div`
    border: 1px solid black;
    padding: 20px;
    display: flex;
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