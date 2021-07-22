import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './categoryAdmin.css';

function CategoryAdmin({ category, history, allCategories, setAllCategories }: any): JSX.Element {
  const [cardTitle, setCardTitle] = useState(category.title);
  const [updateMode, setUpdateMode] = useState(false);

  const handleRemoveCategory = (e) => {
    let array = [...allCategories];
    let index = array.indexOf(category);
    if (index !== -1) {
      array.splice(index, 1);
      setAllCategories(array);
    }
  }
  const handleUpdate = (e) => {
    console.log(category.title);
    setUpdateMode(true);
  }

  const handleChangeName = (e) => {
    setCardTitle(e.target.value);
  };

  const handleSaveUpdate = () => {
    setCardTitle(cardTitle);
    setUpdateMode(false);
  }

  return (
    <article
      key={category}
      className="category-card"
    // onClick={() => history.push(`category/${category.id}/word`)}
    // onKeyDown={() => history.push(`category/${category.id}`)}
    // role="presentation"
    >
      <button type="button" className="category-card-close" aria-label="Close" onClick={handleRemoveCategory}>
        <img className="category-card-img-close" src="../src/assets/img/x_mark.png" alt="X" />
      </button>
      <img className="category-card-img" src={category.image ? category.image : '../src/assets/img/default_category.png'} alt="Category" />
      <div className="category-card-body">
        {
          updateMode
            ?
            <input className="category-card-input" type="text" value={cardTitle} onChange={handleChangeName} />
            :
            <h3>{cardTitle}</h3>
        }
        <p className="category-card-text">
          WORDS: 8
        </p>
        <div className="category-card-buttons">
        {
          updateMode
            ?
            <button type="button" className="btn category-card-btn" onClick={handleSaveUpdate}>Save</button>
            :
            <button type="button" className="btn category-card-btn" onClick={handleUpdate}>Update</button>
        }
          
          <button type="button" className="btn category-card-btn">Add Words</button>
        </div>
      </div>
    </article>
  );
}

export default withRouter(CategoryAdmin);
