import React, { useState, useEffect } from 'react'
import { addtodo, deletetodo, edituser } from "../../actions/index";
import "./todo.css"
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector(state => state.todoreducer.list);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>

                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        {
                            <i className="fa fa-plus add-btn" title="Add Item" onClick={() => dispatch(addtodo(inputData), setInputData(""))}></i>

                        }

                    </div>

                    <div className="showItems">

                        {
                            list.map((elem) => {

                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => dispatch(edituser(elem.id))}>edit</i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deletetodo(elem.id))}>delete</i>
                                        </div>
                                    </div>
                                )

                            })
                        }

                    </div>

                    {/* clear all button  
                    {/* <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Todo