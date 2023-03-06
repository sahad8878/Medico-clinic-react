import React, { useState, useEffect } from "react";
import { message } from "antd";
import axios from "../../Axios/Axios";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";





function PayPalButton({notification,refresh,setRefresh} ) {
   
    const [paymentComplete, setPaymentComplete] = useState(false);
 const navigate = useNavigate()
    const client = JSON.parse(localStorage.getItem("clientToken"));
    const clientToken = client.clientToken;
  
  
    const paypalOptions = {
      "client-id":
        "AR9rPCNyMwEXNemm95XvdI32AEqLbAxrtV0Q1MLtScf_hvTo81IBAsiMiuiyY3oMI8WejvaXwZYbzRFr",
      currency: "USD",
      intent: "capture",
    };
  
    const createOrder = (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: notification.consultationFees,
            },
          },
        ],
      });
    };
    const onApprove = async (data, actions) => {
      const result = await actions.order.capture();
      setPaymentComplete(true);
      console.log(notification._id );
      axios
        .patch(
          "/patchConfirmAppointment",
          { appointmentId:notification._id },
          { headers: { accesstoken: clientToken } }
        )
        .then((response) => {
          console.log(response,"responsee");
          const result = response.data;
          if (result.success) {
            setRefresh(!refresh) 
            message.success("Your Appointment confirmed Check your History");
            navigate("/clientAppHistory")
          } else {
            message.error(result.message);
          }
        });
    };
  
  return (
    <div className="w-44 ">
                    {!paymentComplete && (
                      <PayPalScriptProvider options={paypalOptions}>
                        <PayPalButtons
                          createOrder={createOrder}
                          onApprove={onApprove}
                         
                        />
                      </PayPalScriptProvider>
                    )}
                    {paymentComplete && <p>Payment complete!</p>}
                  </div>
  )
}

export default PayPalButton
