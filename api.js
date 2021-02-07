
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(res=>res.json())
.then(data=>geatMeal(data))

const geatMeal=mealItem=>{
  const mealItems=mealItem.meals
 for(let i=0;i<mealItems.length;i++){

    const foodItem=mealItems[i]
   const ul=document.getElementById('ul')
   const li=document.createElement('li')
   li.innerText=foodItem.strMeal
   ul.appendChild(li)


 }
      
  };


  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(res=>res.json())
.then(data=>console.log(data))


