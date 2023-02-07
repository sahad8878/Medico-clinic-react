import React, { useEffect } from 'react'

function LandingPage() {
  useEffect(()=>{
    const token = localStorage.getItem("clientToken")
    if (token) {
      axios.get()
    } else {
      // Navigate('/singin')
    }
  })
  return (
    <div>
      <h1>Landig page</h1>
    </div>
  )
}

export default LandingPage
