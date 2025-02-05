import React, { useEffect } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import CompanyCard from '../UI/CompanyCard';

export default function HomePage({ user, allCompany }) {
  const [companies, setCompanies] = React.useState(allCompany);

  const deleteHandler = async (id) => {
    await axios.delete(`/api/comp/${id}`);
    setCompanies((prev) => prev.filter((comp) => comp.id !== id));
  };

  const [input, setInput] = React.useState('');
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (input.trim()) {
      const time = setTimeout(() => {
        axios.post('/api/comp/use/search', { input }).then((res) => setCompanies(res.data));
      }, 300);
      return () => {
        clearTimeout(time);
      };
    }
    if (!input) {
      axios.get('/api/comp/use').then((res) => setCompanies(res.data));
    }
  }, [input]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user ? (
        <div className="container">
          <br />
          <br />
          <Form.Control
            value={input}
            onChange={changeHandler}
            name="name"
            type="text"
            placeholder="filter"
            style={{ width: '275px' }}
          />
          <br />
          <div className="row mt-3">
            {companies.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                user={user}
                deleteHandler={deleteHandler}
              />
            ))}
          </div>
        </div>
      ) : (
        <div />
      )}
    </>
  );
}
