import React, {useState} from "react";
import "./InputArea.css";


const InputArea = (props)=>{

    const [inputAreaIsClicked, setInputAreaIsClicked] = useState(false);
    const [inputData, setInputData] = useState({
        title:"",
        content:""
    }); 

    function handleInputAreaClick(){
        setInputAreaIsClicked(true);
    }
    const titleCustomStyle = {
        borderRadius:"10px 10px 0px 0px"
    }

    function handleChange(event){
        const {name, value} = event.target;
        setInputData(prevValue=>({...prevValue,[name]:value}));
        
    }

    function handleSubmit(event){
        props.onAdd(inputData)
        event.preventDefault();
        setInputData(()=>{
            return {title:"",
                content:""
            }
        })
        
    }


    return(
    <form className="inputArea" onSubmit={handleSubmit}>
    
        <input required onChange={handleChange} name="title" value={inputData.title} style={inputAreaIsClicked ? titleCustomStyle:{}} className="title" type="text" placeholder="TITLE" onClick={handleInputAreaClick}/>
        {inputAreaIsClicked && <div><textarea required name="content" value={inputData.content} onChange={handleChange} className="content"  cols="25" placeholder="CONTENT"></textarea> <button className="addBtn">Add</button></div>}
        
    </form>
    )
}
export default InputArea;