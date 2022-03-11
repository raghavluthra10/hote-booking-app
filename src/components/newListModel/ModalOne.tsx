import React, { FC, useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import { TextField, Paper, Grid, Box, createStyles, makeStyles } from '@material-ui/core';
import ButtonComp from '../button/ButtonComp';
import ModalTwo from './ModalTwo';
import { ModalOneProps, ModalOneForm } from '../../interfaces/props'


const ModalOne:FC<ModalOneProps> = ({ openAddHotelModal, closeModal,  }) => {

    useEffect(() => {
        console.log('MODAL ONE => ', openAddHotelModal);
    }, []);

    const [ form, setForm ] = useState<ModalOneForm>({
        name: '',
        location: '',
        price: 0,
        bhk: 0,
        description: ''
    });

    const [ openModalTwo, setOpenModalTwo ] = useState<boolean>(false);

    const checkRedux = () => {
        console.log('form =>', form)
    }


    return (
        <>
        <Container  >
            <ModalMain>
                <div className="modalMain__top">
                    <IconButton onClick={closeModal} >
                        <CloseIcon color='action'  />
                    </IconButton>
                </div>

                <div className="modalMain__Center" >
                    <h2>
                        Hotel Information
                    </h2>
                    
                    <br/>

                    <h4 className="center_top">
                        Please add in the following details to list a new hotel:
                    </h4>
                    <form  >
                        <TextField 
                            id="standard-basic" 
                            label="Name" 
                            value={form.name}
                            onChange={e => setForm({...form, name: e.target.value})}
                        />

                        <TextField 
                            id="standard-basic" 
                            label="Location" 
                            value={form.location}
                            onChange={e => setForm({...form, location: e.target.value})}
                        />

                        <div className="center__pricing">
                            <TextField 
                                id="standard-basic" 
                                label="price / night" 
                                type='number'
                                value={form.price}
                                onChange={e => setForm({...form, price: e.target.value})}
                            />
                            <TextField 
                                id="standard-basic" 
                                label="Bhk" 
                                type='number'
                                value={form.bhk}
                                className="center__pricing__two"
                                onChange={e => setForm({...form, bhk: e.target.value})}
                            />

                        </div>

                        <TextField 
                            id="standard-basic" 
                            label="Description"
                            multiline 
                            rows={4}
                            value={form.description}
                            onChange={e => setForm({...form, description: e.target.value})}
                            />

                    </form>

                </div>

                <div className="modalMain__bottom" >


                    {/* <ButtonComp onClick={(e: any) => setOpenModalTwo(true)} >Next</ButtonComp> */}
                    <ButtonComp onClick={checkRedux} >Next</ButtonComp>
                </div>
            </ModalMain>
        </Container>
        <BgLayer>

        </BgLayer>
        </>
    );
};

export default ModalOne;

const BgLayer = styled.div`
    background-color: #000000;
    opacity: 0.5;    
    width: 100%;
    height: 100vh;
    position: fixed;
`

const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 99;
`;

const ModalMain = styled.div`
    width: 600px;
    padding: 20px 0;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;

    .modalMain__top {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        border-bottom: 1px solid #bebcbc;
        padding: 0 30px;
    }

    .modalMain__Center {
        display: flex;
        flex-direction: column;
        margin: 20px 0;
        padding: 0 30px;        

        form {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 300px;

            .center__pricing {
                display: flex;


                .center__pricing__two {
                    margin-left: 100px;
                }
            }

            .center__fileUpload {
                display: flex;
            }
        }
    }
    
    .modalMain__bottom {
        display: flex;
        padding: 0 30px;
        justify-content: flex-end;
    }
`;
