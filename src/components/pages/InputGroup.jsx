import React from 'react';

export default function InputGroup({ type, placeholder, name, value, onChange }) {
    return (
      <>
        <label htmlFor={name}>{placeholder}</label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          // required
          value={value}
          onChange={onChange}
        />
      </>
    );
  }
  

