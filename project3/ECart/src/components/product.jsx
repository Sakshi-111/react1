import React from 'react'
import { Items } from './data'


const Product = () => {
  return (
   <>
   <div className="container">
    <div className="row">
        {
            Items.map((Product)=>{
                return(
                    <>

                    </>
            )
            }
        }
    </div>
   </div>
   </>
  )
}

export default Product