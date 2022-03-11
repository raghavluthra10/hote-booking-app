import React, { FC } from 'react';
import styled from 'styled-components';
import ButtonComp from '../button/ButtonComp';
import { ModalOneProps, ModalOneForm } from '../../interfaces/props'


interface ModalTwoProps {
    form: ModalOneProps
}

const ModalTwo:FC<ModalTwoProps>= () => {

    const uploadFile = (e: any) => {

        console.log('upload FIle')
    };

    return (
        <>
            modal two
 <div className="center__fileUpload">
                             <input
                                accept="image/*"
                                // className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />

                            <label htmlFor="contained-button-file" >
                                <ButtonComp onClick={uploadFile} width="100px" >
                                    Upload
                                </ButtonComp>
                            </label>
                        </div>
        </>
    );
};

export default ModalTwo;
