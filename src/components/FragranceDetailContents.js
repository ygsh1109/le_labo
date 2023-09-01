import React, { useEffect, useState } from 'react'
import styles from './css/fragrancedetailcontents.module.css'
import { useParams } from 'react-router-dom'
//import useFragrance from '../hooks/useFragrance'
import { getProductDetail } from '../api/firebase'
import { set } from 'firebase/database'
import regExp from '../util/regExp'

export default function FragranceDetailContents() {

  
  //const [fragrance] = useFragrance()

  //console.log(fragrance)

  const {productId} = useParams()

  // //console.log(productId)

  // console.log(fragrance)

  
  const [selectedProduct, setSelectedProduct] = useState({})    //{} : 객체, [] : 배열
  const [subImages, setSubImages] = useState([])
  const [productDetail, setProductDetail] = useState({})

  const [selectedQuantity, setSelectedQuantity] = useState(1); // Default quantity

  
  // fragrance.json에서 가져올 경우

    // useEffect(() => {
      
    //   const findProduct = fragrance.find((item) => item.id === productId);

    //   if (findProduct) {

    //     setSelectedProduct(findProduct);
    //     setSubImages(findProduct.subimg)      
    //     //console.log('subImages', subImages)

    //   }

    //   window.scrollTo(0, 0);
    // }, [fragrance, productId]);



    useEffect(() => {
      
      getProductDetail(productId).then((res)=>{

        setSelectedProduct(res)
        setSubImages(res.subimg)
        setProductDetail(res.detail)

      })

      window.scrollTo(0, 0);
    }, [productId]);


    
    
    // 수량 증가에 따른 가격 변경
    const totalPrice = selectedProduct.price * selectedQuantity;
  
    // 수량 선택
    const handleQuantityChange = (event) => {
      setSelectedQuantity(parseInt(event.target.value, 10)); 
    };
    

  return (
    <>

    <div id={styles.fragrance_product_detail_top}></div>

    <div id={styles.fragrance_product_title_wrap}>
      <div className={styles.fragrance_product_title}>
        <p>프래그런스 - {selectedProduct.category} - {selectedProduct.name}</p>
      </div>
    </div>


    <div className={styles.fragrance_product_detail_wrap}>

    <ul className={styles.product_img}>

     
      {subImages.map((item) => (
        
                <li onClick={()=> setSelectedProduct({...selectedProduct, image : item.img })}>

                  <img src={item.img}/>
                  
                </li>
                
              ))} 
        

    </ul>



      <div className={styles.product_single_img}>


        <img src={selectedProduct.image || selectedProduct.image}/>

      </div>

      <div className={styles.product_single_side}>   
        
          <p id={styles.product_category}>{selectedProduct.category}</p>
          <p id={styles.product_name}>{selectedProduct.name}</p>




      {/* 수량 선택 */}
      <div className={styles.quanity}>
        <form>
          <label htmlFor="quanity"> 수량 </label>
          <select
            id="quanitys"
            name="quanity"
            value={selectedQuantity}
            onChange={handleQuantityChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </form>
      </div>

      {/* Total price */}
      <div className={styles.product_price}>
        <p>
          <span>￦</span> {regExp.comma(totalPrice)}
        </p>
      </div>
       

      <div className={styles.button}>
        <button id={styles.cart}>장바구니 담기</button>
        <button id={styles.pay}>구매하기</button>
      </div>

        <div className={styles.product_detail}>

          <p id={styles.product_detail}>
              {selectedProduct.detail}
          </p>

          <p id={styles.product_return}>
          *퍼스널 라벨링 제품의 경우 교환. 환불 불가<br/>
          *구매 시 라벨 문구를 입력하지 않으시면, 기본 문구 &#39;You&#39;가 인쇄되어 발송됩니다.
          </p>
        </div>
      </div>
    </div>   

      <div className={styles.detail_information_wrap}>
        <div id={styles.detail_information}>
          <p className={styles.information_title}>사용방법</p>
          <p className={styles.information_text}>
          맥박이 뛰는 곳에 뿌려줍니다. (손목, 귀 뒤 등) 단독으로 사용하거나, 같은 라인의 바디 제품과 함께 사용할 수 있습니다.
          </p>
        </div>    
        
        <div id={styles.detail_information}>
          <p className={styles.information_title}>전 성분</p>
          <p className={styles.information_text}>
          변성알코올,향료,정제수,리모넨,유제놀,리날룰,시트로넬올, 제라니올,벤질알코올,시트랄,파네솔,아이소유제놀,비에이치티,다이라우릴티오다이프로피오네이트 [ILN47504]
          제공된 성분은 동일 제품이라도 경우에 따라 변경될 수 있습니다. 최신정보는 제품 포장의 성분을 참고하시거나 본사 고객관리지원팀으로 연락 부탁 드립니다.
          </p>
        </div>    

        <div id={styles.detail_information}>
          <p className={styles.information_title}>추가정보</p>
          <p className={styles.information_text}>
          사용기한 &#58; 제품 별도 표기 <br/>
          책임판매업자 &#58; 이엘씨에이한국(유)<br/>
          제조국 &#58; 미국
          </p>
        </div>   

        <div id={styles.detail_information}>
          <p className={styles.information_title}>주의사항</p>
          <p className={styles.information_text}>
          1. 화장품 사용 시 또는 사용 후 직사광선에 의하여 사용부위가 붉은 반점, 부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우에는 전문의 등과 상담할 것<br/>
          2. 상처가 있는 부위 등에는 사용을 자제할 것<br/>
          3. 눈에 들어가지 않도록 주의할 것<br/>
          4. 보관 및 취급 시 주의사항<br/>
          1&#41; 어린이의 손이 닿지 않는 곳에 보관할 것<br/>
          2&#41; 직사광선을 피해서 보관할 것.기타 제품 특이적인 주의사항은 제품 포장 참조
          </p>
        </div>   
         
      </div>

      {/* <div className={styles.product_contents05}>
        <p>나에게 맞는 추천 제품</p>
        <ul id={styles.product_suggestion}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div> */}

    
    </>
  ) 
 
}

