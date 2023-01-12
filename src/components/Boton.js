import "../stylesheets/Boton.css"

export default function Boton({text, isBtnClick,addNumber}){
    return(
        <button 
        className={isBtnClick? 'btn-click' : 'btn-restart'} 
        onClick={addNumber}>
            {text}
        </button>
    )
}