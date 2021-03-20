import React from 'react'
import PropTypes from 'prop-types'

const DoctorItem =({doctor:{_id,name, number, email, city, address, price, date}}) => {
    return (
        <div>
            <td>{name}</td>
            <td>{number}</td>
            <td>{email}</td>
            <td>{city}</td>
            <td>{address}</td>
            <td>{price}</td>
        </div>
    )
}

DoctorItem.propTypes = {
    doctor: PropTypes.object.isRequired,
}

export default DoctorItem
