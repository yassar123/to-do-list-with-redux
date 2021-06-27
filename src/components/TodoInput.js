import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div style={{margin:"0 auto",width:"200px",padding:"10px"}}>
            <div className="row m-2" >
                <h1 style={{color:"grey",fontFamily:"Arial, Helvetica, sans-serif"}}>TO-DO-LIST</h1>
                <input
                    value={name}
                    placeholder="Enter"
                    onChange={(e) => setName(e.target.value)}
                    type="text" className="col form-control" />
                    
                <button

                    onClick={() => {
                        if(name==''){
                            return;
                        }
                        dispatch(addTodo({
                            id: uuid(),
                            name: name
                        }));
                        setName('');
                    }}
                    className="btn btn-primary mx-2">Add</button>
            </div>
        </div>
    )
}

export default TodoInput