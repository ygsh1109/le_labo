import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import About from './pages/About';
import Fragrance from './pages/Fragrance';
import Face from './pages/Face';
import Life from './pages/Life';
import Discovery from './pages/Discovery';
import FragranceDetail from './pages/FragranceDetail';

import { AuthContextProvider } from './context/AuthContext';
import { isMobile } from 'react-device-detect';

import MobileRoot from './pages/mobile/MobileRoot';
import MobileMain from './pages/mobile/MobileMain'
import MobileAbout from './pages/mobile/MobileAbout';
import MobileFragrance from './pages/mobile/MobileFragrance'
import MobileFragranceDetail from './pages/mobile/MobileFragranceDetail'
import MobileFace from './pages/mobile/MobileFace';
import MobileLife from './pages/mobile/MobileLife';
import MobileDiscovery from './pages/mobile/MobileDiscovery';





function App() {  // 기본 컴포넌트 구조 (단축키 rfc - snippets 확장프로그램 )


  
  let router=null;

  

  if(isMobile){
    router=createBrowserRouter([
      {
        path:'/',
        element:<MobileRoot/>, //Header, Outlet
        errorElement:<NotFound/>,
        children:[ 
          {
            index:true, 
            element:<MobileMain/>
          },
          {
            path:'/mobilemain',
            element:<MobileMain/>
          },
          {
            path:'/mobileabout',
            element:<MobileAbout/>
          },
          {
            path: '/mobilefragrance',
            element: <MobileFragrance />,
          },
          {
            path: '/mobilefragrance/:productId',
            element: <MobileFragranceDetail />,
          },
          {
            path:'/mobileface',
            element:<MobileFace/>
          },
          {
            path:'/mobilelife',
            element:<MobileLife/>
          },
          {
            path:'/mobilediscovery',
            element:<MobileDiscovery/>
          }
          
        ]
      }
      
    ])
  }else{
    router=createBrowserRouter([
      {
        path:'/',
        element:<Root/>, //Header, Outlet
        errorElement:<NotFound/>,
        children:[ 
          {
            index:true, 
            element:<Main/>
          },
          {
            path:'/main',
            element:<Main/>
          },
          {
            path:'/about',
            element:<About/>
          },
          {
            path: '/fragrance',
            element: <Fragrance />,
          },
          {
            path: '/fragrance/:productId',
            element: <FragranceDetail />,
          },
          {
            path:'/face',
            element:<Face/>
          },
          {
            path:'/life',
            element:<Life/>
          },
          {
            path:'/discovery',
            element:<Discovery/>
          }
          
        ]
      }
      
    ])
  }

  return (

    
    <AuthContextProvider>
      

      <RouterProvider router={router}/>

    </AuthContextProvider>

    
  )
}

export default App; 

