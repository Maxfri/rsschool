import React, { useState } from 'react';
import CardsData from '../cards/CardsData';

function AddCategory({ category, setCategory }): JSX.Element {
  const [card, setCard] = useState('');
  const handleChangeName = (e) => {
    console.log(e);
    setCard(e.target.value);
  };
  // console.log(category);

  const handleEditCategory = () => {
    setCategory([...category, { title: card }]);
    console.log(category);
  };
  return (
    <article
      className="category"
    >
      <div className="category-body">
        <p className="category-text">
          Add category
        </p>
        {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
        <input className="category-input" type="text" value={card} onChange={handleChangeName} />
      </div>
      <button className="btn btn-accent" type="button" onClick={handleEditCategory}>Add</button>
    </article>
  );
}

export default AddCategory;
