import React from "react";
import styled from "styled-components";

//styled components

const Container = styled.div`
  border: 2px solid black;
  width: 20%;
  margin: 0 auto;
  box-sizing: border-box;
  margin-bottom: 2%;
  border-radius: 10px;
  background-color: #ffffff;
  opacity: 0.6;
  boxsizing: "border-box";
`;

const TitleCard = styled.div`
  border: 2px solid black;
  width: 20%;
  margin: 0 auto;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 2rem;
  background-color: #744a25;
  color: #f9f2ec;
  max-width: 100%;
`;

// const ParentFlex = styled.section`
//   display: flex;
//   flex-direction: row;
// `;

const PeopleCard = props => {
  return (
    <>
      <TitleCard>{props.name}</TitleCard>
      <Container>
        <h3>Height: {props.height}</h3>
        <h3>Eye Color: {props.eyeColor}</h3>
        <h3>Skin Color: {props.skinColor}</h3>
        <h3>Mass: {props.mass}</h3>
      </Container>
    </>
  );
};

export default PeopleCard;
