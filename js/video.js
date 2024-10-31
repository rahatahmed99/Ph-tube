// fetch,load and show display categories

// create loadCategories
const loadCategories = () => {
  // fetch the data
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
}



// create displayCategories
const displayCategories = () => {

}



loadCategories();