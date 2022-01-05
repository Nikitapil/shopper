import React, { useState } from 'react'
import './searchform.scss'
export const SearchForm = ({setSearchQuery, disable}) => {
    const [inputValue, setInputValue] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        setSearchQuery(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={submitHandler} className='searchform'>
            <label htmlFor="searchform__input">Search by title: </label>
            <input disabled={disable} className='searchform__input' id='searchform__input' type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button disabled={disable} type='submit' className='product__btn searchform__btn'>Search</button>
        </form>
    )
}
