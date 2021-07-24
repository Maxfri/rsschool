import React from 'react';
import CardList from '../../components/cardList/cardList';

interface Props {
  mode: string,
  setMode: any,
  // setMode: React.Dispatch<React.SetStateAction<string>>,
}

function CategoryPage({ mode, setMode }: Props): JSX.Element {
  return (
    <div>
      <h2>Category</h2>
      <CardList mode={mode} setMode={setMode} />
    </div>
  );
}

export default CategoryPage;
