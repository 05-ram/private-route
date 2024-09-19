import React from 'react'

const User = ({ current_user }) => {
    return (
        current_user === "admin" || current_user === "Registered" ? <div>User</div> : 'You Cannot access this page'
    )
}

export default User