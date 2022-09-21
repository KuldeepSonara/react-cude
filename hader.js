import { Link } from "react-router-dom";

function Hader(){
    return (
        <>
         <Link to="./" >home</Link> &nbsp;
         <Link to="./allmoblie">all moblie</Link> &nbsp;
          <Link to="./mobile/add">mobile add</Link>&nbsp;
         
        </>
    )
}

export default Hader;