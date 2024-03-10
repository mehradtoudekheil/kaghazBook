import React from 'react'

function ProductCommentsWrapper() {
    return (
        <div className='w-full min-h-80 md:h-80 p-4 overflow-y-scroll  '>
            <div className='w-full min-h-28 shadow-lg bg-slate-50 rounded-xl my-3 p-3'>
                <div className='border-b pb-2 flex justify-between flex-col md:flex-row md:items-center'>
                    <div className='flex'>
                        <div className='bg-green-500 text-white px-3 rounded-lg text-xs h-6 flex items-center'>4.2</div>
                        <h6 className='text-gray-500 font-bold mr-4 text-lg'>موقع خوندنش لذت بردم</h6>
                    </div>
                    <div className='flex pt-2 md-pt-0'>
                        <p className='text-sm text-gray-700 ml-3'>خریدار</p>
                        |
                        <p className='fanum text-sm text-gray-400 mr-3'>1402.11.22</p>
                    </div>
                </div>
                <div className='w-full p-1 overflow-y-scroll'>
                    <p className='text-sm text-gray-500'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>
            </div>
            <div className='w-full min-h-28 shadow-lg bg-slate-50 rounded-xl my-3 p-3'>
                <div className='border-b pb-2 flex justify-between  flex-col md:flex-row md:items-center'>
                    <div className='flex'>
                        <div className='bg-green-500 text-white px-3 rounded-lg text-xs h-6 flex items-center'>4.2</div>
                        <h6 className='text-gray-500 font-bold mr-4 text-lg'>موقع خوندنش لذت بردم</h6>
                    </div>
                    <div className='flex pt-2'>
                        <p className='text-sm text-gray-700 ml-3'>خریدار</p>
                        |
                        <p className='fanum text-sm text-gray-400 mr-3'>1402.11.22</p>
                    </div>
                </div>
                <div className='w-full p-1 overflow-y-scroll'>
                    <p className='text-sm text-gray-500'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>
            </div>
            <div className='w-full min-h-28 shadow-lg bg-slate-50 rounded-xl my-3 p-3'>
                <div className='border-b pb-2 flex justify-between  flex-col md:flex-row md:items-center'>
                    <div className='flex'>
                        <div className='bg-green-500 text-white px-3 rounded-lg text-xs h-6 flex items-center'>3.8</div>
                        <h6 className='text-gray-500 font-bold mr-4 text-lg'> عالی بود</h6>
                    </div>
                    <div className='flex pt-2'>
                        <p className='text-sm text-gray-700 ml-3'>خریدار</p>
                        |
                        <p className='fanum text-sm text-gray-400 mr-3'>1402.11.22</p>
                    </div>
                </div>
                <div className='w-full p-1 overflow-y-scroll'>
                    <p className='text-sm text-gray-500'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductCommentsWrapper