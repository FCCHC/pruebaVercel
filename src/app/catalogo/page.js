"use client"

import {  useEffect,useState } from 'react';
import Producto from "../componentes/productos"


function App(){

  const [totalCompradas, setTotalCompradas] = useState(0);

  useEffect(()=>{
    const compras = localStorage.getItem("carrito")
    if(compras){
        setTotalCompradas(parseInt(compras))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("carrito",totalCompradas)
  },[totalCompradas])

  const catalogo = [
    {id:1, nombre:"Peinado", precio:200, categoria:"Básicos", imagen:"../peinado.jpg"},
    {id:2, nombre:"Corte", precio:150, categoria:"Básicos", imagen:"../corte.jpg"},
    
  ]

 const manejarCompra = () => {
    setTotalCompradas(totalCompradas + 1);
  };

  return (
    
    <div className="flex bg-amber-50 ">
      <h1>Estetica Especializada le ofrece</h1>
        <h1>Servicios Adquiridos: {totalCompradas}</h1>
      <div className="catalogo">
      {catalogo.map((p)=>(
        <Producto 
        key={p.id} 
        foto={p.imagen} 
        nombre={p.nombre} 
        precio={p.precio} 
        categoria={p.categoria} 
        agregarCarrito={manejarCompra} />
      ))}
      </div>
      </div>

   

  )
}

export default App