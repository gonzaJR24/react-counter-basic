import "../stylesheets/Counter.css"

export default function Counter({number}){
    return(
        <div className="counter-container">
            {number}
        </div>
    )
}