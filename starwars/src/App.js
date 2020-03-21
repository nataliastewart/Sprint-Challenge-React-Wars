import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import PeopleCard from "./PeopleCard";
import styled from "styled-components";

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log("APP RESPONSE: ", response.data.results);
        setPeople(response.data.results);
      })
      .catch(error => {
        console.log(">>>>>Data was not returned from axios<<<<<", error);
      });
  }, []);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const ParentFlex = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  `;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <ParentFlex>
        {people.map((warsData, index) => {
          console.log("WARSDATA: ", warsData);
          return (
            <PeopleCard
              key={index}
              name={warsData.name}
              height={warsData.height}
              eyeColor={warsData.eye_color}
              skinColor={warsData.skin_color}
              mass={warsData.mass}
            />
          );
        })}
      </ParentFlex>
    </div>
  );
}
