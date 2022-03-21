import React, { FC, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import ListBox from "../../components/listBox/ListBox";
import ButtonComp from "../../components/button/ButtonComp";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalOne from "../../components/newListModel/ModalOne";
import { RootState } from "../../store";

const List: FC<{}> = () => {
  const { list } = useSelector((state: RootState) => state.hotels);

  const history = useHistory();

  const [openAddHotelModal, setOpenAddHotelModal] = useState<any>(false);

  let { url } = useRouteMatch();

  const showFullPage = (e: any, list: any) => {
    history.push(`${url}/${list.id}-${list.name}`);
  };

  return (
    <>
      {openAddHotelModal && (
        <ModalOne
          openAddHotelModal={openAddHotelModal}
          closeModal={(e: any) => setOpenAddHotelModal(false)}
        />
      )}

      <ListContainer>
        <InfoSection>
          <div className="infoSection_adminInfo">
            <div>My name: Raghav Luthra</div>

            <div>Number of hotels listed: 11</div>
          </div>

          <ButtonComp
            onClick={(e: any) => setOpenAddHotelModal(true)}
            width="200px"
          >
            Add a new hotel
          </ButtonComp>
        </InfoSection>

        {list.map((l: any) => {
          return (
            <ListBox
              price={l.price}
              bhk={l.bhk}
              name={l.name}
              key={l.id}
              onClick={(e) => showFullPage(e, l)}
            />
          );
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
`;

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
