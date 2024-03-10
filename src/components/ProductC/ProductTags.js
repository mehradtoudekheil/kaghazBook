import React from 'react'

function ProductTags({tags}) {
  return (
  <>
    {tags.map((item,index)=>{
        return <div className='p-1 bg-gray-200 mx-1 my-1 md:my-0 text-xs cursor-pointer'>{item}</div>
    })}
  </>
  )
}

export default ProductTags