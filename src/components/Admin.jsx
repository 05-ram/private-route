import React from 'react'

const Admin = ({ current_user }) => {
    return (
        current_user === "admin" ? <div>Admin</div> : 'You Are Not Authorized'
    )
}

export default Admin;