import React, { useEffect, useState } from "react"
import NavBar from "Views/NavBar/NavBar"
import { connect } from "react-redux"
import axios from "axios"
import * as Action from "../../Ducks/action_creator"

function Profile(props) {
    const [edit, setedit] = useState(false)
    const { first_name: firstname, last_name: lastname, email, phone_num: phone, user_id: id } = props.user
    const { address_line_1, city, state, zip } = props.address
    const [fName, setfName] = useState(firstname)
    const [lName, setlName] = useState(lastname)
    const [nEmail, setnEmail] = useState(email)
    const [num, setnum] = useState(phone)
    const name = fName + " " + lName
    const [F, setF] = useState('')
    const [L, setL] = useState('')
    const [N, setN] = useState('')

    useEffect(() => {
        axios.post("/auth/info", { user_id: id }).then(({ data }) => {
            console.log(data)
            props.setAddress(data)
        })
    }
        , [])

    return (
        <div>{!edit && (
            <>
                <NavBar activeComponent='Profile' />
                <div>
                    <p>User Information First name: {name}</p>
                    <p>Email: {nEmail}</p>
                    <p>Phone Number: {num}</p>
                    <p>Home Address: {address_line_1}</p>
                    <p>Zip Code : {zip}</p>
                    <p>City: {city}</p>
                    <p>State: {state}</p>
                    <button onClick={() => setedit(true)}>edit</button>
                </div>
                <div>contact us</div>
                {console.log(name)}
                {console.log(nEmail)}
                {console.log(num)}
            </>
        )}
            {edit && (
                <>
                    <NavBar activeComponent='Profile' />
                    First Name:<input type="text" value={fName} onChange={e => setF(e.target.value) } />
                    Last Name:<input type="text" value={lName} onChange={e => setL(e.target.value) } />
                    Phone Number:<input type="text" onChange={e =>  setN(e.target.value) } /> 
                    <button onClick={() => {
                        setedit(false)
                        setfName(F)
                        setlName(L)
                        setnum(N)
                    }}>Submit</button>
                    <button onClick={() => setedit(false)}>Cancel</button>
                </>
            )}
        </div>
    )
}

export default connect(state => state, Action)(Profile)
