import React, { useState } from 'react';
import CategoryList from '../../components/categoryList/categoryList';

function AdminPage({ categories }) {
  const [mode, setMode] = useState('admin');
  return (
    <div>
      <h2>Admin Panel</h2>
      <CategoryList categories={categories} mode={mode} />
    </div>
  );
}

export default AdminPage;
