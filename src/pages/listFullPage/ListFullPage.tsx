import React from 'react';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router-dom';

const ListFullPage = () => {

    let { path, url } = useRouteMatch();


    return (
        <Container>
            <ImageSection>
                {/*  this is where images will come */}
                Image
            </ImageSection>

            <InfoSection>
                Info

            </InfoSection>
            {/*  Info section => where all the information for the hotel will come  */}

            {/*  CTA => where the button for booking a hotel will come  */}
            <Cta>
                CTA
            </Cta>

        </Container>
    );
};

export default ListFullPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageSection = styled.div`

`;

const InfoSection = styled.div`

`;

const Cta = styled.div`

`;