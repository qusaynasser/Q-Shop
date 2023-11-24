import React from 'react'

export default function Input({type = 'text', id, name, title ,value, onChange,errors , onBlur , touched}) {
  return (
    <>
   <div className="mb-3  input-group">
   <label className="form-label me-3" htmlFor={id}>{title}</label>
   
    <input type = {type} name = {name} className="form-control me-1" value={value} id={id} onChange={onChange} onBlur={onBlur}/>
    {touched[name] &&   errors[name] && <p className="text-danger ms-4">{errors[name]}</p>}
   </div>
    </>
  )
}
