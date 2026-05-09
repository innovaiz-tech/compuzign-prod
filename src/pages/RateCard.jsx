import React, { useState } from "react";

const storage = {
  fields: [
    {
      id: "type",
      label: "Storage Type",
      opts: [
        { t: "— Select —", g: 0 },
        { t: "HDD — 7.2K SATA", g: 0.04 },
        { t: "HDD — 10K SAS", g: 0.06 },
        { t: "SSD — SATA", g: 0.1 },
        { t: "SSD — NVMe", g: 0.15 },
        { t: "Object Storage (S3-Compatible)", g: 0.02 },
      ],
    },
    {
      id: "cap",
      label: "Capacity",
      opts: [
        { t: "— Select —", c: 0 },
        { t: "500 GB", c: 500 },
        { t: "1 TB", c: 1000 },
        { t: "2 TB", c: 2000 },
        { t: "5 TB", c: 5000 },
      ],
    },
    {
      id: "red",
      label: "Redundancy",
      opts: [
        { t: "Single — No Redundancy", m: 1 },
        { t: "Dual — RAID 1 Equivalent", m: 2 },
        { t: "Erasure Coding (2+1)", m: 1.5 },
        { t: "HA — Multi-AZ", m: 2 },
      ],
    },
  ],
};

export default function RateCard() {
  const [values, setValues] = useState({
    type: null,
    cap: null,
    red: null,
  });

  const [rate, setRate] = useState(null);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  // 🔥 Pricing logic
  const calculate = (updated) => {
    const { type, cap, red } = updated;

    if (type && cap && red) {
      let raw = type.g * cap.c * red.m;

      // 👇 Round to nearest "nice" value like 300 / 400 / 450
      let final = Math.round(raw / 50) * 50;

      setRate(final);
    } else {
      setRate(null);
    }
  };

  const handleChange = (fieldId, optionIndex) => {
    const field = storage.fields.find((f) => f.id === fieldId);
    const selectedOption = field.opts[optionIndex];

    const updated = { ...values, [fieldId]: selectedOption };
    setValues(updated);
    calculate(updated);
  };

  const addToCart = () => {
    if (!rate) return;

    setCart((prev) => [
      ...prev,
      {
        values,
        rate,
        qty,
        total: rate * qty,
      },
    ]);

    setValues({ type: null, cap: null, red: null });
    setRate(null);
    setQty(1);
  };

  const totalSum = cart.reduce((a, b) => a + b.total, 0);

  const submit = () => setShow(true);

  const close = () => {
    setShow(false);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.8fr_1fr]">
        <section className="rounded-[2rem] bg-white p-8 shadow-[0_28px_80px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
          <div className="mb-8 flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-bgYellow">Rate card calculator</p>
            <h1 className="text-3xl font-semibold text-slate-950">Storage as a Service</h1>
            <p className="max-w-2xl text-slate-500">
              Choose your storage type, capacity, and redundancy level to preview a tailored monthly storage quote.
            </p>
          </div>

          <div className="grid gap-6">
            {storage.fields.map((field) => (
              <div key={field.id} className="space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <label className="text-sm font-semibold text-slate-900">{field.label}</label>
                  {field.id === 'type' ? (
                    <span className="rounded-full bg-primary-bgYellow/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-bgYellow">
                      {field.opts.length - 1} options
                    </span>
                  ) : null}
                </div>

                <select
                  className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary-bgYellow focus:ring-2 focus:ring-primary-bgYellow/20"
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  value={values[field.id] ? field.opts.indexOf(values[field.id]) : 0}
                >
                  {field.opts.map((opt, i) => (
                    <option key={i} value={i}>
                      {opt.t}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
              <div className="rounded-3xl border border-primary-bgYellow/30 bg-primary-bgYellow/5 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-primary-bgYellow">Estimated monthly rate</p>
                <p className="mt-4 text-4xl font-semibold text-slate-950">{rate ? `$${rate.toLocaleString()}` : "—"}</p>
                <p className="mt-2 text-sm text-slate-500">
                  This estimate updates automatically when all selections are complete.
                </p>
              </div>

              {rate && (
                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <p className="text-sm text-slate-500">Quantity</p>
                  <div className="mt-3 flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-100 px-3 py-2">
                    <button
                      disabled={qty === 1}
                      onClick={() => setQty(qty - 1)}
                      className="h-11 w-11 rounded-2xl bg-white text-lg font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      −
                    </button>
                    <div className="min-w-[3rem] text-center text-lg font-semibold text-slate-900">{qty}</div>
                    <button
                      disabled={qty === 10}
                      onClick={() => setQty(qty + 1)}
                      className="h-11 w-11 rounded-2xl bg-white text-lg font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={addToCart}
              disabled={!rate}
              className="w-full rounded-3xl bg-primary-bgYellow px-6 py-4 text-base font-semibold text-slate-950 shadow-sm transition hover:bg-primary-DEFAULT disabled:cursor-not-allowed disabled:opacity-60"
            >
              Add to cart
            </button>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">How it works</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Select your storage type, capacity, and redundancy.</li>
                <li>• Review the estimated monthly rate immediately.</li>
                <li>• Add multiple configurations to build a comprehensive quote.</li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="rounded-[2rem] bg-slate-950 p-8 text-slate-100 shadow-[0_28px_80px_rgba(15,23,42,0.25)]">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary-bgYellow">Quote summary</p>
              <h2 className="text-2xl font-semibold">Build your quote</h2>
            </div>
            <div className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">
              {cart.length} item{cart.length !== 1 ? "s" : ""}
            </div>
          </div>

          <div className="space-y-4">
            {cart.length === 0 ? (
              <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5 text-sm text-slate-400">
                Add a configuration to see the quote preview and total monthly commitment.
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-100">{item.values.type?.t}</p>
                      <p className="mt-1 text-sm text-slate-400">{item.values.cap?.t} · {item.values.red?.t}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-semibold text-primary-bgYellow">${item.total.toLocaleString()}</p>
                      <p className="text-xs text-slate-500">{item.qty} unit{item.qty !== 1 ? "s" : ""}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Monthly commitment</span>
                <span className="font-semibold text-slate-100">${totalSum.toLocaleString()}</span>
              </div>
              <button
                onClick={submit}
                className="mt-5 w-full rounded-3xl bg-primary-bgYellow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-DEFAULT"
              >
                Generate quote document
              </button>
            </div>
          )}
        </aside>
      </div>

      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 text-slate-100 shadow-2xl">
            <div className="flex flex-col gap-3 border-b border-slate-800 bg-slate-900 p-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary-bgYellow">Quote document</p>
                <h3 className="mt-2 text-3xl font-semibold">Storage Infrastructure Quote</h3>
              </div>
              <div className="space-y-1 text-sm text-slate-400">
                <p>Quote #{Math.floor(Math.random() * 9000 + 1000)}</p>
                <p>Billing cycle: Monthly</p>
                <p>{cart.length} item{cart.length !== 1 ? "s" : ""}</p>
              </div>
            </div>

            <div className="grid gap-5 p-6 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl bg-slate-900 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Client</p>
                <p className="mt-3 font-semibold text-slate-100">Client Company Name</p>
                <p className="mt-1 text-sm text-slate-400">Contact Person</p>
                <p className="mt-1 text-sm text-slate-400">email@company.com</p>
                <p className="mt-1 text-sm text-slate-400">+1 (000) 000-0000</p>
              </div>
              <div className="rounded-3xl bg-slate-900 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Quote details</p>
                <div className="mt-4 space-y-2 text-sm text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span>${totalSum.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Estimated tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex items-center justify-between font-semibold text-slate-100">
                    <span>Monthly total</span>
                    <span>${totalSum.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border-t border-slate-800 bg-slate-900 p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                  <thead className="border-b border-slate-800 text-slate-400">
                    <tr>
                      <th className="px-4 py-3">#</th>
                      <th className="px-4 py-3">Service</th>
                      <th className="px-4 py-3">Qty</th>
                      <th className="px-4 py-3">Unit / Mo</th>
                      <th className="px-4 py-3 text-right">Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index} className="border-b border-slate-800">
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">
                          <div className="font-medium text-slate-100">{item.values.type?.t}</div>
                          <div className="text-xs text-slate-500">{item.values.cap?.t} · {item.values.red?.t}</div>
                        </td>
                        <td className="px-4 py-3">{item.qty}</td>
                        <td className="px-4 py-3">${item.rate.toFixed(2)}</td>
                        <td className="px-4 py-3 text-right text-primary-bgYellow">${item.total.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-800 bg-slate-950 p-6 lg:flex-row lg:items-center lg:justify-between">
              <button
                onClick={close}
                className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm text-slate-100 transition hover:bg-slate-800 lg:w-auto"
              >
                Close
              </button>
              <button
                onClick={() => window.print()}
                className="w-full rounded-3xl bg-primary-bgYellow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-DEFAULT lg:w-auto"
              >
                Print / Save PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}