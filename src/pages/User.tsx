import React from 'react'
import { Outlet } from 'react-router'

function User() {
    return (
        <div className="user-page">
            <Outlet />
        </div>
    )
}

export default User
