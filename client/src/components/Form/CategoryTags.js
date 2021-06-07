import { useState } from "react"


export default function CategoryTags(props) {
  const {category, setCategory} = props;
  // helper functions to add and remove tags from category tags
  const addCategory = (event) => {
    if (event.key === "Enter" && event.target.value) {
      setCategory([...category, event.target.value]);
      event.target.value = "";
    } 
  };

  const removeCategory = (index) => {
    setCategory([...category.filter(tag => category.indexOf(tag) !== index)]);
  };
  
  const categoryTags = category.map((tag, index) => (
    <li key={index}>
        <span>{tag}</span>
        <span onClick={() => removeCategory(index)}>x</span>
    </li>
  ))

  return (
    <>
      <ul className="category-tags">
        {categoryTags}
      </ul>
      <input
        type="text"
        onKeyUp={event => addCategory(event)}
        placeholder="Press enter to add more category"
      />
    </> 
  );
}