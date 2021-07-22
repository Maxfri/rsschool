import React, { useState } from 'react';
import CardsData from '../cards/CardsData';

function AddCategory({ category, setCategory }): JSX.Element {
  const [cardTitle, setCardTitle] = useState('');

  const handleChangeName = (e) => {
    setCardTitle(e.target.value);
  };

  const handleEditCategory = () => {
    setCategory([...category, { title: cardTitle }]);
    console.log(category);
    setCardTitle('');
  };

  return (
    <article
      key={category.id}
      className="category-card"
    >
      <img className="category-card-img" src="../src/assets/img/default_category.png" alt="Category" />
      <div className="category-card-body">
        <p className="category-card-text">
          Add category
        </p>
        {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
        <input className="category-card-input" type="text" value={cardTitle} onChange={handleChangeName} />
      </div>
      <button className="btn btn-accent" type="button" onClick={handleEditCategory}>Add</button>
    </article>
  );
}

export default AddCategory;
