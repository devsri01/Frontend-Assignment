import React from 'react'

const CategData = ({filterMenu,catItems}) => {
  return (
    <>
        <div className='container menu-tabs'>
            <div className='col-lg-6 mx-auto'>
                <div className='menu-tab d-flex justify-content-around'>
                {
                    catItems.map((curClem,index)=> {
                        return <button className='btn btn-warning' key={index} onClick={() => filterMenu(curClem)}>{curClem}</button>;
                    })
                }
                </div>
            </div>
        </div>
    </>
  )
}

export default CategData