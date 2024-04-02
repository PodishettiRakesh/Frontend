import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    email: '',
    phoneNumber: '',
    age: '',
    qualification: '',
    statementOfPurpose: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <div className="container">
      <style>
        {`
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }

          .box {
            padding: 20px;
            margin-bottom: 20px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .box.full-width {
            width: 100%;
          }

          .box label {
            width: 100%;
            margin-bottom: 10px;
          }

          .box input,
          .box select,
          .box textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            float: right;
          }

          button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
      <h1 style={{ textAlign: 'center' }}>Personal Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="box">
          <div className="row">
            <label style={{ marginRight: '10px' }}>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label style={{ marginRight: '10px' }}>
              Father's Name:
              <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
            </label>
          </div>
          <div className="row">
            <label style={{ marginRight: '10px' }}>
              Age:
              <input type="number" name="age" value={formData.age} onChange={handleChange} />
            </label>
            <label style={{ marginRight: '10px' }}>
              Mobile Number:
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </label>
          </div>
          <div className="row">
            <label style={{ marginRight: '10px' }}>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
          </div>
        </div>
        <div className="box">
          <label style={{ width: '100%' }}>
            Highest Qualification:
            <select name="qualification" value={formData.qualification} onChange={handleChange}>
              <option value="">Select</option>
              <option value="High School">High School</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>
            </select>
          </label>
        </div>
        <div className="box">
          <label style={{ width: '100%' }}>
            Statement of Purpose:
            <textarea name="statementOfPurpose" value={formData.statementOfPurpose} onChange={handleChange} style={{ height: '200px', width:'550px' }} />
          </label>
        </div>
        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
};

export default App;
