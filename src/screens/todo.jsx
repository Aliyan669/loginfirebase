import '../App.css';
import { useState } from 'react';
// import Button from './Components/Button';
import Header from './todohead';
import Btn from './button';


function Todo() {
  let [txt, setTxt] = useState("Hello World!")
  let [list, setList] = useState([])
  let [editId, setEditId] = useState(0)

  let valueChange = (v) => {
    setTxt(v.target.value)
  }
  let valueAdd = (v) => {
    v.preventDefault();

    if (!txt) {
      alert("Text is Required")
      return;
    }
    let editTodo = list.find((v) => v.id === editId);

    if (editId) {
      let updateTodo = list.map((v) =>
        v.id === editTodo.id
          ? (v = { id: v.id, txt })
          : { id: v.id, txt: v.txt }
      );
      setList(updateTodo);
      setEditId(0);
      setTxt("");
      return;
    }
    else if (txt !== "") {
      setList([{ id: `${txt}-${Date.now()}`, txt }, ...list]);
      // console.log(txt)
      // console.log(list)
      setTxt("");
    }
  }
  let valueDelete = (id) => {
    let deleteTodo = list.filter((v) => v.id !== id);
    setList([...deleteTodo]);
  }
  let valueEdit = (id) => {
    let editTodo = list.find((v) => v.id === id);
    setTxt(editTodo.txt);
    setEditId(id);
  }
  function DeleteAll(){
    setList([]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='Main'>
         <Header />
            <input className='input' value={txt} onChange={valueChange} />
            <Btn className="btn" onClick={valueAdd} btnName={"Add"} /> 
          <Btn className="btn" onClick={DeleteAll} btnName="Delete All" />
          <ul>
            {list.map((v) => {
              return <div>
                <li className='list' ><span key={v.id}>{v.txt}</span>
                <Btn className="btn" onClick={() => valueEdit(v.id)} btnName="Edit" />
                <Btn className="btn" onClick={() => valueDelete(v.id)} btnName="Delete" />
                </li>
              </div>
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}
export default Todo;