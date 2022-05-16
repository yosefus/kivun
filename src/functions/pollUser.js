import axios from "axios";

export function savepolluser(data, userID="61f6c1bd771e5eff347b22a8") {
    axios.post(`https://survey-workin.herokuapp.com/api/pollusers`, data)
        .then(res => {console.log(res); res.send("sucses")})
        .catch(e => {

        })
}


