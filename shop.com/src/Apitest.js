import axios from "axios"

const usergetapi=()=>{
    return(
        axios.get(`https://myownapitodo.herokuapp.com/User`)
    )
}

const userpostapi=(data)=>{
    return (
        axios({
            url:`https://myownapitodo.herokuapp.com/User`,
            method:"POST",
            data:data
        })
    )
}




export {usergetapi,userpostapi}