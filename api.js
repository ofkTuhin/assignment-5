
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(res=>res.json())
.then(data=>geatMeal(data))

const geatMeal=mealItem=>{
  const mealItems=mealItem.meals
 for(let i=0;i<mealItems.length;i++){

    const foodItem=mealItems[i]
   const foods=document.getElementById('foods')

    foods.className="foods"

   const foodDetail=document.createElement('div')
   foods.appendChild(foodDetail)
   foodDetail.className='foodDetail'


   const itemImg=document.createElement('img')
   itemImg.src=foodItem.strMealThumb
   foodDetail.appendChild(itemImg)

  //  foodDetail.innerHTML=foodItem.strMeal
   const itemDetail=document.createElement('h5')
   itemDetail.innerText=foodItem.strMeal
   foodDetail.appendChild(itemDetail)

   


  


 }
      
  };

  document.getElementById('submit').addEventListener('click',function(){
   const meal=document.getElementById('mealDiv')
   meal.style.display='block'
  })


  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(res=>res.json())
.then(data=>console.log(data))


