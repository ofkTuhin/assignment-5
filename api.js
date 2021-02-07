
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

   foodDetail.addEventListener('click',function(){
    foodDetail.style.display='none'
     const itemdes= document.createElement('div')
     foods.appendChild(itemdes)
     itemdes.className='itemdes'

     const itempic=document.createElement('img')
     itempic.src=foodItem.strMealThumb
     itemdes.appendChild(itempic)

     const itemid=document.createElement('h4')
     itemid.innerText=foodItem.idMeal
     itemdes.appendChild(itemid)


     const itemName=document.createElement('h5')
     itemName.innerText='name: '+foodItem.strMeal
     itemdes.appendChild(itemName)

    


   })


   document.getElementById('submit').addEventListener('click',function(){
    const food=document.getElementById('food').value
   if(food==foodItem.strMeal)
   {
     foodDetail.style.display='block'
   }
   else{

   }
  })


 }
      
  };

  // document.getElementById('submit').addEventListener('click',function(){
  //   const food=document.getElementById('food').value
  //  if(food=data.meals.strMeal)
   
  // })


  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(res=>res.json())
.then(data=>console.log(data))
fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
.then(res=>res.json())
.then(data=>console.log(data))





  

