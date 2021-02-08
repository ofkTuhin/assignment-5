
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(res=>res.json())
.then(data=>geatMeal(data))

const geatMeal=mealItem=>{
  mealItems=mealItem.meals
  const foods=document.getElementById('foods')

  for(let i=0;i<mealItems.length;i++){

       const foodItem=mealItems[i] 
      
    

         const foodinfo=`
        
        <img src="${foodItem .strMealThumb}">
        <h5>${foodItem .strMeal}</h5>
         
         `
  
         
  
  
         const foodDetail=document.createElement('div')
     foods.appendChild(foodDetail)
     foodDetail.innerHTML=foodinfo
      
          foods.className="foods"
          foodDetail.className='foodDetail'

          document.getElementById('submit').addEventListener('click',function(){
            const food=document.getElementById('food').value
           
          if(food==foodItem.strMeal)
          
            {
             
             foodDetail.style.display='block'
           }
           else{

            document.getElementById('erormsg').style.display='block'

        
           }
           document.getElementById('food').value=''
           foodDetail.addEventListener('click',function(){

            fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then(res=>res.json())
.then(data=>
  {

    const x=data.meals
    const y=x[0]
    console.log(y.strIngredient1)
     const foods=document.getElementById('foods')
            foodDetail.style.display='none'
             const itemdes= document.createElement('div')
             foods.appendChild(itemdes)
             itemdes.className='itemdes'
             itemdes.style.display='block'

             const itemInfo=`
            <img src="${foodItem.strMealThumb}">
            <h2>${y.strArea}</h2>
            <h3>${y.idMeal}</h3>
            <h5>${y.strIngredient1}</h5>
            <h5>${y.strIngredient2}</h5>
            <h5>${y.strIngredient3}</h5>
            <h5>${y.strIngredient4}</h5>
            <h5>${y.strIngredient5}</h5>
            <h5>${y.strIngredient6}</h5>
            <h5>${y.strIngredient7}</h5>
            <h5>${y.strIngredient8}</h5>
            <h5>${y.strIngredient9}</h5>
            

             
             `
             itemdes.innerHTML=itemInfo
  })
        
 })
 
   })
      
  };

}

 

  
   
  

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
.then(res=>res.json())
.then(data=>console.log(data))

fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
.then(res=>res.json())
.then(data=>console.log(data))