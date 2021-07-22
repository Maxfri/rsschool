import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import './category.css';

function CategoryAdmin({ category, history }: any): JSX.Element {
  return (
    <article
      key={category}
      className="category"
    // onClick={() => history.push(`category/${category.id}`)}
    // onKeyDown={() => history.push(`category/${category.id}`)}
    // role="presentation"
    >
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">?</span>
      </button>
      <img className="img" src={category.image ? category.image : '../src/assets/img/swim.jpg'} alt="Category" />
      <div className="category-body">
        <p className="category-text">
          {category.title}
          <p>WORDS: 8</p>
        </p>
        <div className="buttons">
          <button type="button" className="btn btn-outline-success">Update</button>
          <button type="button" className="btn btn-outline-success">Words</button>
        </div>
      </div>
    </article>
  );
}

export default withRouter(CategoryAdmin);
