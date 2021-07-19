import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './category.css';

function Category({ category, history }: any): JSX.Element {
  return (
    <article
      key={category}
      className="category"
      onClick={() => history.push(`category/${category.id}`)}
    >
      <img className="img" src={category.image} alt="Category" />
      <div className="category-body">
        <p className="category-text">
          {category.title}
        </p>
      </div>
    </article>
  // <Link
  //   to={{
  //     pathname: `/category${category.id}`,
  //     // state: { data: category.id },
  //   }}
  //   key={category.id}
  // >
  //   <article
  //     key={category}
  //     className="category"
  //   >
  //     <img className="img" src={category.image} alt="Category" />
  //     <div className="category-body">
  //       <p className="category-text">
  //         {category.title}
  //       </p>
  //     </div>
  //   </article>
  // </Link>
  );
}

export default withRouter(Category);
