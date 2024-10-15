import React from "react";
import pokeFightPhoto1 from "../../src/assets/projectPhotos/pokeFight/pokeFight1.png";
import pokeFightPhoto2 from "../../src/assets/projectPhotos/pokeFight/pokeFight2.png";
import pokeFightPhoto3 from "../../src/assets/projectPhotos/pokeFight/pokeFight3.png";
import pokeFightPhoto4 from "../../src/assets/projectPhotos/pokeFight/pokeFight4.png";
import pokeFightPhoto5 from "../../src/assets/projectPhotos/pokeFight/pokeFight5.jpg";
import { CTA } from "../components";

const PokeFight = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        <span className="blue-gradient_text drop-shadow font-semibold">
          PokeFight
        </span>
      </h1>
      <div className="my-2">
        <img src={pokeFightPhoto1} alt="pokeFightPhoto1" />
      </div>
      <div className="grid md:grid-cols-2 mt-4 items-center gap-4">
        <h3 className="text-5xl p-4 bg-slate-600 rounded-lg font-semibold">
          Your Poke fights with AI selected pokemonster
        </h3>
        <p className=" leading-relaxed">
          Poke Fight is a dynamic battle arena game where players can select
          their strongest Poke GO monster to fight against AI-controlled rivals.
          Each battle takes place in an arena where strategy, timing, and Poke
          abilities are key to victory. Built using the PokeAPI, the game
          features 19 unique pokemonsters, each with their own abilities,
          attacks, and special powers. The game provides an engaging battle
          experience with customization options and detailed statistics.
        </p>
      </div>
      <div className="grid md:grid-cols-2 mt-12 gap-4">
        <div>
          <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
            Key Features:
          </h3>
          <ul className="flex flex-col gap-2 marker:dot">
            <li>
              Players can select different pokemonsters, each with unique
              attributes and fighting styles.
            </li>
            <li>
              Battle against AI-selected rivals in a dynamic arena with
              real-time strategy.
            </li>
            <li>
              Players can alter their chosen pokemonster’s stats, abilities, and
              appearance after selecting them, allowing for deeper strategy.
            </li>
            <li>
              After each battle, players can view detailed results, including
              health, power-ups, attack stats, and rival analysis.
            </li>
            <li>
              Explore unique game mechanics and surprises through the Paradox
              Exploration Page.
            </li>
            <li>
              Game transitions and battle animations were made possible using
              Framer Motion, providing a polished and fluid user experience.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
            Technology Stack:
          </h3>
          <div>
            <span className="font-semibold text-lg text-blue-300">
              Frontend:
            </span>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>React for the game interface and dynamic page rendering.</li>
              <li>Tailwind CSS for custom styling and responsive design</li>
            </ul>
          </div>
          <div className="mt-4">
            <span className="font-semibold text-lg text-blue-300">
              Backend:
            </span>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                Node.js and Express for the server-side logic and API
                integration.
              </li>
              <li>
                MongoDB for managing user data, battle statistics, and
                pokemonster information.
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <span className="font-semibold text-lg text-blue-300">API:</span>
            <ul className="flex flex-col gap-2 marker:dot">
              <li>
                Node.js and Express for the server-side logic and API
                integration.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-12 gap-4">
        <div>
          <h3 className="text-2xl mb-4 font-semibold text-yellow-300">
            How can you play?
          </h3>
          <ul className="flex flex-col gap-2 marker:dot">
            <li>
              Signup free: User need to signUp with any email ID to play and see
              the statistic game data.
            </li>
            <li>
              Select Your Poke: Start by selecting a pokemonster from the list.
              Each monster has unique strengths, weaknesses, and special
              abilities.
            </li>
            <li>
              Fight: Enter the battle arena to face off against AI-controlled
              rivals. Use attacks and special moves strategically to defeat
              opponents.
            </li>
            <li>
              Statistics Page: After the fight, review the results, including
              health stats, attack breakdowns, and AI rival analysis.
            </li>
          </ul>
        </div>
        <div>
          <div>
            <img src={pokeFightPhoto2} alt="pokeFightPhoto2" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 mt-12 gap-4">
        <div>
          <img
            src={pokeFightPhoto3}
            alt="pokeFightPhoto3"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={pokeFightPhoto4}
            alt="pokeFightPhoto4"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={pokeFightPhoto5}
            alt="pokeFightPhoto5"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center mt-12  pb-24 ">
        <div className="flex gap-2">
          <button className="py-2 px-6 cursor-pointer bg-rose-500 rounded-lg text-slate-100 font-semibold">
            <a
              href="https://pokefightapp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Now
            </a>
          </button>
          <button className="py-2 px-6 cursor-pointer bg-slate-600 rounded-lg text-slate-100 font-semibold">
            <a
              href="https://github.com/mdMehediBillah/PokeFight-Gr2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </button>
        </div>
      </div>
      <CTA />
    </section>
  );
};

export default PokeFight;
