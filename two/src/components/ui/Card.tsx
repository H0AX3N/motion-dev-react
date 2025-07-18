'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import { CalendarSync, Group, History, MessageSquareText, Plus, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Card() {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <AnimatePresence>
                {isOpen && (<motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.97,
                        filter: 'blur(10px)'
                    }}
                    animate= {{
                        opacity: 1,
                        scale: 1,
                        filter: 'blur(0px)'
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.97,
                        filter: 'blur(10px)'
                    }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeInOut'
                    }}
                    className={cn(
                        'w-72 min-h-[26rem] rounded-xl bg-white',
                        'shadow-custom',
                        'p-6 flex flex-col'
                    )}>
                    <h2 className='font-bold text-sm'>Motion Card Component</h2>
                    <p className='text-neutral-600 text-xs mt-2'>A collection of beautiful UI components, let's get started!</p>
                    <div className="flex items-center justify-center">
                        <button className='flex items-center gap-1 text-[11px] mt-4 shadow-custom rounded-md px-2 py-1'>
                            <Image src={'/image.webp'} alt='' width={50} height={50} className='h-4 w-4' />
                            Aceternity
                            <X onClick={() => setIsOpen(!isOpen)} className='h-3 w-3 text-neutral-400' />
                        </button>
                    </div>
                    <div className=' bg-gray-100 flex-1 rounded-lg mt-4 border border-dashed border-neutral-200'>
                        {/* motion div starts here */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.98,
                                filter: 'blur(10px)',
                            }}
                            whileHover={{
                                scale: 1,
                                opacity: 1,
                                filter: 'blur(0px)'
                            }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut',
                            }}
                            className=' bg-white rounded-lg divide-y divide-neutral-200'
                        >
                            <div className='flex gap-2 p-4'>
                                <div className='bg-gradient-to-br shadow-custom flex justify-center items-center bg-white border border-neutral-100 rounded h-7 w-7 flex-shrink-0'>
                                    <MessageSquareText strokeWidth={1.5} className='h-4 w-4 text-neutral-600' />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className='text-[10px] font-bold text-neutral-600'>
                                        Aceternity UI Components
                                    </p>
                                    <p className='text-[8px] text-neutral-400 mt-1'>
                                        A collection of UI Components
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-2 p-4'>
                                <div className='bg-gradient-to-br shadow-custom flex justify-center items-center bg-white border border-neutral-100 rounded h-7 w-7 flex-shrink-0'>
                                    <History strokeWidth={1.5} className='h-4 w-4 text-neutral-600' />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className='text-[10px] font-bold text-neutral-600'>
                                        24 hours turnaround
                                    </p>
                                    <p className='text-[8px] text-neutral-400 mt-1'>
                                        Superfast delivery at warpspeed
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-2 p-4'>
                                <div className='bg-gradient-to-br shadow-custom flex justify-center items-center bg-white border border-neutral-100 rounded h-7 w-7 flex-shrink-0'>
                                    <CalendarSync strokeWidth={1.5} className='h-4 w-4 text-neutral-600' />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className='text-[10px] font-bold text-neutral-600'>
                                        365 days all around
                                    </p>
                                    <p className='text-[8px] text-neutral-400 mt-1'>
                                        We are here to help 24/7
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-2 p-4'>
                                <div className='bg-gradient-to-br shadow-custom flex justify-center items-center bg-white border border-neutral-100 rounded h-7 w-7 flex-shrink-0'>
                                    <Group strokeWidth={1.5} className='h-4 w-4 text-neutral-600' />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className='text-[10px] font-bold text-neutral-600'>
                                        Lorem Title
                                    </p>
                                    <p className='text-[8px] text-neutral-400 mt-1'>
                                        Some Lorem Content here
                                    </p>
                                </div>
                            </div>

                            <div className='flex justify-center items-center gap-2 p-4'>
                                <div className='bg-gradient-to-br shadow-custom flex justify-center items-center bg-white border border-neutral-100 rounded-[50%] h-7 w-7 flex-shrink-0'>
                                    <Plus strokeWidth={1.5} className='h-4 w-4 text-neutral-600' />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className='text-[9px] font-bold text-neutral-600'>
                                        Create Project
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        {/* motion div ends here */}
                    </div>
                </motion.div>)}
            </AnimatePresence>
        </>
    )
}
