import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './categoryAdmin.css';

function CategoryAdmin({ category, history, allCategories, setAllCategories }: any): JSX.Element {

  const removeCategory = (e) => {
    let array = [...allCategories]; 
    let index = array.indexOf(category);
    if (index !== -1) {
      array.splice(index, 1);
      setAllCategories(array);
    }
  }
  return (
    <article
      key={category}
      className="category-card"
    // onClick={() => history.push(`category/${category.id}/word`)}
    // onKeyDown={() => history.push(`category/${category.id}`)}
    // role="presentation"
    >
      <button type="button" className="category-card-close" aria-label="Close"  onClick={removeCategory}>
        <img className="category-card-img-close" src="../src/assets/img/x_mark.png" alt="X" />
      </button>
      <img className="category-card-img" src={category.image ? category.image : '../src/assets/img/default_category.png'} alt="Category" />
      <div className="category-card-body">
        <h3>{category.title}</h3>
        <p className="category-card-text"> 
          WORDS: 8
        </p>
        <div className="category-card-buttons">
          <button type="button" className="btn btn-outline-success">Update</button>
          <button type="button" className="btn btn-outline-success">Add Words</button>
        </div>
      </div>
    </article>
  );
}

export default withRouter(CategoryAdmin);
