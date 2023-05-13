
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import MovingText from '../components/MovingText';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  return (
    <>
      <Head>
        <title>League of Legends Fan Page</title>
        <meta name="description" content="Appreciation for the name League of Legends, i really like it" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`h-screen w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} transition-colors duration-300`}>
        <MovingText />
        <div className="h-screen bg-gradient-to-r from-amber-400 via-pink-600 to-blue-500 animate-gradient-x w-full flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 p-3">
            League of Legends
          </h1>
          
          <h2 className={`mt-9 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} text-2xl font-semibold`}>
            The best three words in a sequence ever! 🤩
          </h2>
          
        </div>
        
      </main>
    </>
  );
}