import React, { useState, useEffect } from 'react';

function CompanyInfo() {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/company-info');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCompany(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(company,'company');

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error}</p>;

  return (
    <div>
      <h1>Company Information</h1>
      <p>ID: {company?.id}</p>
      <p>Name: {company?.name}</p>
      <p>Email: {company?.email}</p>
      <p>Phone: {company?.phone}</p>
      <p>Address: {company?.address}</p>
      <p>Description: {company?.description}</p>
      <p>Founded: {company?.founded_date ? new Date(company.founded_date).toLocaleDateString() : 'N/A'}</p>
      <a href={company?.social_links?.facebook} target="_blank" rel="noopener noreferrer">Facebook Link</a>
    </div>
  );
}

export default CompanyInfo;
