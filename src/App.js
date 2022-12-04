/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['React', '개발 블로그', '심심풀이']);
  let [좋아요, 좋아요변경] = useState(0);
  let posts = '개발자의 블로그';
  
  /*function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '리액트';
    글제목변경( newArray );
    //글제목변경( ['리액트', '개발 블로그', '심심풀이']);
  }*/

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ ()=>{ 좋아요변경(좋아요 + 1) } }>👍</span> {좋아요} </h3>
        <p>12월 6일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>12월 5일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>12월 4일 발행</p>
        <hr/>
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  return(
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
