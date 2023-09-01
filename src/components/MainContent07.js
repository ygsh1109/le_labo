import React, { useEffect, useState } from 'react'
import styles from './css/maincontent.module.css'
import useIngredient from '../hooks/useIngredient';

export default function MainContent07() {
  
  
  const [ingredient] = useIngredient()

  const ingredientCategory=[
    {index:0, name:"SANDAL WOOD"},
    {index:1, name:"BLACK TEA LEAVES"},
    {index:2, name:"ROSE CENTIFOLIA"},
    {index:3, name:"BERGAMOT"},
    {index:4, name:"TONKA BEAN"}
  ]
 

  
  const [selectIngredient, setSelectIngredient] = useState(ingredientCategory[0].name);
  const [selectIngredientItem, setSelectIngredientItem] = useState([]);

  useEffect(()=>{
    
      const ingredientItem=ingredient.filter((item)=>(item.name===selectIngredient))
      setSelectIngredientItem(ingredientItem)  

     // ingredientItem객체는 ingredient데이터 내에서 선택된 카테고리와 데이터 내 name이 일치하는 것만 불러오고 그걸 setSelectIngredientItem에 반영
  
    
 },[selectIngredient, ingredient])

console.log(ingredient)


  return (
    <div className={styles.wrap07}>

      
      <div id={styles.content07ingredient}>

       <ul id={styles.content07ingredient_list_tab}>

       <p className={styles.content07title}>INGREDIENT</p>

            {
             ingredientCategory.map((item)=>(<li key={item.index} 
              onMouseOver={()=>{
               setSelectIngredient(item.name)
             }}
             className={selectIngredient === item.name ? styles.selected : ''}
             >{item.name}</li>))
             
           }

       </ul>

       <ul id={styles.content07ingredient_product}>

       {
          selectIngredientItem.map((item) => (
                <li key={item.name}>
                  <p className={styles.content07ingredient_img}>
                    <img src={item.image} alt={item.name} />
                  </p>
                  <p className={styles.content07ingredient_title}>{item.name}</p>
                  <p className={styles.content07ingredient_text}>{item.detail}</p>
                </li>
              ))
        }



       </ul>
      </div>
    </div>
  )
}
