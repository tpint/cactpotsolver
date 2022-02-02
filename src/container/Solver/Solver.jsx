import React from "react";
import styled from "styled-components";
// import "./Solver.css";
const SolverDisplay = styled.div`
  background: pink;
  border-radius: 3px;
  border: 2px solid palevioletred;
  /* color: palevioletred; */
  /* margin: 0 1em; */
  /* padding: 0.25em 1em; */
  width: 100%;
  height: 90vh;
  display: flex;
`;
const SolverDisplayStart = styled.div`
  width: 75%;
  background: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SolverDisplayEnd = styled.div`
  width: 25%;
  background: pink;
`;
const Board = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: yellow;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  /* margin: 0 1em;
  padding: 0.25em 1em; */
  width: 600px;
  height: 600px;
`;
const Square = styled.div`
  background: blue;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  /* margin: 0 1em;
  padding: 0.25em 1em; */
  width: 33%;
  height: 33%;
  /* flex-grow; 1; */
`;
const Solver = () => (
  <SolverDisplay>
    <SolverDisplayStart>
      <Board>
        <Square>1</Square>
        <Square>2</Square>
        <Square>3</Square>
        <Square>4</Square>
        <Square>5</Square>
        <Square>6</Square>
        <Square>7</Square>
        <Square>8</Square>
        <Square>9</Square>
      </Board>
    </SolverDisplayStart>
    <SolverDisplayEnd>x</SolverDisplayEnd>
  </SolverDisplay>
  /*   <div className="app__solver">
    <Button>stupid</Button>
    <div className="app__solver-selectionbox">
      <select name="box1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option selected value=""></option>
      </select>
      <select name="box2">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option selected value=""></option>
      </select>
      <select className="app__solver-selectionboxmod3" name="box3">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option selected value=""></option>
      </select>
      <select name="box4">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option selected value=""></option>
      </select>
      <select name="box5">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option selected value=""></option>
      </select>
      <select className="app__solver-selectionboxmod3" name="box6">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option selected value=""></option>
      </select>
      <select name="box7">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option selected value=""></option>
      </select>
      <select name="box8">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option selected value=""></option>
      </select>
      <select className="app__solver-selectionboxmod3" name="box9">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option selected value=""></option>
      </select>
    </div>
  </div> */
);

export default Solver;
