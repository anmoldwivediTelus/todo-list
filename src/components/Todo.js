import React, { useState,useCallback } from "react"
import { useDispatch,useSelector } from "react-redux"
import  {addTodo, deleteAllTodos,deleteTodo}  from "../actions/index"
const Todo =() =>{
    const [inputData,setInputData]= useState('')
    const dispatch = useDispatch();
    const list =  useSelector((state)=> state.todoReducers.list)
    
    return(
        
        <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your todo</figcaption>
          </figure>
          <div className="addItems">
            <input type="text" value={inputData} onChange={( e ) => setInputData( e.target.value )} placeholder="Add items ..."/>
            <button type="button" className="btn" onClick={()=>dispatch(addTodo(inputData),setInputData(''))} >Add todo</button>
          </div>
          <div className="showItems">
          {
              console.log(list,"list"),
            list.map((item)=>{
                return(
                   
                   <div className="eachItem" key={item.id}>
                        <h3>{item.data}</h3>
                        <button type="button" className="btn" onClick={()=>dispatch(deleteTodo(item.id))} >Remove todo</button>
                    </div>
                    ) 
                   
            })
          }
          </div>
        </div>
      </div>
    )
}
export default Todo;