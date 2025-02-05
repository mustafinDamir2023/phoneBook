import React from 'react';
import axios from 'axios';
import CompanyCard from '../UI/CompanyCard';

export default function MyCompanyPage({ user, allUserCompany }) {
  const [companies, setComp] = React.useState(allUserCompany);
  const deleteHandler = async (id) => {
    await axios.delete(`/api/comp/${id}`);
    setComp((prev) => prev.filter((comp) => comp.id !== id));
  };
  return (
    <div className="row mt-5">
      {companies.map((company) => (
        <CompanyCard key={company.id} company={company} deleteHandler={deleteHandler} user={user} />
      ))}
    </div>
  );
}
