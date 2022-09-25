import React, { useState } from 'react'
import Records from '../records.json'

const comparison = (a,b) => {
    return a.sort-b.sort
}
Records= Records.sort(comparison)

const validation = (Item) => {
    if(Item.required===true )
    {
        return "Required"
    }
    else
    {
        return "Not-Required"
    }
}

const validation2 = (Item) => {
    if(Item.immutable===true)
    {
        return "Immutable"
    }
    else
    {
        return "Editable"
    }
}

const Index = () => {
    const [show,setShow]=useState(true)
  return (
    <>
    <div className="jumbotron bg-dark text-white text-center py-2 jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Intern Work</h1>
            <p className="lead">The project contains all the functionalities given in the problem statement</p>
        </div>
    </div>
    <div className='row my-4 mx-auto'>
    <div className='col-lg-5 col-md-5 mx-auto'>
        <form>
        <textarea className="form-control is-valid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
        <button className="btn btn-primary my-3" type="submit">Submit form</button>
        </form>
    </div>
    <div className='col-lg-5 col-md-5 mx-auto'>
    {
        Records && Records.map(record => {
            return (
                <>
                <div >
                    
                    <div >
                        <form >
                        <div className='font-italic h3 btn btn-warning ' data-placement="top" title={record.description}><b>{record.label}</b></div>
                        <div className="form-row">
                            <div className='row'>
                                <div className="col-md-4 mb-3">
                                <label for="validationDefault01"><h4>JsonKey</h4></label>
                                </div>
                                <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" id="validationDefault01" placeholder={record.jsonKey}  required/>
                                </div>
                            </div>
                            <br/>
                            <div className='row'>
                                <div className="col-md-4 mb-3">
                                <label for="validationDefault01"><h4>Element type</h4></label>
                                </div>
                                <div className="col-md-6 mb-3">
                                <input type="text" className="form-control" id="validationDefault01" placeholder={record.uiType}  required/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="mx-auto">
                            <div className="form-check col-lg-5 col-md-5 col-sm-5">
                                <input className="form-check-input" type="radio" checked/>
                                <label className="form-check-label" for="exampleRadios1">
                                    {
                                       validation({...record.validate})
                                    }
                                </label>
                            </div>
                            <div className="form-check col-lg-5 col-md-5 col-sm-5">
                                <input className="form-check-input" type="radio" checked/>
                                <label className="form-check-label" for="exampleRadios1">
                                    {
                                       validation2({...record.validate})
                                    }
                                </label>
                            </div>
                        </div>
                        <br/>
                        <div className='row'>
                            <div className="form-check col-lg-5">
                                Slices
                            </div>
                            <div className="form-check col-lg-5">
                                <select class="custom-select">
                                <option selected>Number of slices</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                </select>
                            </div>
                            <br/><br/>
                        </div>

                        
                        {record.validate.required==false ?
                            <div>
                            <button  onClick={() => setShow(!show)}>Toggle button</button>
                            <br/><br/>
                            </div>
                             : null
                        }
                        
                        {show? 
                        <div className='Visibility'>
                        {
                             record.validate.immutable && record.validate.options && record.validate.options.map( data=>{
                                return (
                                    <div >
                                        <div className='font-italic h3 btn btn-primary mx-3' data-placement="top" title={data.description}>{data.label}</div>
                                        <input type="text" placehoder="the text can't be changed" value="Non editable text" class="field left" readonly/>
                                    </div>
                                )
                            })
                        }
                        {
                            !record.validate.immutable && record.validate.options && record.validate.options.map( data=>{
                                return (
                                    <div >
                                        <div className='font-italic h3 btn btn-success mx-3' data-placement="top" title={data.description}>{data.label}</div>
                                        <input type="text" placeholder='The text can be changed' />
                                    </div>
                                )
                            })
                        }
                        </div>
                        :null}

                        </form>
                    </div>
                </div>
                
                </>
            )
        })
    }
    </div>
    </div>
    </>
  )
}

export default Index