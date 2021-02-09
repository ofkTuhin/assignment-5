
document.getElementById('submit').addEventListener('click',function(){
  const food=document.getElementById('food').value
  if(food==''){
    document.getElementById('meals').style.display='none'
    document.getElementById('erormsg').style.display='block'
  }
  

 else{
  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+food+'')
  .then(res=>res.json())
  .then(data=>getMeal(data))
  const getMeal=mealItem=>{
    const mealItems=mealItem.meals
   
    const foods=document.getElementById('foods')
    
    mealItems.forEach(foodItem  => {
      
    
  
     

        const foodinfo=`
       
       <img src="${foodItem .strMealThumb}">
       <h5>${foodItem .strMeal}</h5>
        
        `
  
        const foodDetail=document.createElement('div')
    foods.appendChild(foodDetail)
    foodDetail.innerHTML=foodinfo
     
         foods.className="foods"
         foodDetail.className='foodDetail'
        if (food=='') {
          foodDetail.style.display='none'
          
        }
          foodDetail.style.display='block'
          foodDetail.addEventListener('click',function(){
            foodDetail.style.display='none'
            
  
            const foods=document.getElementById('foods')
                  
                    const itemdes= document.createElement('div')
                    foods.appendChild(itemdes)
                    itemdes.className='itemdes'
                    itemdes.style.display='block'
         
                    const itemInfo=`
                   <img src="${foodItem.strMealThumb}">
                   <h2>Street :${foodItem.strArea}</h2>
                   <h3>id :${foodItem.idMeal}</h3>
                   <h5>${foodItem.strIngredient1} : ${foodItem.strMeasure1}</h5>
                   <h5>${foodItem.strIngredient2} : ${foodItem.strMeasure2}</h5>
                   <h5>${foodItem.strIngredient3} : ${foodItem.strMeasure3}</h5>
                   <h5>${foodItem.strIngredient4} : ${foodItem.strMeasure4}</h5>
                   <h5>${foodItem.strIngredient5} : ${foodItem.strMeasure5}</h5>
                   <h5>${foodItem.strIngredient6} : ${foodItem.strMeasure6}</h5>
                   <h5>${foodItem.strIngredient7} : ${foodItem.strMeasure7}</h5>
                   <h5>${foodItem.strIngredient8} : ${foodItem.strMeasure8}</h5>
                   <h5>${foodItem.strIngredient9} : ${foodItem.strMeasure9}</h5>
                  
                    `
                    itemdes.innerHTML=itemInfo
         })
           
         
         


     
 
  document.getElementById('food').value=''

 
  

  });
  }
 }
})
 
 

  
   
  


