import React, {useEffect, useState} from "react"
import NavBar from "Views/NavBar/NavBar"
import { connect } from "react-redux"
import axios from "axios"
import * as Action from "../../Ducks/action_creator"

function Profile(props) {
    const [edit, setedit] = useState(false)
    const { first_name: firstname, last_name: lastname, email, phone_num: phone, user_id: id } = props.user
    const name = firstname + " " + lastname
    const{ address_line_1, address_line_2, city, state, zip } = props.address
    const [fName, setfName] = useState(firstname)
    const [lName, setlName] = useState(lastname)
    const [nEmail, setnEmail] = useState(email)
    const [num, setnum] = useState(phone)

    useEffect(() => {
        axios.post("/auth/info", {user_id: id}).then(({ data }) => {
            console.log(data)
            props.setAddress(data)
        })}
            , [])

        return (
            <div>{!edit && (
                <>
                <NavBar activeComponent='Profile'/>
                <div>
                    <p>User Information First name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone Number: {phone}</p>
                    <p>Home Address: {address_line_1}</p>
                <button onClick={() => setedit(true)}>edit</button>
                </div>
                <div>contact us</div>
                </>
            )}
            {edit && (
            <>
            <NavBar activeComponent='Profile'/>
            First Name:<input type="text" value = {fName} onChange = {e=> setfName(e.target.value)}/>
            Last Name:<input type="text" value = {lName} onChange = {e=> setlName(e.target.value)}/>
            Email:<input type="text" value = {nEmail} onChange = {e=> setnEmail(e.target.value)}/>
            Phone Number:<input type="text" value = {num} onChange = {e=> setnum(e.target.value)}/>
            <button>Submit</button>
            <button onClick = {() => setedit(false)}>Cancel</button>
            </>
            )}
            </div>
        )
    }

export default connect(state => state, Action)(Profile)
