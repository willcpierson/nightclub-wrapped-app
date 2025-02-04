import { useRef, useEffect } from "react";
let nightclubStatBackground = "/nightclubStatTemplate.png";
let nightclubRedemptionStatBackground = "/nightclubRedemptionStatTemplate.png";
let Top8Stamp = "/TOP8_STAMP.png";
let BracketsWonStamp = "/BRACKETSWON_STAMP.png";

const playerData = {
    "main":
      {"rival":
        {
        "tag":"Jkiller",
        "matches":4
        },
      "setsWon":64,
      "setsPlayed":162,
      "bracketsWon":0,
      "bracketCount":49,
      "bestPlacement": {
        "placement":17,
        "tournamentName":"The Nightclub S9E12 @ OS NYC"
      },
      "topEightFinishes":0,
      "timesOutplacedSeed":29
      },
   "redemption":{
     "rival":
      {"tag":"Mackee",
      "matches":11
      },
     "setsWon":119,
     "setsPlayed":195,
     "bracketsWon":1,
     "bracketCount":39,
     "bestPlacement":{
       "placement":1,
       "tournamentName":"The Nightclub S10E20 @ OS NYC"
       },
     "topEightFinishes":28,
     "timesOutplacedSeed":17
   },
   "tournamentsAttended":51
  }


export default function NightclubStatsImage() {
  const canvasRef = useRef(null);

  const downloadStatsImage = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const dataURL = canvas.toDataURL();

      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'nightclub-wrapped.png';
      link.click();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const font = new FontFace("Library3AM", "url(/fonts/Library3AM.otf)");

    font
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);

        // Load the nightclub template image plz
        const nightclubStats = new Image();
        nightclubStats.src = nightclubStatBackground;
        const top8Badge = new Image();
        top8Badge.src = Top8Stamp;
        const bracketsWonBadge = new Image();
        bracketsWonBadge.src = BracketsWonStamp;

        nightclubStats.onload = () => {
          console.log("Image loaded successfully");

          ctx.drawImage(nightclubStats, 0, 0, canvas.width, canvas.height);

          ctx.font = "28px Library3AM"; // Patti's font for Nightclub stats
          ctx.fillStyle = "violet";
          ctx.textAlign = "right";
            // potentially alternate fillStyle (color) for each stat, between violet and cyan

          ctx.fillText(playerData.tournamentsAttended, 255, 220); // tournaments attended stat
          ctx.fillText(playerData.main.setsPlayed, 255, 262); // total sets played stat
          ctx.fillText(Math.floor(100 * (playerData.main.setsWon / playerData.main.setsPlayed)), 255, 300); // % of sets won stat
          ctx.fillText(playerData.main.bestPlacement.placement, 255, 360); // highest placement stat
          // ^ add flavor text to it (17th, 1st, note that different placements end with different letters)
          ctx.fillText(playerData.main.timesOutplacedSeed, 255, 420); // times outplaced seed stat

            ctx.font = "20px Library3AM" // change font to smaller size? May need to be dynamic based on tag length
                                        // other option is to put tag below maybe?
            ctx.fillStyle = "cyan";
            ctx.fillText(playerData.main.rival.tag, 255, 505); // bracket Rival stat
            const isTop8 = () => {
                if (playerData.main.topEightFinishes > 0) {
                    ctx.drawImage(top8Badge, 160, 505, 100, 100)
                };
            };
            const anyBracketsWon = () => {
                if (playerData.main.bracketsWon > 0) {
                    ctx.drawImage(bracketsWonBadge, 80, 505, 100, 100);
                }
            }
            anyBracketsWon();
            isTop8();
        };

        // Error handling if the nightclub template doesn't load
        nightclubStats.onerror = (error) => {
          console.error("Error loading Nightclub Wrapped template image:", error);
        };
      })
      .catch((error) => {
        console.error("Font loading failed:", error);
      });
  }, []);

  return (
    <>
        <canvas
        ref={canvasRef}
        width={270}
        height={605}
        >
    </canvas>
    <button onClick={downloadStatsImage} className='px-6 py-3 my-2 rounded-lg text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-white'>Download Wrapped</button>
    </>
  );
}

export function NightclubRedemptionStatsImage() {

  const placedTop8 = playerData.redemption.topEightFinishes > 0 // boolean to place top 8 sticker or not

  const canvasRef = useRef(null);

  const downloadStatsImage = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const dataURL = canvas.toDataURL();

      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'nightclub-wrapped.png';
      link.click();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Load the custom font
    const font = new FontFace("Library3AM", "url(/fonts/Library3AM.otf)");

    font
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);

        // Load the nightclub template image plz
        const nightclubStats = new Image();
        nightclubStats.src = nightclubRedemptionStatBackground;
        const top8Badge = new Image();
        top8Badge.src = Top8Stamp;
        const bracketsWonBadge = new Image();
        bracketsWonBadge.src = BracketsWonStamp;

        nightclubStats.onload = () => {
          console.log("Image loaded successfully");

          ctx.drawImage(nightclubStats, 0, 0, canvas.width, canvas.height);

          ctx.font = "28px Library3AM"; // Patti's font for Nightclub stats
          ctx.fillStyle = "violet";
          ctx.textAlign = "right";
            // potentially alternate fillStyle (color) for each stat, between violet and cyan

          ctx.fillText(playerData.tournamentsAttended, 255, 205); // tournaments attended stat
          ctx.fillText(playerData.redemption.setsPlayed, 255, 245); // total sets played stat
          ctx.fillText(Math.floor(100 * (playerData.redemption.setsWon / playerData.redemption.setsPlayed)), 255, 285); // % of sets won stat
          ctx.fillText(playerData.redemption.bestPlacement.placement, 255, 363); // highest placement stat
          // ^ add flavor text to it (17th, 1st, note that different placements end with different letters)
          ctx.fillText(playerData.redemption.timesOutplacedSeed, 255, 422); // times outplaced seed stat

            ctx.font = "20px Library3AM" // change font to smaller size? May need to be dynamic based on tag length
                                        // other option is to put tag below maybe?
            ctx.fillStyle = "cyan";
            ctx.fillText(playerData.redemption.rival.tag, 255, 509); // bracket Rival stat

            const isTop8 = () => {
                if (playerData.redemption.topEightFinishes > 0) {
                    ctx.drawImage(top8Badge, 175, 515, 100, 100)
                    ctx.textAlign = "center"
                    ctx.fillText(playerData.redemption.topEightFinishes, 225, 575)
                };
            };
            const anyBracketsWon = () => {
                if (playerData.redemption.bracketsWon > 0) {
                    ctx.drawImage(bracketsWonBadge, 105, 515, 100, 100);
                    ctx.textAlign = "center";
                    ctx.fillText(playerData.redemption.bracketsWon, 154, 575)
                }
            }
            anyBracketsWon();
            isTop8();
        };

        // Error handling if the nightclub template doesn't load
        nightclubStats.onerror = (error) => {
          console.error("Error loading Nightclub Wrapped template image:", error);
        };
      })
      .catch((error) => {
        console.error("Font loading failed:", error);
      });
  }, []);

  return (
    <>
        <canvas
        ref={canvasRef}
        width={270}
        height={605}
        >
      </canvas>
      <button onClick={downloadStatsImage} className='px-6 py-3 my-2 rounded-lg text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 text-white'>Download Wrapped</button>
    </>
  );
}