import React from 'react';
import CardList from '../../components/cardList/cardList';

interface Props {
  mode: string,
}

function CategoryPage({ mode }: Props): JSX.Element {
  return (
    <div>
      <h2>Category</h2>
      <CardList mode={mode} />
    </div>
  );
}

export default CategoryPage;
