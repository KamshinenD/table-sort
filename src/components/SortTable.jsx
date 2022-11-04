import React, { useContext, useState } from 'react';

import SortContext from '../store/sortContext';

const SortTable = () => {
    const ctx = useContext(SortContext)

    const data = ctx.data;

    return (
        <div className='container'>
            <table className='table table-bordered'>
                <thead className='text-center'>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </thead>
                <tbody>
                    {data.map((d) => (
                        <tr key={d.id}>
                            <td>{d.first_name}</td>
                            <td>{d.last_name}</td>
                            <td>{d.email}</td>
                            <td>{d.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default SortTable