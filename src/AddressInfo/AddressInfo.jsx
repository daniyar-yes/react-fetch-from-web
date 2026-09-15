import React from 'react'

const AddressInfo = ({ addressHistory }) => {

    const addressListItems = addressHistory.map(address => <li key={address.id}>{`${address.streetName} ${address.streetNumber}`}</li>);
    return (
        <>
            <ul>{addressHistory.length && addressListItems}</ul>
        </>
    )
}

export default AddressInfo