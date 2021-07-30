import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Category } from '../../interface/interface';
import './categoryAdmin.css';

interface Props extends RouteComponentProps {
  category: Category,
  allCategories: Category[],
  setAllCategories: React.Dispatch<React.SetStateAction<Category[]>>,
}
function CategoryAdmin({
  category, allCategories, setAllCategories,
}: Props): JSX.Element {
  const [cardTitle, setCardTitle] = useState(category.title);
  const [updateMode, setUpdateMode] = useState(false);

  const handleRemoveCategory = () => {
    const array = [...allCategories];
    const index = array.indexOf(category);
    if (index !== -1) {
      array.splice(index, 1);
      setAllCategories(array);
    }
  };
  const handleUpdate = () => {
    setUpdateMode(true);
  };

  const handleChangeName = (e) => {
    setCardTitle(e.target.value);
  };

  const handleSaveUpdate = () => {
    setCardTitle(cardTitle);
    setUpdateMode(false);
  };

  return (
    <article
      key={category.id}
      className="category-card"
    >
      <button type="button" className="category-card-close" aria-label="Close" onClick={handleRemoveCategory}>
        <img className="category-card-img-close" src="../src/assets/img/x_mark.png" alt="X" />
      </button>
      <img className="category-card-img" src={category.image ? category.image : '../src/assets/img/default_category.png'} alt="Category" />
      <div className="category-card-body">
        {
          updateMode
            ? <input className="category-card-input" type="text" value={cardTitle} onChange={handleChangeName} />
            : <h3>{cardTitle}</h3>
        }
        <p className="category-card-text">
          WORDS: 8
        </p>
        <div className="category-card-buttons">
          {
          updateMode
            ? <button type="button" className="btn category-card-btn" onClick={handleSaveUpdate}>Save</button>
            : <button type="button" className="btn category-card-btn" onClick={handleUpdate}>Update</button>
        }

          <button type="button" className="btn category-card-btn">Add Words</button>
        </div>
      </div>
    </article>
  );
}

export default withRouter(CategoryAdmin);
