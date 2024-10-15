import "./ItemCard.css";
import DeleteIcon from '@mui/icons-material/Delete';


const ItemCard = (props)=>{

    function handleRemove(){
        props.removeItem(props.id);
    }
    return(
        <div className="itemCard">
            <div className="contentBox">
                <span className="titleDisplay">{props.title}</span>
                <span className="contentDisplay">{props.content}</span>
            </div>
            <DeleteIcon className="deleteIcon" onClick={handleRemove}/>
        </div>
    )
}

export default ItemCard;