import React from 'react'
import { useState } from 'react'
import { BsFillTrash3Fill } from "react-icons/bs";
const Task = () => {
  

  const [items,setItems] = useState(
    [
      {id:1,checked:true,item:"Codeing"},
      {id:2,checked:false,item:"Reading"},
      {id:3,checked:false,item:"writing"}
    ]
  )

  const checkhandle=(id)=>{
      const list = items.map((item)=>
      item.id ===id ?{...item,checked:!item.checked}:item);
      setItems(list)
  }

const Deletetask=(id,checked)=>{
  if(checked === true){
   const list=items.filter((item)=>
    item.id !== id
  )
  setItems(list)
 }
 else{
  alert("Complete the task")
 }
}
const  AddTask=(items)=>{
    const task =document.getElementById('task').value;
    if(task===""){
      alert("enter Task Name");
    }else{
    items.push({id:items.length+1,checked:false,item:task})
    const list = items.map((item)=>
      task!==""?{...item}:null);
    setItems(list)
    
}
    
}
  return(
    <task>
      <div>
        <input type='text'  id='task' placeholder='Enter a Task'></input>
        <button id='addbtn' type='submit' onClick={()=>AddTask(items)} >ADD TASK</button>
      </div>
      <ul>
        {
          items.map( (item) =>(
            <li key={item.id}>
              <input className='chbox' type='checkbox' 
                     onChange={() => checkhandle(item.id)}
                     checked={item.checked}
              ></input>
              <label 
              style={(item.checked)?{textDecoration:'line-through'}:null}
              onDoubleClick={() => checkhandle(item.id)}>{item.item}</label>
              <BsFillTrash3Fill
              role='button'
              tabIndex='0'
              onClick={() => Deletetask(item.id,item.checked)}
              className='delbtn'
              />
            </li>
          )
          )
        }
      </ul>
    </task>
  )


  // const [count,setCount] = useState(0);
  // const [names,setName] = useState('Hello');
  
  // function changename(){
  //   const arr=['devil','whitey','world','hackii','Hello']
  //   const n=Math.floor(Math.random()*arr.length)
  //   setName(names => arr[n])
  // }
  // function increment(){
  //   setCount(preCount => preCount +1)
  // }
  // function decrement(){
  //   setCount(preCount => preCount -1)
  // }


  // return (
  //   <task>
  //     <div>
  //     <input className='task' id='task' placeholder='enter task name'></input>
  //     <button type='button' className='addbtn' id='addbtn'  >ADD</button>
  //     </div>
  //     <div className='ct'>
  //     <button onClick={decrement}>-</button>
  //     <span>{count}</span>
  //     <button onClick={increment}>+</button>
  //     </div>
  //     <h1>Hello <span>{names}</span></h1>
  //     <button onClick={changename}>Change name</button>
  //   </task>
  // )
}

export default Task
