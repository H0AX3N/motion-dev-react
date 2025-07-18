import React from 'react'
import Card from './ui/Card'
import { cn } from '@/lib/utils'
import { Geist } from 'next/font/google'
const geist = Geist({ subsets: ['latin'] });

export default function Content() {
    return (
        <div className={cn(geist.className,'flex justify-center items-center h-screen bg-gray-50')}>
            <Card />
        </div>
    )
}
