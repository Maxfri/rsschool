import React, { useState } from 'react';
import CategoryList from '../../components/categoryList/categoryList';
import { Category } from '../../interface/interface';

interface Props {
  categories: Category[]
}
function AdminPage({ categories }: Props) {
  const [mode] = useState('admin');
  return (
    <div>
      <h2>Admin Panel</h2>
      <CategoryList categories={categories} mode={mode} />
    </div>
  );
}

export default AdminPage;
