import React from 'react'

const NavBar = () => {

    return (
        <div>
            <h1>NavBar</h1>
            <button onClick={() => localStorage.removeItem('auth_key')}>Logout</button>
        </div>
    )
}

export default NavBar