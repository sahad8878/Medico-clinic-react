import React, { useState, useEffect } from "react";
import { message } from "antd";
import axios from "../../Axios/Axios";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";





function PayPalButton({selectedDate,token,schedulTime,doctorId,consultationFees,setShowPaypal,handleCloseModal} ) {
   
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
              value: consultationFees,
            },
          },
        ],
      });
    };
    const onApprove = async (data, actions) => {
      const result = await actions.order.capture();
      setPaymentComplete(true);
    //   console.log(notification._id );
console.log(schedulTime,"ttttttttttttttttt");
    axios
    .post("/postAppointment", {
      date: selectedDate,
      time: schedulTime,
      token:token,
      doctor: doctorId,
      consultationFees:consultationFees,
    },
    { headers: { accesstoken: clientToken } }
    
    )
    .then((response) => {
      console.log(response, "responseeee");
      const result = response.data;
      
      if (result.success) {
        // navigate('/clientNotificationPage');
        setShowPaypal(false)
        handleCloseModal()
        message.success(result.message);
      } else {
        message.error(result.message).then(() => {});
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
