"use client";
import { useSearchParams } from "next/navigation";
import NightclubStatsImage from "../../NightclubCanvasStats";
import { NightclubRedemptionStatsImage } from "../../NightclubCanvasStats";
import XShareButton from "../../XShareButton";
import playerData from "../../data/enriched-participants";

export default function PlayerPage() {
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");
  const getPlayerData = (tag) => {
    for (let key in playerData) {
      if (playerData[key]?.playerGamerTag.toLowerCase() === tag.toLowerCase()) {
        return playerData[key];
      }
    }
    return null;
  };

  const isRedemption = (tag) => {
    return !!getPlayerData(tag)?.sets.redemption.setsPlayed;
  };

  return (
    <main className="bg-gradient-to-b from-slate-800 to-gray-900">
      <div className="mx-6 flex justify-center items-center flex-col">
        <h1 className="mt-12 pb-1 md:text-6xl text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          {tag}'s
        </h1>
        <h1 className="mb-12 pb-1 md:text-6xl text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Nightclub Wrapped
        </h1>
        <NightclubStatsImage tag={tag} />
        {isRedemption(tag) ? <NightclubRedemptionStatsImage tag={tag} /> : null}
        <XShareButton
          text="I just got my Nightclub Wrapped for 2024!"
          url="http://localhost:3002"
        />
      </div>
    </main>
  );
}
