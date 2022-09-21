import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MobileDetail (){
    let params = useParams()
    const navigator =useNavigate()
    const [data,setdata] = useState({});
    const url= "https://630c71c083986f74a7c0a5fb.mockapi.io/smartphones"
    useEffect(()=>{
        fetch(url + "/" + params.id)
        .then((res) => res.json())
        .then((res) => {
            setdata(res);   
    })
        
        } ,[params.id]); 
    return(
        <>
<body style={{backgroundColor :" #edf1f5",marginTop :20}} >
<div class="container" >
    <div class="card" style={{marginBottom :30, position : "relative" , display : "flex", flexDirection : "column", minWidth : 0 , wordWrap : "break-word", backgroundColor : "#fff",backgroundClip : "border-box", border :"0 solid transparent",borderRadius : "0"}}>
        <div class="card-body">
            <h3 class="card-title">Mobile phone Detail</h3>
            <h6 class="card-subtitle" style={{ fontWeight : 300 , marginBottom : "10px" , color : "#8898aa"}}>made by kuldeep sonara</h6>
            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-6">
                    <div class="white-box text-center"><img src={data.SmartPhoneImage} class="img-responsive" alt="..." style={{boxSizing:"border-box",marginTop:"50px",maxWidth: 420, height:  420}} /></div>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-6">
                    <h4 class="box-title mt-5">{data.SmartPhoneName+" "+data.SmartPhoneModel}</h4>
                    <p>{data.SmartPhoneDecription}</p>
                    <h2 class="mt-5">
                        ${data.SmartPhonePrice}<small class="text-success">(36%off)</small>
                    </h2>
                    <button onClick={() =>{
                        navigator("/mobile/edit/"+params.id);
                    }}
                    
                    class="btn btn-dark btn-rounded mr-1" data-toggle="tooltip" title="" data-original-title="Add to cart" style={{marginRight : "2.5PX"}}>
                        edit
                    </button>
                    <button class="btn btn-danger btn-rounded" onClick={()=>{
                          fetch(url + "/" + params.id,{
                            method: "DELETE"
                          })
                          .then((res) =>{
                            navigator("/allmoblie");
                          }
                          )
                      
                    }} >delete</button>
                    <h3 class="box-title mt-5">Key Highlights</h3>
                    <ul class="list-unstyled">
                        <li><i class="fa fa-check text-success"></i>Sturdy structure</li>
                        <li><i class="fa fa-check text-success"></i>Designed to foster easy portability</li>
                        <li><i class="fa fa-check text-success"></i>Perfect furniture to flaunt your wonderful collectibles</li>
                    </ul>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <h3 class="box-title mt-5">General Info</h3>
                    <div class="table-responsive">
                        <table class="table table-striped table-product" style={{backgroundColor : "#f3f8fa !important"  , borderTop : "0px solid #dee2e6 !important" ,color :"#728299 !important"} }>
                            <tbody>
                                <tr>
                                    <td width="390">{data.SmartPhoneMaker}</td>
                                    <td>Stellar</td>
                                </tr>
                                <tr>
                                    <td>Delivery Condition</td>
                                    <td>Knock Down</td>
                                </tr>
                                <tr>
                                    <td>Seat Lock Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>Office Chair</td>
                                </tr>
                                <tr>
                                    <td>Style</td>
                                    <td>Contemporary&amp;Modern</td>
                                </tr>
                                <tr>
                                    <td>Wheels Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Upholstery Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Upholstery Type</td>
                                    <td>Cushion</td>
                                </tr>
                                <tr>
                                    <td>Head Support</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>Suitable For</td>
                                    <td>Study&amp;Home Office</td>
                                </tr>
                                <tr>
                                    <td>Adjustable Height</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Model Number</td>
                                    <td>F01020701-00HT744A06</td>
                                </tr>
                                <tr>
                                    <td>Armrest Included</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>Care Instructions</td>
                                    <td>Handle With Care,Keep In Dry Place,Do Not Apply Any Chemical For Cleaning.</td>
                                </tr>
                                <tr>
                                    <td>Finish Type</td>
                                    <td>Matte</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
        </>
    )
}

export default MobileDetail;