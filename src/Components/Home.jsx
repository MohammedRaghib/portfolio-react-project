import React from 'react'

function Home() {
  return (
    <div>
      <header>
        <div id="Header" class="bg-blue-600 p-6 text-center">
          <h1 class="text-white text-4xl font-bold">Personal Portfolio</h1>
        </div>
      </header>
      <main id="Main" class="p-8">
        <div class="para text-center my-8">
          <p class="text-xl italic text-gray-700">
            "The brave man is not he who does not feel afraid, but he who conquers that fear"
          </p>
        </div>
      </main>
      <footer class="bg-gray-800 p-6 text-white">
        <div class="footer max-w-2xl mx-auto text-center">
          <div class="par mb-4">
            <p class="font-semibold text-lg">
              Sign up to our newsletter for info on events and giveaways:
            </p>
          </div>
          <div class="email">
            <input
              type="email"
              placeholder="example@gmail.com"
              class="px-4 py-2 text-gray-900 rounded-md w-full max-w-xs"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
