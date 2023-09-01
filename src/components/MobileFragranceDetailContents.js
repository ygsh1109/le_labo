import React, { useEffect, useState } from 'react'
import styles from './css/mobilefragrancedetailcontents.module.css'
import { useParams } from 'react-router-dom'
//import useFragrance from '../hooks/useFragrance'
import { getProductDetail } from '../api/firebase'


// import React, { useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
// import required modules

import { Scrollbar } from 'swiper/modules';
import './css/mobiledetailslide.css'


export default function MobileFragranceDetailContents() {


  const {productId} = useParams()

  //console.log(productId)

  const [selectProduct, setSelectProduct] = useState({})



 // const [fragrance] = useFragrance()


  useEffect(()=>{


    //const filteredItem=fragrance.find((item)=>(item.id===productId))
    //console.log('filteredItem', filteredItem)

    // if(filteredItem){

      
    //   setSelectProduct(filteredItem)
    // }

    getProductDetail(productId).then((res)=>{

      setSelectProduct(res)
     
    })


    console.log('selectProduct', selectProduct)

    window.scrollTo(0, 0);

  }, [productId]) 




  return (
    <>
    
    <div id={styles.mobile_fragrance_product_title_wrap}>
      <div className={styles.mobile_fragrance_product_title}>
        <p>프래그런스 - {selectProduct.category} - {selectProduct.name}</p>
      </div>
    </div>
    
    <div className={styles.mobile_fragrance_product_detail_img}>


    {
    selectProduct.subimg && (
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"

          // spaceBetween={10} // 슬라이드 간의 간격을 필요에 맞게 조정하세요
        // slidesPerView={1} // 한 번에 보여질 슬라이드 수를 필요에 맞게 조정하세요   

        >

          {
          selectProduct.subimg.map((subImage, index) => (

            <SwiperSlide key={index}>
              <img src={subImage.img} alt={`Subimage ${index}`} />
            </SwiperSlide>

          ))}

        </Swiper>
      )}

      {/* selectProduct 값을 사용할 때, 해당 값이 정의되어 있는지를 확인하고 사용
      {selectProduct.subimg && ...}로 감싸서 selectProduct.subimg가 정의되었을 때에만 Swiper 컴포넌트를 렌더링하도록 했습니다.
      이렇게 하면 selectProduct.subimg가 아직 정의되지 않았을 때에는 컴포넌트가 렌더링되지 않으므로 에러를 방지할 수 있습니다.  
      
      조건부 렌더링을 하지 않으면 데이터가 아직 준비되지 않은 상태에서 해당 데이터를 사용하려고 할 때 오류가 발생할 수 있습니다. 
      특히 비동기적으로 데이터를 가져오는 경우, 데이터가 아직 불러와지지 않았는데 
      해당 데이터를 사용하려고 하면 "Cannot read properties of undefined"와 같은 오류가 발생할 수 있습니다.

    조건부 렌더링을 사용하면 데이터가 준비되지 않았을 때 해당 컴포넌트나 엘리먼트를 렌더링하지 않으므로 오류를 방지할 수 있습니다. 
    이는 사용자 경험을 향상시키고 애플리케이션의 안정성을 확보하기 위해 중요한 접근 방식입니다.

    예를 들어, 위에서 제공한 코드에서 selectProduct.subimg를 사용하는 부분에 조건부 렌더링을 하지 않는다면 selectProduct.subimg가 
    아직 데이터를 가져오지 못했을 때 페이지가 로드될 때 오류가 발생할 수 있습니다. 이를 방지하려면 selectProduct.subimg가 정의되었을 
    때에만 관련 코드를 실행하도록 해야합니다.*/}

    </div>

    <div className={styles.mobile_product_single_side}>
      <p id={styles.mobile_product_name}>{selectProduct.name}</p>
      <p id={styles.mobile_product_category}>{selectProduct.category}</p>


      {/* 수량 선택 */}
      <div className={styles.mobile_quanity}>
        <form>
          <label htmlFor="quanity"> 수량 </label>
          <select
            id="quanitys"
            name="quanity"
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

      {/* 총 가격 */}
      <div className={styles.mobile_product_price}>
        <p>
          <span>￦</span>{selectProduct.price}
        </p>
      </div>
      
    </div>


    

    <div className={styles.mobile_pay_button}>
        <button id={styles.mobile_cart}>장바구니 담기</button>
        <button id={styles.mobile_pay}>구매하기</button>
    </div>


    <div className={styles.mobile_product_detail}>

          <p id={styles.mobile_product_return}>
          *퍼스널 라벨링 제품의 경우 교환. 환불 불가<br/>
          *구매 시 라벨 문구를 입력하지 않으시면, 기본 문구 &#39;You&#39;가 인쇄되어 발송됩니다.
          </p>

          <p id={styles.mobile_product_detail}>THÉ NOIR 29는 블랙 티 잎의 우아하고 아름다운 향에 바치는 찬가와도 같은 향수입니다.
          베르가못, 무화과, 월계수잎의 밝은 느낌과, 시더우드, 베티버, 머스크의 다크함이 어우러져 깊이 
          있으면서 산뜻하고, 부드러우면서도 강한 반전 매력을 갖고 있습니다. 

          르 라보만의 특별한 비법으로 추출한 블랙 티 향이 온몸을 감싸줍니다. 드라이한 나뭇잎과 건초향,
          토바코의 쌉싸래한 향으로 센슈얼하고 중독적인 잔향을 남깁니다.</p>



      <ul className={styles.mobile_product_information}>

        <li>
            <p className={styles.mobile_product_information_title}>사용방법</p>
            <p className={styles.mobile_product_information_text}>
            맥박이 뛰는 곳에 뿌려줍니다. (손목, 귀 뒤 등) 단독으로 사용하거나, 같은 라인의 바디 제품과 함께 사용할 수 있습니다.
            </p>
        </li>
        <li>
            <p className={styles.mobile_product_information_title}>전 성분</p>
            <p className={styles.mobile_product_information_text}>
            변성알코올,향료,정제수,리모넨,유제놀,리날룰,시트로넬올, 제라니올,벤질알코올,시트랄,파네솔,아이소유제놀,비에이치티,다이라우릴티오다이프로피오네이트 [ILN47504]
            제공된 성분은 동일 제품이라도 경우에 따라 변경될 수 있습니다. 최신정보는 제품 포장의 성분을 참고하시거나 본사 고객관리지원팀으로 연락 부탁 드립니다.
            </p>        
        </li>
        <li>
            <p className={styles.mobile_product_information_title}>추가정보</p>
            <p className={styles.mobile_product_information_text}>
            사용기한 &#58; 제품 별도 표기<br/>
            책임판매업자 &#58; 이엘씨에이한국(유)<br/>
            제조국 &#58; 미국
            </p>
        </li>
        <li>
            <p className={styles.mobile_product_information_title}>주의사항</p>
            <p className={styles.mobile_product_information_text}>
            1. 화장품 사용 시 또는 사용 후 직사광선에 의하여 사용부위가 붉은 반점, 부어오름 또는 가려움증 등의 이상 증상이나 부작용이 있는 경우에는 전문의 등과 상담할 것<br/>
            2. 상처가 있는 부위 등에는 사용을 자제할 것<br/>
            3. 눈에 들어가지 않도록 주의할 것<br/>
            4. 보관 및 취급 시 주의사항<br/>
            1&#41; 어린이의 손이 닿지 않는 곳에 보관할 것<br/>
            2&#41; 직사광선을 피해서 보관할 것.기타 제품 특이적인 주의사항은 제품 포장 참조
            </p>
        </li>
      </ul>
         

    </div>

    
    
         
         



    
    
    </>
  )
}
