import "./Player.css"
export default function Player(props)
{
    return(
        <>
        <div className="playercontainer">
        <div className="playerHeading">
                {props.ph}
       </div>
       <img src={props.img}/>
       <div className="playername">
        {props.playername}
       </div>
       <hr></hr>
       <div className="playerDetails">
       <h3>IPL Team : {props.iplteam}</h3>
       <h3>Team : {props.team}</h3>
       <h3>Age : {props.age} Years</h3>
       </div>
        </div>
        </>
    )
}