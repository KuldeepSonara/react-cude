import './Add.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Add(){
    const url= "https://630c71c083986f74a7c0a5fb.mockapi.io/smartphones"
    const [data,setdata] = useState({});
    const navigator = useNavigate();
    const params = useParams()

    useEffect(()=>{
        if(params.id >0){
            fetch(url+"/"+params.id,
                {
                    method: 'GET'
                })
            .then((res) => res.json())
            .then((res) => {
                setdata(res);
              });
        }
    })
    
    return (
        <>
    
                <div class="container">
            <div class="left">
                <div class="header">
                <h2 class="animation a1">Create Now A New</h2>
                <h4 class="animation a2">Create a new devise for sell</h4>
                </div>
                <div class="form">
                <input value={data.SmartPhoneName}
                 onChange={(e) =>{
                    setdata({...data,SmartPhoneName : e.target.value})
                }}
                type="text" class="form-field animation a3" placeholder="enter phone name"/>

                <input value={data.SmartPhoneModel} 
                onChange={(e) =>{
                    setdata({...data,SmartPhoneModel : e.target.value})
                }}
                type="text" class="form-field animation a4" placeholder="modeenter phone modell"/>

                <input value={data.SmartPhoneMaker}
                 onChange={(e) =>{
                    setdata({...data,SmartPhoneMaker : e.target.value})
                }}
                type="text" placeholder="enter phone maker" class="form-field animation a5"></input>
               
                <textarea value={data.SmartPhoneDecription}
                onChange={(e) =>{
                    setdata({...data,SmartPhoneDecription : e.target.value})
                }}
                 placeholder="phone description" class="form-field animation a6"></textarea>
                
                <input value={data.SmartPhoneImage}
                 onChange={(e) =>{
                    setdata({...data,SmartPhoneImage : e.target.value})
                }}
                type="text" placeholder="enter phone image" class="form-field animation a7"></input>
                
                <input value={data.SmartPhonePrice}
                 onChange={(e) =>{
                    setdata({...data,SmartPhonePrice : e.target.value})
                }} 
                type="text" placeholder="enter phone price" class="form-field animation a8"></input>
                
                <button class="animation a9" onClick={() =>{
                    if(params.id > 0){
                            fetch(
                              url+"/"+
                                params.id,
                              {
                                method: "PUT",
                                body: JSON.stringify(data),
                                headers: {
                                  "Content-Type": "application/json"
                                }
                              }
                            ).then(() => {
                              navigator("/allmoblie");
                            });
                    }else{
                    fetch(url,{
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: {
                            "Content-type": "application/JSON"
                        }
                    })
                    .then(()=>{
                        navigator("/allmoblie");
                    })
                }
                    
            }}>
            {params.id > 0 && "EDIT NOW  "}
              {!(params.id > 0) && "ADD DEVIS NOW  "}
            </button>
                </div>
            </div>
            <div class="right"></div>
            </div>
        </>
    );
}