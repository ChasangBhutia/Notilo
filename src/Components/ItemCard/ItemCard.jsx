import { useState } from "react";
import "./ItemCard.css";
import DeleteIcon from '@mui/icons-material/Delete';
import Notes from "../Notes/Notes";


const ItemCard = (props)=>{

    const [readMoreClicked, setReadMoreClicked] = useState(false);

    function handleReadMore(){
        readMoreClicked?setReadMoreClicked(false):setReadMoreClicked(true);
    }

    function handleRemove(){
        props.removeItem(props.id);
    }

    const customBorderRadius = {
        borderRadius:"0px"
    }
    function onRemove(){
        setReadMoreClicked(false);
    }

    return(
        <div>
            <div className="itemCard" style={readMoreClicked ? customBorderRadius:null}>
                <div className="contentBox" >
                    <span className="titleDisplay">{props.title}</span>
                    <button className="readMoreBtn" onClick={handleReadMore}>Read more...</button>
                </div>
                <DeleteIcon fontSize="large" className="deleteIcon" onClick={handleRemove}/>
            </div>
            {readMoreClicked && <Notes title={props.title} content={props.content} removeNote={onRemove}/>}
            
        </div>
       
    )
}

export default ItemCard;