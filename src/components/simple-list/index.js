const SimpleList = () =>{
    const pets =["Foxxy","Marion","Sophy","Bruno"];
    return(
        <div>
            <h1 style={{color:"white"}}>Using Index as a Key in Rendering Lists</h1>
            {
                pets.map((myPets, index) =>  <h3 style={{color:"white"}} key={index}> My name is {myPets}</h3>)
            }
        </div>
    )
}
export default SimpleList;