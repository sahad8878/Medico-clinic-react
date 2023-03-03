import React,{useState, useEffect} from "react";
import { message } from "antd";
import axios from "../../Axios/Axios"

function ClientNotificaiton() {
const [notification,setNotification] = useState([])

    useEffect(()=> {
        const client = JSON.parse(localStorage.getItem("clientToken"));
        const clientToken = client.clientToken;
        axios.get(`/getClientNotifications`,{headers: { accesstoken: clientToken } }).then((response) => {
            const result = response.data
            console.log(result);
            if(result.success){
                setNotification(result.notification)
            }else{
                message.error(result.message)
            }
        })
    },[])

  return (
    <div className=" p-5 sm:p-20 pb-10">
      <div className="bg-[#D6E8EE] mb-11 pb-10">
        <div className="flex justify-center content-center  py-8">
          <h1 className="text-2xl font-serif  font-semibold">Notifications</h1>
        </div>

        {/*  */}
        {
          notification &&
            notification.map((notification)=>(

        <div className=" m-5  rounded-lg shadow bg-white  py-4 bg-opacity-50 px-13 mx-32">
       

           {
            notification.status === "rejected" ?
            <h1 className="text-center text-[#dc2626]">your appointment is rejected</h1>
            :
            <h1 className="text-center text-black">your appointment is accepted conform your  booking <span className="p-2 ml-10 bg-white">payment</span></h1>

           }
        </div>

            ))
        }
       


        {/*  */}
      </div>
    </div>
  );
}

export default ClientNotificaiton;
