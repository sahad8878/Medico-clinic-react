import React, { useState, useEffect } from "react";
import { message } from "antd";
import { InfinitySpin } from "react-loader-spinner";
import axios from "../../Axios/Axios";

function ClientNotificaiton() {
  const [notification, setNotification] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const client = JSON.parse(localStorage.getItem("clientToken"));
  const clientToken = client.clientToken;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/getClientNotifications`, { headers: { accesstoken: clientToken } })
      .then((response) => {
        const result = response.data;
        if (result.success) {
          setIsLoading(false);
          setNotification(result.notification);
        } else {
          message.error(result.message);
        }
      });
  }, []);

  const handleMarkAllRead =() => {}
  return (
    <div className=" p-5 md:px-40 py-10">
      <div className="bg-[#D6E8EE] mb-11 pb-10">
        <div className="flex justify-center content-center  py-8">
          <h1 className="text-2xl font-serif  font-semibold">Notifications</h1>
        </div>

        {isLoading ? (
          <div className=" flex justify-center">
            <InfinitySpin width="200" color="#194569" />
          </div>
        ) : (
          <div>
            {notification.length === 0 ? (
              <div className="flex p-16 justify-center font-serif text-[#194569] text-xl">
                No Notifications Yet..
              </div>
            ) : (
              <div>
                <div className="flex justify-end">
                  <span onClick={handleMarkAllRead} className="text-end mr-3">mark all read</span>
                </div>

                {notification.map((notification) => (
                  <div className=" m-5  rounded-lg shadow bg-white  py-4 bg-opacity-50 lg:px-13 lg:mx-32">
                    {notification.status === "cancelled" ? (
                      <h1 className="text-center text-[#dc2626]">
                        The Appointment you booked on {notification.date} at{" "}
                        {notification.time} has been rejected. You can choose a
                        new schedule
                      </h1>
                    ) : (
                      <div className="flex justify-center">
                        <h1 className="px-4 mt-6 text-center text-black">
                          Your appointment has been accepted , payment must be
                          made to confirm
                        </h1>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/*  */}
      </div>
    </div>
  );
}

export default ClientNotificaiton;
