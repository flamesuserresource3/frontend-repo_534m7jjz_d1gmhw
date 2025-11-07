import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-24 grid lg:grid-cols-2 items-center gap-8">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Credit-based grocery delivery
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Buy now. Stock your home. Pay later.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-prose">
            Homesy powers BRACKK — a subscription service for everyday essentials with a smart credit line for salaried families. Unlimited deliveries for ₹750/month.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">
              Explore catalog
            </a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Start subscription
            </a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-semibold text-slate-900">₹3000</div>
              <div className="text-xs text-slate-600">Default credit</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">₹750</div>
              <div className="text-xs text-slate-600">Monthly plan</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-slate-900">24/7</div>
              <div className="text-xs text-slate-600">Support</div>
            </div>
          </div>
        </div>
        <div className="relative h-[420px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-x-8 -top-8 h-24 bg-gradient-to-b from-white/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
