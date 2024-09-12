import React from 'react'

function Loading() {
    return (
        <div className='w-full h-screen bg-black fixed z-50 flex justify-center items-center'>
            <div className="pl">
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__dot"></div>
                <div className="pl__text">Loading…</div>
            </div>
        </div>
    )
}

export default Loading