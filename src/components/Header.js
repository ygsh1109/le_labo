import React, { useEffect, useState } from 'react';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
import styles from './css/header.module.css';

import { login, logout} from '../api/firebase'; // firebase.js 파일 내부에 로그인 로그아웃 기능 적용
import { useAuthContext } from '../context/AuthContext'; //  user 정보를 불러오는 사용자 함수 적용 



export default function Header() {

  const mainMenu=[
    {index:0, name:"르 라보 소개", pathName:'/about', subMenuList:[]},
    {index:1, name:"프래그런스", pathName:'fragrance', subMenuList:[
        {index:0, name:"전체", pathName:{ pathname: `/fragrance`, search: `?${createSearchParams({ category: '전체' })}`} },
        {index:1, name:"오드퍼퓸", pathName:{ pathname: `/fragrance`, search: `?${createSearchParams({ category: '오드퍼퓸' })}`} },
        {index:2, name:"리퀴드밤", pathName:{ pathname: `/fragrance`, search: `?${createSearchParams({ category: '리퀴드밤' })}`} },
        {index:3, name:"트래블튜브", pathName:{ pathname: `/fragrance`, search: `?${createSearchParams({ category: '트래블튜브' })}`}  }
    ]},

    {index:2, name:"바디/헤어/페이스", pathName:'/face', subMenuList:[
        {index:0, name:"바디" },
        {index:1, name:"헤어" },
        {index:2, name:"페이스" }
    ]},

    {index:3, name:"라이프스타일", pathName:'/life', subMenuList:[
        {index:0, name:"클래식캔들" },
        {index:1, name:"콘크리트캔들" },
        {index:2, name:"홈프래그런스" }
    ]},

    {index:4, name:"디스커버리", pathName:'/discovery', subMenuList:[]}
]

const [selectMenuIndex, setSelectMenuIndex] = useState()   //선택하는 카테고리

const navigate = useNavigate()

const [headerScroll, setHeaderScroll]=useState()


  useEffect(()=>{

    const scrollDown=()=>{

      if(window.scrollY > 200){
        setHeaderScroll(true)
      }else{
        setHeaderScroll(false)
      }
    };
      
      window.addEventListener('scroll', scrollDown);

      
      return () => {
        window.removeEventListener('scroll', scrollDown);
      };

    }, []);

const {user} = useAuthContext()



const [ScrollY, setScrollY] = useState(0);


const scrollTop = () => {  // 클릭하면 스크롤이 위로 올라가는 함수
  window.scrollTo({
    top:0,
    behavior: "smooth"
  });
  setScrollY(0);  // ScrollY 의 값을 초기화
}



return (
  <>

  <div id={styles.header_wrap} className={headerScroll ? styles.scrollDown : ''}>

    <header>
      <h1 id={styles.logo} onClick={scrollTop}>
        <Link to='/main'>
          <img src='/images/logo_le-labo.png' alt='Le Labo Logo' />
        </Link>
      </h1>
      <nav>
     
          <ul id={styles.mainmenu}>
              
            {
            
            mainMenu.map((item, index) => (
              <li
                key={item.index}
                className={selectMenuIndex === item.index ? styles.selected : ''}
                onClick={() => {
                  
                  if (item.subMenuList.length === 0) {
                    navigate(item.pathName);  
                  }  //주 메뉴의 subMenuList가 없는 경우, mainMenu의 pathName으로 이동시켜줌

                }}

                onMouseOver={()=>{
                  setSelectMenuIndex(item.index)
                }}

                onMouseLeave={()=>{
                  setSelectMenuIndex(null)
                }}
                
              >
                {item.name}

                {item.subMenuList.length > 1 && 
                
                (
                  
                  <ul className={styles.submenu}>
                    {item.subMenuList.map((subitem) => (
                      <li
                        key={subitem.index} 
                        className={
                          selectMenuIndex === item.index 
                          ? styles.selected.submenu 
                          : styles.submenu } 

                          // styles.selected.submenu: 주 메뉴 항목이 선택되었을 때 서브메뉴 항목에 적용되는 스타일입니다.
                          // .submenu: 주 메뉴 항목이 선택되지 않았을 때 서브메뉴 항목에 적용되는 기본 스타일입니다.
                          // 주 메뉴 항목이 선택되었는지 아닌지에 따라서 서브메뉴 항목의 스타일을 설정하는 역할을 합니다. 
                          // 선택된 경우 styles.selected.submenu 스타일을 적용하고, 선택되지 않은 경우 styles.submenu 스타일을 적용합니다.
                          

                        onClick={() => {    //item은 mainmenu의 index를 말한다.
                          //navigate(subitem.pathName);
                          
                          if(index===1){
                            //alert("test")
                            navigate({ pathname: `/fragrance`, search: `?${createSearchParams({ category: subitem.name })}`})
                          }else{
                            //navigate(subitem.pathName);
                          }

                          window.scrollTo(0,0)
                         


                        }}
                      >
                        {subitem.name}

                    </li>
                    ))}

                  </ul>

                )}

              </li>
            ))}
            </ul>
      

      {
        
        user ?   // user 객체값이 있을때 ( 로그인 일때 ) 

        <p className={styles.login}>

          <button onClick={logout}><p>LOGOUT</p></button> 
          
          <img src='/images/icon_basket.png'/>         
          
          {/* {user.displayName} */}
        
        </p>


        :        // user 객체값이 없을때 ( 로그아웃 일때 ) 
        
        <p className={styles.login}>      

          <button onClick={login}>LOGIN</button>  

          <img src='/images/icon_basket.png'/>

        </p>     

    
      }

      
    </nav>

    </header>
  </div>
  </>
  )
}

