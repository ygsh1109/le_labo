import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import { getProducts } from '../api/firebase'

export default function useFragrance() {


  

  const [fragrance, setFragrance] = useState([])


  useEffect(()=>{

    // axios.get('/data/fragrance.json').then((res)=>{
    //   setFragrance(res.data)
    // })


    getProducts().then((res)=>{
      setFragrance(res)
    })

  }, [])





  return [fragrance]
    
}
