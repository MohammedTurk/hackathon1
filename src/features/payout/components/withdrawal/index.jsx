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
                <div className='bg-[#F2F4F7] fixed right-0 top-0 w-[480px] h-screen z-10 px-5 border-solid border transition duration-1000 ease-out'>
                    <div className='flex justify-start items-center py-9'>
                        <ChevronLeftIconOutline className="w-5 h-5" />
                        <h1 className="pl-40 font-bold">Withdrawal</h1>
                    </div>
                        <Card className='mb-5'>
                            <div className='flex justify-between items-center'>
                                <p className='text-base font-bold'>$300</p>
                                <p>Pending</p>
                            </div>
                            <hr className="text-[#707070] mt-3 mb-3" />
                            <div className='flex justify-between items-center'>
                                <p>مكتب الدانا- غزة</p>
                                <HomeIconMini className='w-4 h-4'/>
                            </div>
                        </Card>
                        <Card className='mb-5'>
                            <p className='pb-4 text-base font-bold'>Timeline</p>
                            <div className="flex flex-start items-center">
                                <p className='text-[#656565] text-xs'>7:30am</p>
                                <p className='pl-10'>Requested</p>
                            </div>
                            <span className='text-[#8C8C8C] text-[10px]'>Today</span>
                        </Card>
                        <Card className='mb-5'>
                            <h3 className="mb-4 text-base font-bold">Details</h3>
                            <div className='flex justify-between items-center mb-4'>
                                <p2 className="text-base text-[#8C8C8C]">Recipient Name</p2>
                                <p2>سعاد أحمد محمود</p2>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p2 className="text-base text-[#8C8C8C]">Expected Date</p2>
                                <p2>Within 24 Hours (Avg: 2hrs)</p2>
                            </div>
                        </Card>
                        <Card className='mb-5 '>
                            <p className="mb-4 text-base font-bold">Instructions</p>
                            <ul className='list-disc pl-6'>
                                <li>Address: الرمال - تقاطع شارع فلسطين مع الشهداء</li>
                                <li>Working hours from 9:00 am to 7:00 pm</li>
                                <li>Bring your ID for identification</li>
                                <li>Confirm receiving your payment</li>
                                <li>Office fees 0.00</li>
                            </ul>
                        </Card>
                        <Card >
                            <Button className="ml-32 bg-transparent text-black text-xl hover:bg-transparent">Cancel Withdrawal</Button>
                        </Card>
                </div>
            )}
        </>
    )
}

export default Withdrawal