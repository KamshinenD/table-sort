import React, { useContext, useRef, useState } from 'react'
import SortContext from '../store/sortContext'

const Input = () => {
    const ctx = useContext(SortContext);

    const handleSortingOrder = (e) => {
        ctx.orderHandler(e.target.value)
    }

    return (
        <div className='container'>
            <form>
                <select name="Sorting" id="sorting" onChange={handleSortingOrder} >
                    <option value="sort">Sort</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </form>
        </div>
    )
}

export default Input;