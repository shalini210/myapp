export default function Footeritem(props)
{
    return(
        <div id="fitem">
            <div id="matchname">
                {props.matchname}
            </div>
            <div id="matchdetails">
                <div id="teams"> {props.teams}</div>
                <div id="stadiun">{props.stadium}</div>

            </div>
        </div>
    )
}