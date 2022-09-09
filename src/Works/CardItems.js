import React from 'react'

const CardItems = ({items}) => {
  return (
    <>
        <div className='menu-items container-fluid mt-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                    <div className='row my-5 '>
                        {
                            items.map((elem) => {
                                const{id,name,image,description,price}= elem;
                                return(
                                    <>
                                    <div className='item-1 col-12 col-md-6 col-lg-6 col-xl-4 mb-5' key ={id}>
                                        <div className="card_bor card" >
                                            <img className="card-img-top rounded-top img-fluid " src={image} alt={name}/>
                                            <div className="card-body bg-black rounded-bottom">
                                                <h5 className="card-title text-warning">{price}</h5>
                                                <h5 className="card-title text-white">{name}</h5>
                                                <p className="card-text text-white">{description}</p>
                                                <a href="#" class="btn btn-warning">Want to Buy</a>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CardItems