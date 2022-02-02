import React, { FC, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import { TextField, Paper, Grid, Box, createStyles, makeStyles } from '@material-ui/core';
import ButtonComp from '../button/ButtonComp';


interface Props {
    openAddHotelModal: any;
    closeModal: any;
}

const ModalOne:FC<Props> = ({ openAddHotelModal, closeModal,  }) => {

    useEffect(() => {
        console.log('MODAL ONE => ', openAddHotelModal);
    }, []);

    const goAhead = (): any => {
        console.log('go ahead');
    };

    const uploadFile = (e: any) => {
        console.log('upload file');
    };

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
                    <h5 className="center_top">
                        Please add in the following details to list a new hotel:
                    </h5>
                    <form  >
                        <TextField 
                            // className={classes.inputField}
                            id="standard-basic" 
                            label="Name" 
                            // value={loginForm.email}
                            // onChange={e => setLoginForm({...loginForm, email: e.target.value})}
                        />

                        <TextField 
                            // className={classes.inputField}
                            id="standard-basic" 
                            label="Location" 
                            // value={loginForm.email}
                            // onChange={e => setLoginForm({...loginForm, email: e.target.value})}
                        />

                        <div className="center__pricing">
                            <TextField 
                                // className={classes.inputField}
                                id="standard-basic" 
                                label="price per night" 
                                // value={loginForm.email}
                                // onChange={e => setLoginForm({...loginForm, email: e.target.value})}
                            />
                            <TextField 
                                // className={classes.inputField}
                                id="standard-basic" 
                                label="Bhk" 
                                // value={loginForm.email}
                                // onChange={e => setLoginForm({...loginForm, email: e.target.value})}
                            />

                        </div>

                        <TextField 
                                // className={classes.inputField}
                                id="standard-basic" 
                                label="Description"
                                multiline 
                                // value={loginForm.email}
                                // onChange={e => setLoginForm({...loginForm, email: e.target.value})}
                                />

                        {/* input image */}

                        <ButtonComp onClick={uploadFile} width="100px" >
                            Upload
                        </ButtonComp>
                    </form>

                </div>

                <div className="modalMain__bottom" >


                    <ButtonComp onClick={goAhead} >Add</ButtonComp>
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
    margin-top: 60px;
    z-index: 99;
`;

const ModalMain = styled.div`
    width: 600px;
    padding: 15px 0;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;

    .modalMain__top {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        border-bottom: 2px solid #bebcbc;
        padding: 0 30px;
    }

    .modalMain__Center {
        display: flex;
        flex-direction: column;
        margin: 20px 0;
        border-bottom: 2px solid #bebcbc;
        padding: 0 30px;        

        form {
            display: flex;
            flex-direction: column;

            .center__pricing {
                display: flex;
            }
        }
    }
    
    .modalMain__bottom {
        display: flex;
        /* margin-bottom: 20px; */
        /* border-bottom: 2px solid #bebcbc; */
        padding: 0 30px;
    }
`;
