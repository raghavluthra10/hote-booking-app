import React, { FC, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import ListBox from '../../components/listBox/ListBox';
import ButtonComp from '../../components/button/ButtonComp';
import { useHistory } from "react-router-dom";
import ModalOne from '../../components/newListModel/ModalOne';


const arr: { id: number; name: string; bhk: number; price: number }[] = [
    { id: 1, name: 'Raghav', bhk: 111, price: 111 },
    { id: 2, name: 'Muskaan',  bhk: 111, price: 111 },
    { id: 3, name: 'Allu',  bhk: 111, price: 111 },
]

const List: FC<{}> = () => {

    const history = useHistory();

    const [ openAddHotelModal, setOpenAddHotelModal ] = useState<any>(false);

    let { path, url } = useRouteMatch();

    const showFullPage = (e: any, list: any) => {
        history.push(`${url}/${list.id}-${list.name}`)
    };



    return (
        <>
            {openAddHotelModal && <ModalOne 
                openAddHotelModal={openAddHotelModal} 
                closeModal={(e:any) => setOpenAddHotelModal(false)} 
                />
            }

            <ListContainer>

                <InfoSection>
                    <div className="infoSection_adminInfo" >
                        <div>
                            My name: Raghav Luthra
                        </div>

                        <div>
                            Number of hotels listed: 11
                        </div>
                    </div>

                    <ButtonComp onClick={(e: any ) => setOpenAddHotelModal(true)} width="200px" > 
                        Add a new hotel
                    </ButtonComp>
                </InfoSection>

                {arr.map((list) => {
                    return <ListBox 
                        price={list.price}
                        bhk={list.bhk}
                        name={list.name}
                        key={list.id}
                        onClick={(e) => showFullPage(e, list)}
                    />
                })}

            </ListContainer>
        </>
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
