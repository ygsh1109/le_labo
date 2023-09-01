import React, { useEffect, useState } from 'react'
import { getIngredient } from '../api/firebase'

export default function useIngredient() {


  

  const [ingredient, setIngredient] = useState([])


  useEffect(()=>{

    getIngredient().then((res)=>{
      setIngredient(res)
    })

  }, [])





  return [ingredient]
    
}
