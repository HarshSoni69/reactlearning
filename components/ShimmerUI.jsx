const ShimmerUI=()=>{
    return (
        <div className="Shimmer-Container">
            {Array(10).fill("lind").map((e,index)=>
                <div key={index} className="Shimmer-Card"></div>
            )}
            
            

      </div>
    )
    
}
export default ShimmerUI;