import "./Notes.css";
import TextSnippetSharpIcon from '@mui/icons-material/TextSnippetSharp';


const Notes = (props)=>{

    

    return(
        <div className="notes">
            <nav className="notesnav">
                <h1><TextSnippetSharpIcon fontSize="small"/>Notilo</h1>
                <button className="closeBtn" onClick={props.removeNote}>x</button>
            </nav>
            <hr/>
            <p className="notesTitle">{props.title}</p>
            <span className="notesContent">{props.content}</span>
        </div>
    )
}

export default Notes