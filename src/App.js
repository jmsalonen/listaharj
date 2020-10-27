import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [firstList, setFirstList] = useState([
    {value: "Peruna", checked: false},
    {value: "Maito", checked: false},
    {value: "Ananas", checked: false},
    {value: "Voi", checked: false},
    {value: "Kananmuna", checked: false}
  ]);

  const [secondList, setSecondList] = useState([
    {value: "Tomaatti", checked: false},
    {value: "Kurkku", checked: false},
    {value: "Appelsiini", checked: false},
    {value: "Leipä", checked: false},
    {value: "Pasta", checked: false}
  ]);
  
  const [search, setSearch] = useState("");
  
  const printFirstList = () => {
    let filtered = firstList.filter(item => item.value.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()))
    return filtered.map((item, index) => (
      <li>
        <input key={index} 
               type="checkbox" 
               checked={item.checked} 
               onChange = {() => handleFirstChange(index)}/>
        {item.value}
      </li>
      )
    )
  }

  const printSecondList = () => {
    let filtered = secondList.filter(item => item.value.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()))
    return filtered.map((item, index) => (
      <li>
        <input key={index} 
               type="checkbox" 
               checked={item.checked} 
               onChange = {() => handleSecondChange(index)}/>
        {item.value}
      </li>
      )
    )
  }

  const handleFirstChange = (index) => {
    let newList = [...firstList]
    newList[index].checked = newList[index].checked ? false : true
    setFirstList(newList)
  }

  const handleSecondChange = (index) => {
    let newList = [...secondList]
    newList[index].checked = newList[index].checked ? false : true
    setSecondList(newList)
  }
  
  const moveItems = () => {
    let newFirst = firstList.filter(item => item.checked)
    let newSecond = secondList.filter(item => item.checked)
    setFirstList(firstList.filter(item => !item.checked).concat(newSecond))
    setSecondList(secondList.filter(item => !item.checked).concat(newFirst))
  }
  
  const filterItems = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <button onClick={moveItems}> Move </button>
      <input onChange = {(event) => filterItems(event)}></input>
      <div className="container">
        <div className="fixed">{printFirstList()}</div>
        <div className="flex-item">{printSecondList()}</div>
      </div>      
    </div>
  );
}

export default App;
