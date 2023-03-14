import React, {useState} from 'react'
import { Button } from "components"
import {ChevronLeftIconOutline, HomeIconMini} from "lib/@heroicons"
import {Card} from 'components'

const Withdrawal = () => {
    
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <Button onClick={() => setToggle(!toggle)}>Toggle Withdrawal</Button>
            {toggle && (
                <div className='bg-[#F2F4F7] fixed right-0 top-0 w-[350px] h-screen z-10 px-5'>
                    <div className='flex justify-start items-center py-9'>
                        <ChevronLeftIconOutline className="w-5 h-5" />
                        <h1 className="pl-24">Withdrawal</h1>
                    </div>
                        <Card className='mb-5'>
                            <div className='flex justify-between items-center'>
                                <p>$300</p>
                                <p>Pending</p>
                            </div>
                            <hr className="text-[#707070] mt-3 mb-3" />
                            <div className='flex justify-between items-center'>
                                <p>مكتب الدانا- غزة</p>
                                <HomeIconMini className='w-4 h-4'/>
                            </div>
                        </Card>
                        <Card>
                            <p>Timeline</p>
                            <div className="flex flex-start">
                                <span>7:30 am</span>
                                <p>Requested</p>
                            </div>
                        </Card>
                </div>
            )}
        </>
    )
}

export default Withdrawal