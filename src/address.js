import React from 'react'

const  Address=({data})=> {
    console.log(data);
    return (
        <>
          {(data.door_no)? <div> <b>Door No:</b> {data.door_no} </div>:'' }
          {(data.street)? <div><b> Street:</b> {data.street} </div>:'' }
          {(data.city)? <div><b> City:</b> {data.city} </div>:'' }
          {(data.state)? <div><b> State:</b> {data.state} </div>:'' }
          {(data.zip)? <div><b> Zip:</b> {data.zip} </div>:'' }
        </>
    )
}
export default Address;