
import React from 'react';
import { useEffect } from 'react';
import ColorApi from '../services/ColorApi';

function PaleteColor(){

  const Api = new ColorApi()

 useEffect(()=>
 {
 Api.getColor(color)


 })


return(

<h1>Hola soy paletecolor</h1>

)
}


 
export default PaleteColor;