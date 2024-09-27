import {Header} from '../Header.jsx'
import { TestList } from '../TestList.jsx';
import { Images } from '../Images.jsx';
import React, { useState } from 'react';

const testList = [
  "Products",
  "Features",
  "Tests",
  "Results"
]

const images = [
  "https://th.bing.com/th/id/OIP.jyVhaB8tRHthJi1EtPD6uAHaE8?w=225&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th?id=OIP.8Pcw51IMKUcTGt_0O9JZ1QHaEc&w=322&h=193&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
]

const createImages = (imageList, id) => <Images src = {imageList} key = {id}/>
const createTestList = (testList, id) => <TestList ulValue = {testList} key = {id}/>

let k = 0;
let j = 0;


function Dashboard() {
  let [count, setCount] = useState(0);

  const increase = () => {
    count++;
    setCount(count);
  }

  const decrease = () => {
    count--;
    setCount(count);
  }

  return (
    <div>
      <Header h1Value = "Software Testing Copilot" h2Value = {"Current Time:" + new Date().getHours()}></Header>
      {testList.map( i => createTestList(i, k++))}
      <div className = "header">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
      {images.map( i => createImages(i, j++))}
    </div>
  )
  }

export default Dashboard;