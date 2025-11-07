export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Simple subscription</h2>
          <p className="mt-2 text-gray-600">One plan. All features. Cancel anytime.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Homesy Plus</h3>
            <p className="mt-2 text-sm text-gray-600">For busy households who value convenience and flexibility.</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-bold text-gray-900">₹750</span>
              <span className="text-sm text-gray-600">/ month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• Monthly credit limit up to ₹5,000</li>
              <li>• Zero-cost delivery on orders over ₹500</li>
              <li>• Priority support</li>
              <li>• Flexible repayments</li>
            </ul>
            <button className="mt-8 w-full rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">Start subscription</button>
          </div>
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-indigo-900">Credit snapshot</h3>
            <p className="mt-2 text-sm text-indigo-700">Understand how the credit system works.</p>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg bg-white p-4 border border-indigo-100">
                <dt className="text-gray-600">Monthly limit</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">₹5,000</dd>
              </div>
              <div className="rounded-lg bg-white p-4 border border-indigo-100">
                <dt className="text-gray-600">Used on average</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">₹2,200</dd>
              </div>
              <div className="rounded-lg bg-white p-4 border border-indigo-100">
                <dt className="text-gray-600">Remaining</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">₹2,800</dd>
              </div>
              <div className="rounded-lg bg-white p-4 border border-indigo-100">
                <dt className="text-gray-600">Reset</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">1st of every month</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
