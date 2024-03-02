import { useRouteError } from "react-router-dom"
const ErrorMessage=()=>{
    const error=useRouteError();
    console.log(error);
    
 return (   
    <>
        <h1>Error </h1>
        <h1> 404 Not found</h1>
        <h1>HArsh papa ha sabka</h1>

    </>

    )
}
export default ErrorMessage;