function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Unlimited home deliveries</h3>
              <p className="mt-2 text-slate-600">One simple monthly plan covers all delivery fees for your household. Cancel anytime.</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Unlimited deliveries</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Priority support</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Exclusive discounts</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Family profiles</li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div>
                <div className="text-5xl font-semibold tracking-tight text-slate-900">₹750</div>
                <div className="text-slate-600">per month, per household</div>
              </div>
              <a href="#" className="mt-4 inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">Start 14-day trial</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
