import React from 'react'

function ProductProperty() {
    return (
        <div className='w-full p-10'>
            <div className='w-full h-10 bg-gray-100 flex items-center px-10'>
                <p className='font-bold text-sm w-1/2'>وزن</p>
                <p className='text-sm fanum w-1/2'>220 گرم</p>
            </div>
            <div className='w-full h-10 bg-gray-200 flex items-center px-10'>
            <p className='font-bold text-sm w-1/2'>صفحه</p>
                <p className='text-sm fanum w-1/2'>678 صفحه</p>
            </div>
            <div className='w-full h-10 bg-gray-100 flex items-center px-10'>
            <p className='font-bold text-sm w-1/2'>جلد سخت</p>
                <p className='text-sm w-1/2'>ندارد</p>
            </div>
            <div className='w-full h-10 bg-gray-200 flex items-center px-10'>
            <p className='font-bold text-sm w-1/2'>لورم</p>
                <p className='text-sm w-1/2'>لورم</p>
            </div>

        </div>
    )
}

export default ProductProperty