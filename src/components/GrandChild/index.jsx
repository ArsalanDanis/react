import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../App'

const GrandChild = () => {
    const data = useContext(UserContext);
    console.log("DAAAAAAAAAAAAAAAAAA",data)
  return (
      <div>
          {/* <h2>{`Grand User : ${data} `}</h2> */}
    </div>
  )
}

export default GrandChild