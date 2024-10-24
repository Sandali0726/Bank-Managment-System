import React from "react";
import { useState,useEffect } from "react";
import "./NicDetail.css";

export default function RegDetail(){
    const [userDetail,setDetail]=useState([]);
    const [type,setType]=useState("");

    useEffect(()=>{
        const getData=localStorage.getItem("regDetail");
        if(getData){
            const DataArray=JSON.parse(getData);
            setDetail(DataArray[0]);
            setType(DataArray[0][0].customer_type);
        }
        console.log(type);
    })

    return(
        <>
            <h2>Customer Account Details</h2>

            <div class="row" id="set2">
                <div id="Left2" class="col-sm-4">
                    {userDetail.map((val,key)=>(
                        <><span >Organization name : <input type="text" id="fname" value={val.name}></input></span><br></br>
                        <span >Register no : <input type="text" id="lname" value={val.registration_no}></input></span><br></br>
                        <span >Contact person : <input type="text" id="bd" value={val.contact_person}></input></span><br></br>
                        <span>Contact no : <input type="text" id="no" value={val.contact_number}></input></span><br></br>
                        <span>Contact person position : <input type="text" id="no" value={val.contact_person_position}></input></span><br></br>
                        <span >Address : <input type="text" id="address" value={val.address}></input></span><br></br>
                        <span>Customer type : <input type="text" id="type" value={val.customer_type}></input></span><br></br></>
                    ))}
                </div>

                <div id="Right2" class="col-sm-4">
                    {userDetail.map((val,key)=>(
                        <><span >Account id : <input type="text" id="accID" value={val.account_id}></input></span><br></br>
                        <span >Account type : <input type="text" id="accType" value={val.type}></input></span><br></br>
                        <span >Balance : <input type="text" id="balance" value={val.balance}></input></span><br></br>
                        <span >Start date : <input type="text" id="date" value={val.start_date}></input></span><br></br>
                        <span >Status : <input type="text" id="state" value={val.status}></input></span><br></br>
                        <span >Branch : <input type="text" id="branch" value={val.city}></input></span><br></br>
                        </>
                    ))}
                </div>
            </div>

            
        
        </>
    )
}