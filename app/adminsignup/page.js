'use client';
import { useState } from "react";

export default function AfterSignupAdmin(){
  // const [inputs, setInputs]= useState([0])

  const [formData, setFormData]= useState(
    {
      firmname:"",
      gstno:"",
      uhbvngstno:"",
      contactno:"",
      inputs:[0]
    }
  )

  const handleChange =(e)=>{
    e.preventDefault();
    setFormData({...formData,[e.target.name]:[e.target.value]})
    console.log(formData)
  }

const handleSubmit = ()=>{
  e.preventDefault();
}

  const addInput=(e)=>{
    e.preventDefault();
    setFormData({...formData,inputs : [...formData.inputs,formData.inputs.length]})
  }
    return(
<div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
  <div className="mb-6 text-center">
    <p className="text-xl font-semibold text-gray-700">
      You are signed up. Now fill these details.
    </p>
  </div>

  <form className="space-y-4" onSubmit={handleSubmit}>
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">Firm Name</label>
      <input
        placeholder="Enter your firm name"
        name="firmname"
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        id="firmname"
        value={formData.firmname}
        onChange={handleChange}
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">GST No</label>
      <input
        name="gstno"
        placeholder="Enter your GST NO"
        id="gstno"
        value={formData.gstno}
        onChange={handleChange}
        required
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">UHBVN GST No</label>
      <input
        name="uhbvngstno"
        type="text"
        placeholder="Enter your UHBVN GST NO"
        onChange={handleChange}
        required
        id="uhbvngstno"
        value={formData.uhbvngstno}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">Contact No</label>
      <input
        name="contactno"
        type="text"
        placeholder="Enter your contact no."
        id="contactno"
        required
        value={formData.contactno}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      {formData.inputs.map((id)=>(
        <div key={id} className="mb-4">
          <input
            id={`new${id}`}
            name={`new${id}`}
            type="text"
            placeholder="Enter your details"
            value={formData.inputs}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}
    </div>
    <div>
        <button onClick={addInput}>+</button>
    </div>

    <div>
        <button type="submit">Submit</button>
    </div>
  </form>
</div>


        
    )
}