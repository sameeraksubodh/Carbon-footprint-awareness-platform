export default function EcoSyncDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl backdrop-blur bg-white/70 shadow-xl p-6">
            <h1 className="text-3xl font-bold">EcoSync AI</h1>
            <p className="text-slate-500">Passive, gamified carbon tracking</p>

            <div className="mt-6 h-72 rounded-2xl border border-slate-200 flex items-center justify-center">
              <div className="text-center">
                <h2 className="font-semibold text-lg">Weekly CO₂ Emissions Chart</h2>
                <p className="text-slate-500">Transport • Food • Utilities</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-emerald-50 rounded-2xl p-4">
                <div className="font-semibold">Current Footprint</div>
                <div className="text-2xl font-bold">12kg CO₂</div>
                <div className="text-emerald-700">↓ 8% this week</div>
              </div>
              <div className="bg-white rounded-2xl p-4 border">
                <div className="font-semibold">Guild Rank</div>
                <div className="text-2xl font-bold">#14</div>
              </div>
              <div className="bg-white rounded-2xl p-4 border">
                <div className="font-semibold">Saved CO₂</div>
                <div className="text-2xl font-bold">148kg</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-b from-emerald-700 to-emerald-500 text-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold">Passive Progress Tracker</h2>
            <div className="h-64 flex items-center justify-center">
              🌳🌳🌳
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1,250 Eco-Credits</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Receipt-to-Impact Scanner</h2>

            <div className="border-2 border-dashed rounded-2xl p-10 text-center hover:bg-slate-50 cursor-pointer">
              Drag & Drop Receipt / Bill / Ticket
            </div>

            <div className="mt-6">
              <div className="animate-pulse text-emerald-700">
                AI analyzing receipt items...
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Red Meat</span>
                  <span>4.2kg CO₂</span>
                </div>
                <div className="flex justify-between">
                  <span>Dairy Milk</span>
                  <span>1.1kg CO₂</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>Total Impact</span>
                  <span>5.3kg CO₂</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h2 className="text-xl font-semibold">AI Smart-Swaps Coach</h2>

            <div className="space-y-4 mt-4">
              <div className="bg-slate-100 rounded-2xl p-3">
                I noticed you bought beef and dairy this week...
              </div>
              <div className="bg-emerald-100 rounded-2xl p-3">
                Swap one meal to a plant-based recipe and save 5kg CO₂.
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <button className="px-3 py-2 rounded-full bg-emerald-100">
                Show me the recipe
              </button>
              <button className="px-3 py-2 rounded-full bg-emerald-100">
                Suggest a milk swap
              </button>
              <button className="px-3 py-2 rounded-full bg-emerald-100">
                Log my bike commute
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Eco-Guilds & Quests</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold">Meatless Monday Quest</h3>
              <p>Reward: 100 Eco-Credits</p>
              <div className="mt-2">Progress: 0/1</div>
              <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl">
                Claim
              </button>
            </div>

            <div className="border rounded-2xl p-4">
              <h3 className="font-semibold">Commute Commando</h3>
              <p>Reward: 150 Eco-Credits</p>
              <div className="mt-2">Progress: 3/5 miles</div>
              <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl">
                Claim
              </button>
            </div>

            <div className="border rounded-2xl p-4 opacity-60">
              <h3 className="font-semibold">Unplugged Evening</h3>
              <p>Locked</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
