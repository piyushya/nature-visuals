/* eslint-disable react/prop-types */
export default function Fact(props){
    return(
        <div className="fact-box container">
            <div className="fact-text">
                <p>{props.text}</p>
                <a className="button-link insta-link" href={props.link} target='_blank' rel="noreferrer">Watch Now</a>
            </div>
            <img src={props.image}></img>
        </div>
    )
}