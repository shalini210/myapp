import "./Footercss.css"
import Footeritem from "./Footeritem"
export default function Footercomponent()
{
    var owner="SR"
    return(
        <>
        <div id="footer">
      
<Footeritem matchname="Qualifier1" teams="KKR vs SRH" 
stadium = "Narendra Modi Stadium"/>

<Footeritem matchname="Eliminator" teams="RCB vs RR" 
stadium = "Narendra Modi Stadium"/>
<Footeritem matchname="Qualifier2" teams="winner 1 and 2" 
stadium = "MS chidambaram Stadium"/>
<Footeritem  matchname="Final" teams="Finalist 1 and Finalist 2" 
stadium = "MS chidambaram Stadium"/>
        
        </div>
        <h3>Designed and Developed by : {owner}</h3>
        </>
    )
}