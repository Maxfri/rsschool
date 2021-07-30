import React, { useState } from 'react';
import { INCRIMENT } from '../../const/const';
import { Category } from '../../interface/interface';

interface Props {
  category: Category[]
  setCategory: React.Dispatch<React.SetStateAction<Category[]>>
}
const DEFAULT_IMAGE = '../src/assets/img/default_category.png';
function AddCategory({ category, setCategory }: Props): JSX.Element {
  const [cardTitle, setCardTitle] = useState('');
  const handleChangeName = (e) => {
    setCardTitle(e.target.value);
  };
  const handleEditCategory = () => {
    setCategory([...category, {
      id: category.length + INCRIMENT,
      title: cardTitle,
      image: DEFAULT_IMAGE,
    }]);
    setCardTitle('');
  };

  return (
    <article
      key={category.length}
      className="category-card"
    >
      <img className="category-card-img" src={DEFAULT_IMAGE} alt="Category" />
      <div className="category-card-body">
        <p className="category-card-text">
          Add category
        </p>
        <input className="category-card-input" type="text" value={cardTitle} onChange={handleChangeName} />
      </div>
      <button className="btn btn-accent" type="button" onClick={handleEditCategory}>Add</button>
    </article>
  );
}

export default AddCategory;
