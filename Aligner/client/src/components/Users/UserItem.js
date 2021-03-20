import React from 'react'
import PropTypes from 'prop-types'

const UserItem =({user:{_id, name, number, email, city, address, role, date}}) => {
    return (
        <div>
            <td>{name}</td>
            <td>{number}</td>
            <td>{email}</td>
            <td>{city}</td>
            <td>{address}</td>
            <td>{role}</td>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
