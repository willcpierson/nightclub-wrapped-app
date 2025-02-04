"use client";
import { useSearchParams } from 'next/navigation';
import NightclubStatsImage from '../../NightclubCanvasStats'
import { NightclubRedemptionStatsImage } from '../../NightclubCanvasStats';


export default function PlayerPage() {
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag');

    return (
        <main className="flex justify-center min-h-screen flex-col items-center bg-gradient-to-b from-slate-800 to-gray-900">
            <h1 className="mb-6 md:mb-8 text-5xl md:text-6xl font-bold text-center bg-clip-text px-2 py-3">Here is the Nightclub Wrapped for {tag}!</h1>
            <NightclubStatsImage tag={tag}/>
            <br />
            <NightclubRedemptionStatsImage tag={tag} />
        </main>
    )
} 