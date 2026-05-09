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
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-lg">
        <h1 className="text-xl font-bold mb-4 text-center">
          Storage as a Service
        </h1>

        {/* Dynamic dropdowns */}
        {storage.fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label className="block mb-1 font-medium">{field.label}</label>

            <select
              className="w-full border p-2 rounded"
              onChange={(e) => handleChange(field.id, e.target.value)}
              value={
                values[field.id]
                  ? field.opts.indexOf(values[field.id])
                  : 0
              }
            >
              {field.opts.map((opt, i) => (
                <option key={i} value={i}>
                  {opt.t}
                </option>
              ))}
            </select>
          </div>
        ))}

        {/* Rate */}
        {rate && (
          <div className="bg-blue-100 text-center p-3 rounded mb-3">
            Price: ${rate}
          </div>
        )}

        {/* Quantity */}
        {rate && (
          <div className="flex justify-center items-center gap-4 mb-3">
            <button
              disabled={qty === 1}
              onClick={() => setQty(qty - 1)}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              -
            </button>

            <span className="font-bold">{qty}</span>

            <button
              disabled={qty === 10}
              onClick={() => setQty(qty + 1)}
              className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
            >
              +
            </button>
          </div>
        )}

        <button
          onClick={addToCart}
          disabled={!rate}
          className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
        >
          Add to Cart
        </button>

        {/* Cart */}
        <div className="mt-4">
          {cart.map((item, i) => (
            <div key={i} className="flex justify-between text-sm mb-2">
              <span>
                {item.values.type?.t} / {item.values.cap?.t}
              </span>
              <span>${item.total}</span>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <button
            onClick={submit}
            className="w-full mt-4 bg-green-600 text-white py-2 rounded"
          >
            Generate Quote (${totalSum})
          </button>
        )}
      </div>

      {/* Popup */}
{show && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 overflow-auto">
    <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg p-6">

      {/* Header */}
      <h2 className="text-2xl font-bold mb-4">Cost Calculator</h2>

      {/* Client Info */}
      <div className="text-sm mb-4 space-y-1">
        <p><strong>Company:</strong> Client Company Name</p>
        <p><strong>Contact:</strong> Contact Person</p>
        <p><strong>Email:</strong> email@company.com</p>
        <p><strong>Phone:</strong> +1 (000) 000-0000</p>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-2">#</th>
              <th className="p-2">Service Description</th>
              <th className="p-2">Qty</th>
              <th className="p-2">Unit/Mo</th>
              <th className="p-2">Monthly</th>
            </tr>
          </thead>

          <tbody>
            {cart.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{i + 1}</td>

                <td className="p-2">
                  <div className="font-medium">Bare Metal Servers</div>
                  <div className="text-xs text-gray-600">
                    {item.values.type?.t} · {item.values.cap?.t} · {item.values.red?.t}
                  </div>
                </td>

                <td className="p-2">{item.qty}</td>
                <td className="p-2">${item.rate.toFixed(2)}</td>
                <td className="p-2">${item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="mt-4 text-right space-y-1">
        <div>
          <span className="font-medium">Subtotal: </span>
          ${totalSum.toFixed(2)}
        </div>
        <div className="text-lg font-bold">
          Monthly Total: ${totalSum.toFixed(2)}
        </div>
      </div>

      {/* Terms */}
      <div className="mt-6 text-xs text-gray-600 space-y-1">
        <h3 className="font-semibold text-sm mb-1">Terms & Conditions</h3>
        <p>1. All prices in USD, excluding applicable taxes.</p>
        <p>2. Services billed in advance on the 1st of each calendar month.</p>
        <p>3. One-time setup fees (where applicable) invoiced separately before activation.</p>
        <p>4. Network bandwidth measured as 95th percentile over the billing period.</p>
        <p>5. Storage overages billed at 1.5× the base rate.</p>
        <p>6. SLA credits limited to 100% of the affected service monthly charge.</p>
        <p>7. Minimum term: 1 month. Annual commitments receive 5% discount.</p>
        <p>8. Cancellation requires 30 days written notice.</p>
        <p>9. Pricing may change with 90 days notice.</p>
        <p>10. Quote valid for 30 days.</p>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 mt-6">
        <button
          onClick={close}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          Close
        </button>

        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
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