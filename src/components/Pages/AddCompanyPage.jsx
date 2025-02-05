import React from 'react';
import axios from 'axios';
import CompanyAdd from '../UI/CompanyAdd';

export default function AddCompanyPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    await axios.post('/api/comp/add', formData);
    window.location = `/`;
  };
  return (
    <div className="row mt-3">
      <CompanyAdd submitHandler={submitHandler} />
    </div>
  );
}
