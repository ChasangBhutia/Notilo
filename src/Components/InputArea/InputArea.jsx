import React, {useState} from "react";
import "./InputArea.css";
import AddIcon from '@mui/icons-material/Add';



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
        borderRadius:"10px 10px 0px 0px",
    }

    const [lengthLong, setLengthLong] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setInputData(prevValue=>({...prevValue,[name]:value}));
        if(name==="title"){
            const nameLength = value.length;
            if(nameLength>=24){
                setLengthLong(true);
            }else{
                setLengthLong(false);
            }
        }
        
        
    }

    function handleReset(){
        setInputData(()=>{
            return {title:"",
                content:""
            }
        })
        setInputAreaIsClicked(false)
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
    {lengthLong && <span className="alert">Title can have only 24 letters</span>}
        <input maxLength="24" required onChange={handleChange} name="title" value={inputData.title} style={inputAreaIsClicked ? titleCustomStyle:{}} className="title" type="text" placeholder={inputAreaIsClicked?"TITLE":"Take a Note..."} onClick={handleInputAreaClick}/>
        {inputAreaIsClicked && 
        
        <div className="contentBtnBox">
            <textarea required name="content" value={inputData.content} onChange={handleChange} className="content"  cols="25" placeholder="CONTENT"></textarea> 
            <section className="contentBtnBoxBtn">
            <button onClick={handleReset} className="resetBtn">Reset</button>
            <button className="addBtn"><AddIcon fontSize="large"/></button>
            </section>
     
        
        </div>}
    </form>
    )
}
export default InputArea;