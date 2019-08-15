import React, {useEffect} from "react"
import NavBar from "Views/NavBar/NavBar"
import { connect } from "react-redux"
import axios from "axios"
import * as Action from "../../Ducks/action_creator"

function Profile(props) {
    const { first_name: firstname, last_name: lastname, email, phone_num: phone, user_id: id } = props.user
    const name = firstname + " " + lastname
    const{ address_line_1, address_line_2, city, state, zip } = props.address
    useEffect(() => {
        axios.post("/auth/info", {user_id: id}).then(({ data }) => {
            console.log(data)
            props.setAddress(data)
        })}
            , [])

        return (
            <div>
                <NavBar />
                <div>
                    User Information First name: {name}
                    Email: {email}
                    Phone Number: {phone}
                    Home Address: {address_line_1}
                <button>edit</button>
                </div>
                <div>contact us</div>
            </div>
        )
    }

export default connect(state => state, Action)(Profile)
