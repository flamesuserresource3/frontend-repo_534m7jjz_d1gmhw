function CreditDashboard() {
  const creditLimit = 3000;
  const usedCredit = 1240;
  const remaining = creditLimit - usedCredit;
  const percent = Math.min(100, Math.round((usedCredit / creditLimit) * 100));

  return (
    <section id="credit" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Credit overview</h2>
            <p className="text-slate-600 mt-1">Default limit applies. Request more when you need it.</p>
          </div>
          <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Request increase</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-600">Credit limit</div>
            <div className="mt-1 text-2xl font-semibold text-slate-900">₹{creditLimit}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-600">Used credit</div>
            <div className="mt-1 text-2xl font-semibold text-slate-900">₹{usedCredit}</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-600">Remaining</div>
            <div className="mt-1 text-2xl font-semibold text-slate-900">₹{remaining}</div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Utilization</span>
            <span>{percent}%</span>
          </div>
          <div className="mt-2 h-3 w-full rounded-full bg-slate-100 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className="mt-4 text-sm text-slate-600">Credit resets monthly. Keep usage under 60% for best eligibility.</p>
        </div>
      </div>
    </section>
  );
}

export default CreditDashboard;
