/* eslint-disable react/style-prop-object */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Allmoblie(){
        const [data ,setdata] = useState([]);
        const url= "https://630c71c083986f74a7c0a5fb.mockapi.io/smartphones"
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            setdata(res);
    });  
    
   }   ,[]);
   
  
   const allmoblieformated = data.map((fac)=>{
    return (
        <>    
          <div class="card mb-3" >       
            <div class="row no-gutters">
                <div class="col-md-4">
                <img src={fac.SmartPhoneImage} class="card-img" alt="..."/>
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{fac.SmartPhoneName+" "+fac.SmartPhoneModel}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <h2 class="mt-5">
                        ${fac.SmartPhonePrice}<small class="text-success">(36%off)</small>
                    </h2>
                    <Link to={"../mobileDetail/" + fac.id}>
                    <button class="btn btn-primary btn-rounded">detali page</button>
                    </Link>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
            </div>
            </div>

        </>
    )
   })

    return allmoblieformated;

    }

export default Allmoblie;