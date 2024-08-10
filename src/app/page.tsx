"use client"

import Image from "next/image";
import babyPic from './assets/baby.jpg'
import { useState } from "react";
import BabyModal from "./components/BabyModal";

export default function Home() {
  const [babyModalOpen, setBabyModalOpen] = useState(false);

  // Get today's % completion of pregenancy
  const today: any = new Date(),
        start: any = new Date(2024, 4, 2),
        end: any = new Date(2025, 1, 6);
  const is = Math.abs(today - start);
  const of = Math.abs(end - start);
  const percent = Math.round((is/of)*100);
  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-16 lg:p-36">
      <div className="relative z-[-1] flex place-items-center font-mono">
          <h1 className="mb-4 lg:mb-2 text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            New Player Loading...
          </h1>
      </div>

      <div className="z-10 w-full lg:max-w-4xl items-center justify-between font-mono">
        <span id="ProgressLabel" className="sr-only">Loading</span>
        <span
          role="progressbar"
          aria-labelledby="ProgressLabel"
          aria-valuenow={percent}
          className="block rounded-full bg-gray-900"
        >
          <span
            className="block h-3 rounded-full bg-[repeating-linear-gradient(45deg,_var(--tw-gradient-from)_25%,_var(--tw-gradient-from)_50%,_var(--tw-gradient-to)_50%,_var(--tw-gradient-to)_75%)] from-indigo-400 to-indigo-500 bg-[length:2rem_2rem] animate-progress-bar bg-origin-content"
            style={{width: `${percent}%`}}
          ></span>
        </span>
        <h2 className="mt-3 text-xs lg:text-sm font-semibold">
          Expansion pack download in progress. Estimated completion February 06, 2025.
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          👶
          </span>
        </h2>
      </div>

      <div className="mt-12 mb-24 grid text-center lg:mb-0 lg:w-full lg:max-w-4xl sm:grid-cols-2 lg:text-left font-mono">
        <button onClick={() => setBabyModalOpen(true)}
          className="lg:m-3 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-indigo-700 hover:bg-indigo-800/30 text-left"
        >
          <h2 className="lg:mb-3 lg:text-2xl font-semibold">
            Wot{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[50ch] text-xs lg:text-sm opacity-50">
            What in tarnation is happening here? Click for more information on what this announcement means.
          </p>
        </button>

        <a
          href="https://amzn.to/4c4nLPm"
          className="lg:m-3 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-indigo-700 hover:bg-indigo-800/30 text-left"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="lg:mb-3 lg:text-2xl font-semibold">
            Baby Registry{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[50ch] text-xs lg:text-sm opacity-50">
            Help support our new adventure! Checkout the items we must collect before download completes.
          </p>
        </a>
      </div>

      {babyModalOpen && (
        <BabyModal
          isOpen={babyModalOpen}
          handleClose={() => setBabyModalOpen(!babyModalOpen)}
        >
          <div className="flex flex-col justify-between h-full w-full">
            <div className="flex flex-col mt-auto mb-auto items-justify text-sm p-8">
              <p className="mb-4">Hi, we're Billy &amp; Raven, and we made a baby!</p>
              <Image
                src={babyPic}
                alt="Picture of baby gummy bear fetus"
                placeholder="blur"
                className="hidden lg:block lg:mb-4"
              />
              <p className="mb-4">This webpage was created to help us spread the great news, as well as lay claim to a little corner of the web for the new player on their way.</p>
              <p className="mb-4">Please check back for download progress and maybe some additions, should mom feel like building more onto this.</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-8 align-center">
              <button
                className="py-2 px-8 text-sm font-bold rounded-lg border border-transparent transition-colors hover:bg-violet-600 hover:border-indigo-300"
                type="button"
                onClick = {() => setBabyModalOpen(!babyModalOpen)}
              >
                Close
              </button>
            </div>
          </div>
        </BabyModal>
      )}
    </main>
  );
}
