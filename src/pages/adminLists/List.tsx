import React, { FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import ListBox from '../../components/listBox/ListBox';
import ButtonComp from '../../components/button/ButtonComp';
import { useHistory } from "react-router-dom";


const arr: { id: number; name: string; sqft: number; price: number }[] = [
    { id: 1, name: 'Raghav', sqft: 111, price: 111 },
    { id: 2, name: 'Muskaan',  sqft: 111, price: 111 },
    { id: 3, name: 'Allu',  sqft: 111, price: 111 },
]

const List: FC<{}> = () => {

    const history = useHistory();

    let { path, url } = useRouteMatch();

    const showFullPage = (e: any, list: any) => {
        history.push(`${url}/${list.id}-${list.name}`)
    };

    const addNewHotel = (e: any) => {
        console.log('add new hotel');
    };  

    return (
        <ListContainer>

            <InfoSection>
                <div className="infoSection_adminInfo" >
                    <div>
                        Name: Raghav Luthra
                    </div>

                    <div>
                        Number of hotels listed: 11
                    </div>
                </div>

                <ButtonComp onClick={addNewHotel} width="200px" > 
                    Add a new hotel
                </ButtonComp>
            </InfoSection>

            {arr.map((list) => {
                return <ListBox 
                    price={list.price}
                    sqft={list.sqft}
                    name={list.name}
                    key={list.id}
                    onClick={(e) => showFullPage(e, list)}
            />

            })}

        </ListContainer>
    );
};

export default List;


const ListContainer = styled.div`
    min-height: 100vh;
    /* width: 100%; */
    padding: 75px 100px;
`

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 50px;

    .infoSection_adminInfo {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        div {
            font-size: 20px;
            font-weight: 600;
        }
    }


`;
