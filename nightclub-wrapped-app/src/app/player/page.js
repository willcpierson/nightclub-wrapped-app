"use client";
import { useSearchParams } from 'next/navigation';
import NightclubStatsImage from '../../NightclubCanvasStats'
import { NightclubRedemptionStatsImage } from '../../NightclubCanvasStats';
import XShareButton from '../../XShareButton';


export default function PlayerPage() {
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag');

    return (
        <main className="flex justify-center min-h-screen flex-col items-center bg-gradient-to-b from-slate-800 to-gray-900">
            <h1 className="mb-6 md:mb-8 text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 px-2 py-3">{tag}'s Nightclub Wrapped</h1>
            <NightclubStatsImage tag={tag}/>
            <br />
            <NightclubRedemptionStatsImage tag={tag} />
            <XShareButton className="flex items-center justify-center bg-[#000000] text-blue font-medium px-4 my-2 py-2 rounded-lg" text="I just got my Nightclub Wrapped for 2024!" url="http://localhost:3002" />
            <br />
        </main>
    )
} 