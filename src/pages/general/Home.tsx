import { Button } from "@/components/ui/button";
import banner from "/trip-fold-zeno-banner.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="text-center pt-12 px-5 mb-5">
        <div className="max-w-md mx-auto space-y-5">
          <h1 className="text-4xl font-bold leading-tight text-white">
            Manage Trip Expenses Without the Headache
          </h1>

          <p className="text-slate-400 text-base leading-7">
            Split group expenses smartly, track balances in real time, and keep
            every trip organized with Trip Fold Zeno.
          </p>

          <p className="text-sm text-slate-500">
            Free Android app • Live Website Available • No signup required
          </p>
          <Link to="/trips">
            <Button variant="secondary" className="px-10 text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
      {/* Banner */}
      <img src={banner} alt="Trip Fold Zeno" />

      {/* Features */}
      <section id="features" className="px-5 py-14">
        <div className="max-w-md mx-auto">
          <h2 className="text-center text-3xl font-bold mb-10 text-white">
            Everything You Need for Group Trip Expense Management
          </h2>

          <div className="flex flex-col gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-lg font-semibold mb-2">👥 Manage Members</h3>
              <p className="text-slate-400 text-sm">
                Add, edit, and remove trip members easily.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-lg font-semibold mb-2">💵 Budget Setup</h3>
              <p className="text-slate-400 text-sm">
                Set per-person budget before the trip starts.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-lg font-semibold mb-2">🍽️ Add Expenses</h3>
              <p className="text-slate-400 text-sm">
                Track meals, transport, shopping, and other shared costs.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-lg font-semibold mb-2">👤 Smart Splitting</h3>
              <p className="text-slate-400 text-sm">
                Split expenses only among selected participants.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-lg font-semibold mb-2">
                📊 Real-Time Balances
              </h3>
              <p className="text-slate-400 text-sm">
                See who owes what instantly with automatic calculations.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="text-lg font-semibold mb-2">
                💾 Save & Delete Data
              </h3>
              <p className="text-slate-400 text-sm">
                Save trip data locally and delete everything anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-5 py-12">
        <div className="max-w-md mx-auto text-center bg-white/5 border border-white/10 rounded-3xl p-7 space-y-5">
          <h2 className="text-3xl font-bold text-white">
            Travel Together, Split Smarter
          </h2>

          <p className="text-slate-400 leading-7">
            No more messy calculations, forgotten expenses, or awkward money
            discussions after a trip. Trip Fold Zeno keeps everything clear,
            fair, and organized.
          </p>
          <Link to="/trips">
            <Button variant="secondary" className="px-10 text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-14">
        <div className="max-w-md mx-auto">
          <h2 className="text-center text-3xl font-bold mb-8 text-white">
            FAQ
          </h2>

          <div className="space-y-4">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h4 className="font-semibold mb-2 text-white">
                Is the app free?
              </h4>
              <p className="text-slate-400 text-sm">
                Yes, Trip Fold Zeno is completely free to download and use.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h4 className="font-semibold mb-2 text-white">
                Do I need to create an account?
              </h4>
              <p className="text-slate-400 text-sm">
                No signup or login is required.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h4 className="font-semibold mb-2 text-white">
                Is my data stored online?
              </h4>
              <p className="text-slate-400 text-sm">
                No. Your trip data is stored locally on your device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-5 text-center">
        <div className="max-w-md mx-auto">
          <p className="text-slate-300 text-sm mb-2">
            Built with React, TypeScript, Vite and shadcn/ui
          </p>

          <p className="text-slate-400 text-sm">
            Developed by{" "}
            <span className="text-gray-100 italic">Moheeb Khan</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
