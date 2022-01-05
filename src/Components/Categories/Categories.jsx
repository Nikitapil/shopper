import React from 'react'

export const Categories = ({options, isLoading, setCategory, value}) => {

    const selectChangeHandler = (e) => {
        setCategory(e.target.value)
    }

    return (
        <div className='categories'>
            <label htmlFor="categories-filter">Choose category: </label>
            <select id='categories-filter' className='categories-filter' onChange={selectChangeHandler} value={value}>
                <option value="">All</option>
                {isLoading ? <option disabled>loading</option> :
                options?.map((option) => {
                    return (
                        <option key={option} value={option}>{option}</option>
                    )
                })
                }
            </select>
        </div>
    )
}
