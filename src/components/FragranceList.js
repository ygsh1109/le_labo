import React, { useEffect, useState } from 'react'
import styles from './css/fragrancelist.module.css'
import axios from 'axios'
import useFragrance from '../hooks/useFragrance'
import { useLocation, useNavigate } from 'react-router-dom'
import regExp from '../util/regExp'


export default function FragranceList() {


  
  const [fragrance] = useFragrance()


  const category = [

    {index:0, name:'전체'}, 
    {index:1, name:'오드퍼퓸'}, 
    {index:2, name:'리퀴드밤'}, 
    {index:3, name:'트래블튜브'}
    
  ]


  const [selectCategory, setSelectCategory] = useState(category[0].name)  //선택하는 카테고리
 
  const [selectCategoryItems, setSelectCategoryItems] = useState([])  //선택한 카테고리에 해당하는 상품 배열 불러올 공간


  useEffect(()=>{
    if(selectCategory==='전체'){
      setSelectCategoryItems(fragrance) //선택한 카테고리가 '전체'일 경우 fragrance 데이터 전체를 불러온다.
    }else{
      const categoryItems=fragrance.filter((item)=>(item.category===selectCategory))
      setSelectCategoryItems(categoryItems)   //categoryItems객체는 fragrance데이터 내에서 선택된 카테고리와 데이터 내 
                                              //카테고리가 일치하는 것만 불러오고 그걸 setSelectCategoryItems에 반영
    }
 },[selectCategory,fragrance])
  


  //  useEffect(()=>{
  //   const categoryItems = selectCategory === '전체'
  
  //   ? fragrance

  //   : fragrance.filter((item) => item.category === selectCategory);
  
  // setSelectCategoryItems(categoryItems);

  //   },[selectCategory,fragrance])




 // https://velog.io/@yunsungyang-omc/JS-%EC%82%BC%ED%95%AD-%EC%97%B0%EC%82%B0%EC%9E%90ifelse%EB%AC%B8%EA%B3%BC-%EC%B0%A8%EC%9D%B4
//  삼항 연산자는 조건에 대한 결과 값을 바로 변수에 할당할 수 있다. if문의 경우에는 변수에 바로 할당할 수 없고 조건식 안에서 할당처리를 해줘야 한다.
// 함수 내에서 if문을 활용할 경우 상황에 따라 return문을 매번 작성해줘야 하는 경우가 있다. 반면, 삼항연산자는 결괏값을 바로 할당할 수 있기 때문에, return문을 하나만 작성해도 충분히코드를 완성할 수 있다.
// 이러한 부분에서는 할당연산자가 if문보다는 좀 더 효율적인 장점이라고 볼 수 있다.

  const navigate = useNavigate()


  const { search } = useLocation();  

  useEffect(() => { // 메인에서 선택한 카테고리 보여줌 
    if (search) {
      const ct = decodeURIComponent(new URLSearchParams(search).get('category')) 
      // serch 전체값을 받아와서 category 속성값만 얻어내는 약속된 객체함수 
      if (ct) {  //decodeURIComponent > 문자도 읽을 수 있게끔 바꿔줌
        setSelectCategory(ct);
      }
    }
  }, [search])
  

  return (
    <>
    <div className={styles.fragrance_wrap}>  
      <div id={styles.fragrance_contents}>

        <div id={styles.fragrance_category}>

          <h3 className={styles.fragrance_category_title}>FRAGRANCE 프래그런스</h3>
          
          <ul id={styles.fragrance_filter_menu}>        

           {
             category.map((item,index)=>(<li key={item.index} 
              onClick={()=>{
               setSelectCategory(item.name)
             }}
             className={selectCategory === item.name ? styles.selected : ''}
             >{item.name}</li>))
           }


            {/* <li>오드퍼퓸</li>
            <li>리퀴드밤</li>
            <li>트래블튜브</li>        */}
            
          </ul>

        </div>

          <ul id={styles.fragrance_product_list}>   

            {
              selectCategoryItems.map((item)=>(
                <li onClick={()=>{
                  navigate(`/fragrance/${item.id}`)
                }}>
                  <div className={styles.fragrance_product_img}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={styles.fragrance_product_text}>
                    <p className={styles.fragrance_product_name}>
                      {item.name}
                    </p>   
                    <p className={styles.fragrance_product_category}>
                    {item.category}
                    </p>
                    <p className={styles.fragrance_product_price}>
                      <span>￦</span> {regExp.comma(item.price)}

                      
                    </p>    
                  </div>
              </li>
              ))
            }       
            
          </ul>
        </div>
      </div>

  </>
  )
}
