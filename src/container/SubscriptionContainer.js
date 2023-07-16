import React from 'react'
import LeftSubcriptionContainer from './LeftSubcriptionContainer'
import RightSubcriptionContainer from './RightSubcriptionContainer'

const SubscriptionContainer = () => {
  return (
    <div style={{backgroundColor:"#0c0d29",color:'white',height:"1000vh",width:"100%",display:'flex',justifyContent:"space-around"}}>
     <LeftSubcriptionContainer/>
     <RightSubcriptionContainer/>
    </div>
  )
}

export default SubscriptionContainer