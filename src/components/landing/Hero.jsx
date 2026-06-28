import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}

        <div>

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Smart Society Management Platform
          </span>

          <h1 className="text-6xl font-bold leading-tight mt-6">
            Manage Your Society
            <span className="text-blue-600"> Smartly</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6">
            One powerful platform to manage members,
            maintenance, visitors, complaints,
            parking and payments.
          </p>

          <div className="flex gap-4 mt-10">

            <Link
              to="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={18}/>
            </Link>

            <button className="border px-6 py-3 rounded-xl hover:bg-gray-100">
              Live Demo
            </button>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="w-full max-w-lg h-[420px] bg-white rounded-3xl shadow-xl flex items-center justify-center">

            <h2 className="text-2xl font-bold text-gray-400">
              Dashboard Preview
            </h2>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;