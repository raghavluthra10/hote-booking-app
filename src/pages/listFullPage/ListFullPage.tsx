import React from 'react';
import styled from 'styled-components';

const ListFullPage = () => {



    return (
        <Container>
            <ImageSection>
                {/*  this is where images will come */}
                Image
            </ImageSection>

            {/* edit button => when clicked gives admin permission to make changes to the app */}

            <InfoSection>
                Info

            </InfoSection>
            {/*  Info section => where all the information for the hotel will come  */}

            <Cta>
            {/*  CTA => this will be flaoting at the right side like in airbnb hotel list page  */}
                CTA
            </Cta>

            <DatePicker>
                {/* this will have the date picker to check availibily */}
            </DatePicker>

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

const DatePicker = styled.div`

`;