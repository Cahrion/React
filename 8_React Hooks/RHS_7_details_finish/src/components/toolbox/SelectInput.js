import React from 'react';

const SelectInput = ({
    name, 
    label, 
    onChange, 
    defaultOption, 
    value, 
    error, 
    options 
}) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <select className='form-control' name={name} value={value} onChange={onChange}>
                <option value="">
                    {defaultOption}
                </option>
                {
                    options.map(option=>{
                        return (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        );
                    })
                }
            </select>
            {error && <div className='alert alert-danger'>{error}</div>}
        </div>
    )
}
export default SelectInput;