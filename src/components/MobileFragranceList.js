import React, { useEffect, useState } from 'react'
import styles from './css/mobilefragrancelist.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useFragrance from '../hooks/useFragrance'

export default function MobileFragranceList() {

    const [fragrance] = useFragrance()

    const category = [
      {index:0, name:'전체'},
      {index:1, name:'오드퍼퓸'},
      {index:2, name:'리퀴드밤'},
      {index:3, name:'트래블튜브'}
    ]

    const [selectCategory, setSelectCategory] = useState(category[0].name)

    const [selectCategoryItems, setSelectCategoryItems] = useState([])


    useEffect(()=>{

      if(selectCategory==='전체'){
        setSelectCategoryItems(fragrance)
      }else{
        const CagetoryItems=fragrance.filter((item)=>(item.category===selectCategory))
        setSelectCategoryItems(CagetoryItems)
      }

    },[selectCategory, fragrance])


    const navigate = useNavigate()

    const {search} = useLocation()

    useEffect(() => { // 메인에서 선택한 카테고리 보여줌 
      if (search) {
        const category = decodeURIComponent(new URLSearchParams(search).get('category')) 
        // search 전체값을 받아와서 category 속성값만 얻어내는 약속된 객체함수 
        if (category) {
          setSelectCategory(category);
        }
      }
    }, [search])




  return (
    
    <>
    
      <div id={styles.mobile_fragrance_list_wrap}>

        <ul id={styles.mobile_fragrance_category_list}>          

          {
            
            category.map((item)=>(<li key={item.index}
              onClick={()=>{
                setSelectCategory(item.index)
              }}
              className={selectCategory === item.name ? styles.selected : ''}
            
            >{item.name}</li>))


          }

          {/* <li>전체</li>
          <li>오 드 퍼퓸</li>
          <li>리퀴드 밤</li>
          <li>트래블 튜브</li> */}
        </ul>

        <ul id={styles.mobile_fragrance_list}>

          {
            selectCategoryItems.map((item)=>(
              <li onClick={()=>{
                navigate(`/mobilefragrance/${item.id}`)
              }}>
                <div className={styles.mobile_fragrance_list_img}><img src={item.image}/></div>
                <p className={styles.mobile_fragrance_list_name}>{item.name}</p>  
                <p className={styles.mobile_fragrance_list_category}>{item.category}</p> 
                <p className={styles.mobile_fragrance_list_price}>￦{item.price}</p>
              </li>
            ))

          }


          {/* <li>
            <div className={styles.mobile_fragrance_list_img}><img src='/images/fragrance/santal33_perfume_100ml_01.jpg'/></div>
            <p className={styles.mobile_fragrance_list_name}>SANTAL 33 PERFUME 50ML</p>  
            <p className={styles.mobile_fragrance_list_category}>오 드 퍼퓸</p> 
            <p className={styles.mobile_fragrance_list_price}>￦ 310,000</p>
          </li>

          <li>
            <div className={styles.mobile_fragrance_list_img}><img src='/images/fragrance/santal33_perfume_500ml_01.jpg'/></div>
            <p className={styles.mobile_fragrance_list_name}>SANTAL 33 PERFUME 50ML</p>  
            <p className={styles.mobile_fragrance_list_category}>오 드 퍼퓸</p> 
            <p className={styles.mobile_fragrance_list_price}>￦ 310,000</p>
          </li>

          <li>
            <div className={styles.mobile_fragrance_list_img}><img src='/images/fragrance/santal33_perfume_15ml_01.jpg'/></div>
            <p className={styles.mobile_fragrance_list_name}>SANTAL 33 PERFUME 50ML</p>  
            <p className={styles.mobile_fragrance_list_category}>오 드 퍼퓸</p> 
            <p className={styles.mobile_fragrance_list_price}>￦ 310,000</p>
          </li>

          <li>
            <div className={styles.mobile_fragrance_list_img}><img src='/images/fragrance/santal33_perfume_15ml_01.jpg'/></div>
            <p className={styles.mobile_fragrance_list_name}>SANTAL 33 PERFUME 50ML</p>  
            <p className={styles.mobile_fragrance_list_category}>오 드 퍼퓸</p> 
            <p className={styles.mobile_fragrance_list_price}>￦ 310,000</p>
          </li>

          <li>
            <div className={styles.mobile_fragrance_list_img}><img src='/images/fragrance/santal33_perfume_15ml_01.jpg'/></div>
            <p className={styles.mobile_fragrance_list_name}>SANTAL 33 PERFUME 50ML</p>  
            <p className={styles.mobile_fragrance_list_category}>오 드 퍼퓸</p> 
            <p className={styles.mobile_fragrance_list_price}>￦ 310,000</p>
          </li> */}

        </ul>

      </div>

    </>

  )
}


