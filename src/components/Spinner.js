import React  from 'react'
import loading from './loading.gif'

export default function Spinner(){

    return (
      <div className='text-center'>
          <h1><img src={loading} alt="loading" /></h1>
      </div>
    )
}
