import React, { useState, useEffect } from "react";
import { message } from "antd";
import axios from "../../Axios/Axios";
import PayPalButton from "./PayPalButton";
function ClientNotificaiton() {
  const [notification, setNotification] = useState([]);
  const [ refresh , setRefresh ] = useState(false)

  const client = JSON.parse(localStorage.getItem("clientToken"));
  const clientToken = client.clientToken;


  useEffect(() => {
    axios
      .get(`/getClientNotifications`, { headers: { accesstoken: clientToken } })
      .then((response) => {
        const result = response.data;
        console.log(result);
        if (result.success) {
          setNotification(result.notification);
        } else {
          message.error(result.message);
        }
      });
  }, [refresh]);


  return (
    <div className=" p-5 sm:px-40 py-10">
      <div className="bg-[#D6E8EE] mb-11 pb-10">
        <div className="flex justify-center content-center  py-8">
          <h1 className="text-2xl font-serif  font-semibold">Notifications</h1>
        </div>

        {/*  */}
        {notification &&
          notification.map((notification) => (
            <div className=" m-5  rounded-lg shadow bg-white  py-4 bg-opacity-50 px-13 mx-32">
              {notification.status === "rejected" ? (
                <h1 className="text-center text-[#dc2626]">
                  The Appointment you booked on {notification.date} at{" "}
                  {notification.time} has been rejected. You can choose a new
                  schedule
                </h1>
              ) : (
                <div className="flex justify-center">
                  <h1 className="px-4 mt-6 text-center text-black">
                    Your appointment has been accepted , payment must be made to
                    confirm 
                  </h1>
                  <PayPalButton  notification={notification} refresh={refresh } setRefresh={setRefresh} />
                </div>
              )}
            </div>
          ))}

        {/*  */}
      </div>
    </div>
  );
}

export default ClientNotificaiton;
