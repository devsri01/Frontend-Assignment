import React, { useState } from 'react'
import './Card.css'
import Data from './Data'
import CardItems from './CardItems'
import CategData from './CategData'

const allCatValues = [... new Set(Data.map((curElem) => curElem.category)) , "All"];

const Card = () => {

    const[items,setItems] = useState(Data);
    const[catItems,setCatItems]=useState(allCatValues);

    const filterMenu = (category) => {

        if(category === "All")
        {
            setItems(Data);
            return
        }
        const updatedItems = Data.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updatedItems);
    }

  return (
    <>
            <h2 className='text-center main-heading mt-3'>Property Selection Webapp</h2>
            <hr/>
            <CategData filterMenu={filterMenu} catItems={catItems}/>
            <CardItems items={items}/>
    </>
  );
}

export default Card