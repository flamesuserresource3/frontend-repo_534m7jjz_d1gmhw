import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">Homesy • Credit-based shopping</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Shop home essentials now, pay later with flexible credits
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Homesy gives you a monthly credit limit to buy groceries and household products. Track usage, manage subscriptions, and get doorstep delivery.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#catalog" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">Browse catalog</a>
            <a href="#pricing" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">View plans</a>
          </div>
        </div>
        <div className="relative h-[380px] md:h-[460px] rounded-xl overflow-hidden ring-1 ring-gray-200">
          <Spline scene="https://prod.spline.design/3a0X-4k8X4qf2v8g/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/40" />
        </div>
      </div>
    </section>
  );
}
