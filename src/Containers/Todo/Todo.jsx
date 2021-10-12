import React, {useEffect, useState} from 'react'
import "./Todo.scss"
import {db} from "../../firebase"
import { collection, addDoc, getDocs, doc, updateDoc } from "@firebase/firestore"; 


const Todo = () => {

  const [todos, setTodos] =useState([])
  // addDoc(collection(db, "todos"), {
  //   title: "Get out of bed",
  //   description: "Open eyes and sit up",
  //   isCompleted: "false"
  // });
//CRUD
//Create
//Read


const getTodos = () => {
  getDocs(collection(db, "todos")).then(docs => {
    const userTodos = [];
    docs.forEach(doc => {
      const userTodo = {
        id: doc.id,
        ...doc.data()
      };
      userTodos.push(userTodo);
      
      
    
    });
   setTodos(userTodos)
  });
};
//
const createTodo = event => {
  event.preventDefault();
  const title = event.target[0].value
  const description = event.target[1].value
  addDoc(collection(db, "todos"), {
    title: title,
    description: description,
    isCompleted: false,
})
getTodos();
}


useEffect(() => {
  getTodos();

}, [])

const updateTodo = event => {
  const docId = event.target.id
  const toDoRef = doc(db, "todos", docId)
  updateDoc(toDoRef, {
    isCompleted: true
  });
  getTodos()
}


const todosListJSX = todos.map(todo => {
  const {title, description, id} = todo


 return (
   <div className="toDoItem" key={id} id={id}>
     <h1>Title:     {title}</h1>
     <p>Description:     {description}</p>
     <button id={id} onClick={updateTodo}>Set as Complete</button>
   </div>
 )
  
})


  return (
    <section>
      <h2>Todo...</h2>
      <form onSubmit={createTodo}>
        <label name="title">Title</label>
        <input name="title" type="text" />
        <label name="description">Description</label>
        <textarea name="description" cols="30" rows="5"></textarea>
        <button >Submit</button>
      </form>
      <section className="toDoList">
        <h1>Generated Todo List</h1>
        {todosListJSX}
      </section>
      

    </section>
  );
}

export default Todo
