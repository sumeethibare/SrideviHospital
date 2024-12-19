import React from 'react'

function Mini() {
    return (
        <>
            <div className='hidden lg:flex gap-2 items-center justify-evenly bg-emerald-600 h-12'>
                <div>
                    <p className='text-zinc-50 tracking-wide text-sm font-light'>
                        <span className='uppercase text-green-300 font-medium tracking-wide text-sm'>Contact: </span>
                        9606353182</p>
                </div>
                <div>
                    <p className='text-zinc-50 tracking-wide text-sm font-light'>
                        <span className='uppercase text-green-300 font-medium tracking-wide text-sm'>Email: </span>
                        shridevicityhospital@gmail.com </p>
                </div>
                <div>
                    <p className='text-zinc-50 tracking-wide text-sm font-light'>
                        <span className='uppercase text-green-300 font-medium tracking-wide text-sm'>Address: </span>
                        M G Road, 1st Cross Rd, K R Extension, Ward No. 18, Tumakuru, Karnataka 572101</p>
                </div>
            </div>
        </>
    )
}

export default Mini