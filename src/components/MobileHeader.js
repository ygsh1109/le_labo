import React, { useRef, useEffect, useState } from 'react'
import styles from './css/mobileheader.module.css'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap';
import { login, logout } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';



export default function MobileHeader() {

    const {user} = useAuthContext()

    const menuList=[
        {index:0, name:"르 라보 소개", pathName:'/mobileabout', subMenuList:[]},
        {index:1, name:"프래그런스", subMenuList:[
            {index:0, name:"전체", pathName:{ pathname: `/mobilefragrance`, search: `?${createSearchParams({ category: '전체' })}`} },
            {index:1, name:"오 드 퍼퓸", pathName:{ pathname: `/mobilefragrance`, search: `?${createSearchParams({ category: '오드퍼퓸' })}`} },
            {index:2, name:"리퀴드 밤", pathName:{ pathname: `/mobilefragrance`, search: `?${createSearchParams({ category: '리퀴드밤' })}`} },
            {index:3, name:"트래블 튜브", pathName:{ pathname: `/mobilefragrance`, search: `?${createSearchParams({ category: '트래블튜브' })}`}  }
        ]},

        {index:2, name:"바디/헤어/페이스", pathName:'/mobileface', subMenuList:[
            {index:0, name:"바디" },
            {index:1, name:"헤어" },
            {index:2, name:"페이스" }
        ]},

        {index:3, name:"라이프스타일", pathName:'/mobilelife', subMenuList:[
            {index:0, name:"클래식 캔들" },
            {index:1, name:"콘크리트 캔들" },
            {index:2, name:"홈 프래그런스" }
        ]},

        {index:4, name:"디스커버리", pathName:'/mobilediscovery', subMenuList:[]}
    ]


    const mobileMenu=useRef();
    const grayLayer=useRef();



    useEffect(()=>{
        grayLayer.current.style.display='none';
        mobileMenu.current.style.left='-60vw'
        mobileMenu.current.style.display='none'
    },[])

    const openMobileMenu=()=>{
      mobileMenu.current.style.display='block'
      grayLayer.current.style.display='block'
      gsap.to(mobileMenu.current, {left:0});
      gsap.set('body,html', {overflow:'hidden'})
    }

    const closeMobileMenu=()=>{     
      grayLayer.current.style.display='none'
      gsap.to(mobileMenu.current, {left:'-60vw', onComplete:()=>{
        gsap.set('body,html', {overflow:'visible'})
        mobileMenu.current.style.display='none'
      }})
    }



   const [activeIndex, setActiveIndex] = useState()

   const navigate = useNavigate()



  return (
    <>
            <header id={styles.mobile_header}>
                <h1 id={styles.logo}><Link to='/mobilemain'><img src='/images/logo_le-labo.png'/></Link></h1>

                <p className={styles.mobilemenu_icon} onClick={openMobileMenu} ><img src="/images/mobile_menu.png" alt="모바일메뉴"/></p>
                <p className={styles.mobile_basket}><img src="/images/icon_basket.png"/></p>
                <nav id={styles.mobilemenu} ref={mobileMenu} >                   
                    <div id={styles.mobilemenu_inner}>
                        <p>환영합니다.<br/>로그인 해주세요.
                            <span id={styles.mobile_close_btn} onClick={closeMobileMenu} ><img src="/images/close_btn.png" alt="닫기"/></span>
                        </p>
                        <ul id={styles.mobile_loginmenu}>

                        {
        
                            user ?   // user 객체값이 있을때 ( 로그인 일때 ) 

                            <li><button onClick={logout}>로그아웃</button></li>


                            :        // user 객체값이 없을때 ( 로그아웃 일때 ) 
                            
                            <li><button onClick={login}>로그인</button></li>

                        
                        }

                        <li>회원가입</li>

                            {/* <li>로그인</li>
                            <li>회원가입</li> */}

                        </ul>
                        <ul id={styles.mobilemenu_list}>

                           {
                       
                       
                       menuList.map((item)=>(
                                <li key={item.index} className={item.index===activeIndex && styles.selected} 
                                style={item.index===activeIndex ? {height:55+(55*item.subMenuList.length)} : {height:55}} 
                                onClick={()=>{             
                                                                                             
                                    setActiveIndex(item.index!==activeIndex ? item.index : null)
                                    
                                    if(item.subMenuList.length<1){
                                        
                                        closeMobileMenu()
  
                                    }
                                }}>
                                    {
                                        item.subMenuList.length < 1 ? 

                                        <>
                                            <Link to={item.pathName}>{item.name}</Link> 

                                        </>                                        

                                        :

                                        <>
                                            {item.name}

                                            <span className={styles.mobile_icon}><img src="/images/mobile_submenu.png" alt=""/></span>
                                            <ul className={styles.mobilesubmenu_list}>

                                              {
                                                item.subMenuList.map((subitem)=>(
                                                    <li onClick={()=>{
                                                            navigate(subitem.pathName)
                                                            closeMobileMenu()
                                                        }
                                                    }>{subitem.name}</li>
                                                ))
                                              }



                                            </ul>
                                        </>

                                    }
                                </li>
                            ))
                           }


                            {/* <li>HOME</li>
                            <li><Link to='/mobileabout'>르 라보 소개</Link></li>
                            <li>프래그런스
                                <span className={styles.mobile_icon}><img src="/images/mobile_submenu.png" alt=""/></span>
                                <ul className={styles.mobilesubmenu_list}>
                                    <li>오 드 퍼퓸</li>
                                    <li>리퀴드 밤</li>
                                    <li>트래블 튜브</li>
                                </ul>
                            </li>
                            <li>바디/헤어/페이스
                                <span className={styles.mobile_icon}><img src="/images/mobile_submenu.png" alt=""/></span>
                                <ul className={styles.mobilesubmenu_list}>
                                    <li>바디</li>
                                    <li>헤어</li>
                                    <li>페이스</li>
                                </ul>
                            </li>
                            <li>라이프스타일
                              <span className={styles.mobile_icon}><img src="/images/mobile_submenu.png" alt=""/></span>
                                  <ul className={styles.mobilesubmenu_list}>
                                      <li>클래식 캔들</li>
                                      <li>콘크리트 캔들</li>
                                      <li>홈 프래그런스</li>
                                  </ul>
                            </li> 
                            <li><Link to='/mobilediscovery'>디스커버리</Link></li>  */}
                        </ul>
                    </div>
                </nav>
                <div id={styles.mobile_grayLayer} ref={grayLayer}></div>  
                 {/* 배경을 어둡게 해주는 div ( 리엑트에서는 DOM 요소를 동적으로 생성하는 것보다 미리 넣어두는게 좋음 ) */}               
            </header>
    
    </>
  )
}
