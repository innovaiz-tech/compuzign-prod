import React, { useMemo, useState } from "react";
import SEO from "../utils/SEO";

const BILLING_OPTIONS = {
  monthly: { label: "Monthly", months: 1, discount: 0 },
  quarterly: { label: "Quarterly", months: 3, discount: 0.05 },
  semiannual: { label: "Semi-Annual", months: 6, discount: 0.1 },
  annual: { label: "Annual", months: 12, discount: 0.15 },
};

const SERVICE_CATALOG = [
  {
    category: "Bare Metal Servers",
    summary: "Dedicated compute for latency-sensitive workloads.",
    items: [
      {
        id: "bm-01",
        title: "Standard Metal",
        description: "4 vCPU, 16GB RAM, 500GB NVMe storage.",
        price: 725,
      },
      {
        id: "bm-02",
        title: "Performance Metal",
        description: "8 vCPU, 32GB RAM, 1TB NVMe storage.",
        price: 1250,
      },
      {
        id: "bm-03",
        title: "GPU Optimized",
        description: "16 vCPU, 64GB RAM, 1x GPU, 2TB NVMe.",
        price: 3180,
      },
    ],
  },
  {
    category: "Network",
    summary: "High throughput networking and secure transit.",
    items: [
      {
        id: "net-01",
        title: "Private Connect",
        description: "Dedicated MPLS / cloud interconnect solution.",
        price: 420,
      },
      {
        id: "net-02",
        title: "SD-WAN Fabric",
        description: "Intelligent routing with performance SLA.",
        price: 295,
      },
      {
        id: "net-03",
        title: "Edge Load Balancer",
        description: "Global traffic distribution and failover.",
        price: 180,
      },
    ],
  },
  {
    category: "Storage",
    summary: "Scale capacity with performance and redundancy.",
    items: [
      {
        id: "stor-01",
        title: "SATA HDD",
        description: "Reliable 7.2K RPM storage for backups.",
        price: 95,
      },
      {
        id: "stor-02",
        title: "SAS HDD",
        description: "Faster 10K drives for mixed workloads.",
        price: 138,
      },
      {
        id: "stor-03",
        title: "NVMe SSD",
        description: "Low-latency block storage for databases.",
        price: 245,
      },
    ],
  },
  {
    category: "Backup & DR",
    summary: "Protect data with snapshot and replication.",
    items: [
      {
        id: "bkp-01",
        title: "Nightly Backup",
        description: "Encrypted backup with object storage retention.",
        price: 130,
      },
      {
        id: "bkp-02",
        title: "Disaster Recovery",
        description: "Failover recovery for critical applications.",
        price: 640,
      },
      {
        id: "bkp-03",
        title: "Archive Storage",
        description: "Cost-optimized cold storage for compliance.",
        price: 58,
      },
    ],
  },
  {
    category: "Managed Services",
    summary: "Ongoing operations, monitoring and automation.",
    items: [
      {
        id: "mgd-01",
        title: "Infrastructure Ops",
        description: "24/7 platform monitoring and support.",
        price: 1125,
      },
      {
        id: "mgd-02",
        title: "Cloud Transformation",
        description: "Migration planning, execution, support.",
        price: 950,
      },
      {
        id: "mgd-03",
        title: "Automation Services",
        description: "Process automation and workflow optimization.",
        price: 780,
      },
    ],
  },
  {
    category: "Security",
    summary: "Proactive detection, hardening and response.",
    items: [
      {
        id: "sec-01",
        title: "SOC Monitoring",
        description: "24/7 security operations and alerting.",
        price: 925,
      },
      {
        id: "sec-02",
        title: "Vulnerability Scan",
        description: "Continuous assessment and remediation guidance.",
        price: 195,
      },
      {
        id: "sec-03",
        title: "Privileged Access",
        description: "Secure privileged identity management.",
        price: 530,
      },
    ],
  },
  {
    category: "DBaaS",
    summary: "Managed database services for cloud-native apps.",
    items: [
      {
        id: "db-01",
        title: "Database Cluster",
        description: "Highly available managed database hosting.",
        price: 760,
      },
      {
        id: "db-02",
        title: "Caching Service",
        description: "In-memory cache for performance-sensitive apps.",
        price: 410,
      },
    ],
  },
  {
    category: "Load Balancers",
    summary: "Resilient traffic distribution for apps.",
    items: [
      {
        id: "lb-01",
        title: "Application LB",
        description: "Layer 7 routing and session affinity.",
        price: 210,
      },
      {
        id: "lb-02",
        title: "Network LB",
        description: "High-volume layer 4 forwarding with health checks.",
        price: 155,
      },
    ],
  },
];

const formatCurrency = (value) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

export default function GetAQuote() {
  const [billing, setBilling] = useState("monthly");
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState(() =>
    SERVICE_CATALOG.reduce(
      (acc, category) => ({ ...acc, [category.category]: true }),
      {}
    )
  );
  const [quoteNumber] = useState(() => 1000 + Math.floor(Math.random() * 9000));

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const billingOption = BILLING_OPTIONS[billing];
  const discountAmount = subtotal * billingOption.discount;
  const total = subtotal - discountAmount;

  const billingText = useMemo(
    () => `${billingOption.label} · ${billingOption.discount > 0 ? `${billingOption.discount * 100}% discount` : "no discount"}`,
    [billingOption]
  );

  const addItem = (service, category) => {
    setItems((prev) => {
      const existing = prev.find((line) => line.id === service.id);
      if (existing) {
        return prev.map((line) =>
          line.id === service.id
            ? { ...line, quantity: line.quantity + 1 }
            : line
        );
      }
      return [
        ...prev,
        {
          id: service.id,
          title: service.title,
          description: service.description,
          price: service.price,
          quantity: 1,
          category,
        },
      ];
    });
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearQuote = () => {
    setItems([]);
  };

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const quoteCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-[#060b08] text-slate-100">
      <SEO
        title="Get a Quote | CompuZign"
        description="Build a customized infrastructure quote with CompuZign. Use our rate card calculator to estimate storage, compute, and managed services pricing."
        keywords="CompuZign quote, rate card, infrastructure pricing, IT service estimate"
      />

      <section id="quote-panel" className="container mx-auto px-4 pt-28 pb-20">
        <div className="grid gap-6 xl:grid-cols-[1.65fr_0.85fr]">
          <div className="rounded-3xl border border-slate-800 bg-[#0c1410]/95 p-6 shadow-[0_26px_80px_rgba(0,0,0,0.45)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary-bgYellow">
                  Rate card catalog
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Complete IaaS service catalog with quote-ready pricing.
                </h2>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {SERVICE_CATALOG.map((category) => (
                <div key={category.category} className="overflow-hidden rounded-3xl border border-slate-800 bg-[#111c15]/95">
                  <button
                    type="button"
                    onClick={() => toggleCategory(category.category)}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-950/60"
                  >
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                        {category.category}
                      </p>
                      <p className="mt-3 text-lg font-semibold text-white">
                        {category.summary}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-sm text-slate-400">{openCategories[category.category] ? "Hide" : "Show"}</span>
                      <span className={`transition-transform ${openCategories[category.category] ? "rotate-180" : "rotate-0"}`}>
                        ▼
                      </span>
                    </div>
                  </button>

                  {openCategories[category.category] && (
                    <div className="border-t border-slate-800 px-6 py-5">
                      <div className="grid gap-4 lg:grid-cols-2">
                        {category.items.map((service) => (
                          <div key={service.id} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h3 className="text-lg font-semibold text-white">
                                  {service.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                  {service.description}
                                </p>
                              </div>
                              <div className="rounded-full bg-primary-bgYellow/10 px-3 py-1 text-sm font-semibold text-primary-bgYellow">
                                {formatCurrency(service.price)}
                              </div>
                            </div>
                            <button
                              onClick={() => addItem(service, category.category)}
                              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-slate-700 bg-primary-bgYellow px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-bgYellow/90"
                            >
                              Add to quote
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <aside className=" space-y-6 sticky right-0">
            <div className="rounded-3xl border border-slate-800 bg-[#111c15]/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold uppercase tracking-[0.3em] text-primary-bgYellow">
                    Quote Summary
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    {quoteCount} item{quoteCount !== 1 ? "s" : ""} selected
                  </p>
                </div>
                <div className="rounded-full bg-slate-950/75 px-3 py-1 text-xs uppercase tracking-[0.22em] text-primary-bgYellow">
                  {billingOption.label}
                </div>
              </div>

              <div className="mt-6 space-y-3 rounded-3xl bg-[#0c1410]/80 p-4">
                {items.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-950/80 p-8 text-center text-sm text-slate-500">
                    Add services to build your quote.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-start justify-between gap-3 rounded-3xl border border-slate-800 bg-slate-950 p-4">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white">{item.title}</p>
                          <p className="mt-1 text-xs text-slate-400 line-clamp-2">{item.description}</p>
                          <p className="mt-2 text-xs text-slate-500">Qty: {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-primary-bgYellow">{formatCurrency(item.price * item.quantity)}</p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="mt-2 text-xs text-slate-500 transition hover:text-primary-bgYellow"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-4 rounded-3xl border border-slate-800 bg-[#0c1410]/85 p-5">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Discount</span>
                  <span>{billingOption.discount > 0 ? `-${formatCurrency(discountAmount)}` : formatCurrency(0)}</span>
                </div>
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-slate-400">
                  <span>{billingText}</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>

              <div className="grid gap-3">
                <select
                  value={billing}
                  onChange={(event) => setBilling(event.target.value)}
                  className="w-full rounded-3xl border border-slate-800 bg-slate-950/85 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-primary-bgYellow"
                >
                  {Object.entries(BILLING_OPTIONS).map(([key, option]) => (
                    <option key={key} value={key} className="bg-slate-950 text-slate-100">
                      {option.label}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => setModalOpen(true)}
                  disabled={items.length === 0}
                  className="rounded-3xl bg-primary-bgYellow px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-bgYellow/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Generate Quote
                </button>

                <button
                  onClick={clearQuote}
                  disabled={items.length === 0}
                  className="rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary-bgYellow disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Clear Quote
                </button>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-[#0c1410]/80 p-4 text-xs leading-6 text-slate-500">
                <p className="font-semibold text-slate-300">Quote details</p>
                <p>All prices are in USD and valid for 30 days. Taxes, support, and integration fees are excluded unless otherwise stated.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="max-h-[calc(100vh-4rem)] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-white text-slate-950 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
            <div className="flex flex-col gap-5 border-b border-slate-200 p-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary-bgYellow">Quote document</p>
                <h3 className="mt-2 text-2xl font-semibold">CompuZign Infrastructure Quote</h3>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                <span>Quote #{quoteNumber}</span>
                <span>Billing: {billingOption.label}</span>
                <span>{quoteCount} item{quoteCount !== 1 ? "s" : ""}</span>
              </div>
            </div>

            <div className="p-6">
              <div className="grid gap-4 lg:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Client</p>
                  <p className="mt-3 font-semibold text-slate-950">Client Company Name</p>
                  <p className="mt-1 text-sm text-slate-600">Contact Person</p>
                  <p className="mt-1 text-sm text-slate-600">email@company.com</p>
                  <p className="mt-1 text-sm text-slate-600">+1 (000) 000-0000</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Billing</p>
                  <p className="mt-3 text-sm text-slate-700">{billingOption.label}</p>
                  <p className="mt-2 text-sm text-slate-600">{billingOption.discount > 0 ? `${billingOption.discount * 100}% discount applied` : "Standard monthly terms"}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Total</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-950">{formatCurrency(total)}</p>
                  <p className="mt-2 text-sm text-slate-600">{billingText}</p>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-100 text-slate-500">
                    <tr>
                      <th className="px-4 py-4 uppercase tracking-[0.2em]">#</th>
                      <th className="px-4 py-4 uppercase tracking-[0.2em]">Service Description</th>
                      <th className="px-4 py-4 uppercase tracking-[0.2em]">Qty</th>
                      <th className="px-4 py-4 uppercase tracking-[0.2em]">Unit/Mo</th>
                      <th className="px-4 py-4 uppercase tracking-[0.2em]">Monthly</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={item.id} className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <td className="px-4 py-4 text-slate-600">{index + 1}</td>
                        <td className="px-4 py-4">
                          <p className="font-semibold text-slate-900">{item.title}</p>
                          <p className="mt-1 text-xs text-slate-500">{item.category}</p>
                        </td>
                        <td className="px-4 py-4 text-slate-700">{item.quantity}</td>
                        <td className="px-4 py-4 text-slate-700">{formatCurrency(item.price)}</td>
                        <td className="px-4 py-4 font-semibold text-slate-900">{formatCurrency(item.price * item.quantity)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 space-y-3 rounded-3xl bg-slate-50 p-5 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Discount</span>
                  <span>{billingOption.discount > 0 ? `-${formatCurrency(discountAmount)}` : formatCurrency(0)}</span>
                </div>
                <div className="flex items-center justify-between text-base font-semibold text-slate-900">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <p className="text-xs text-slate-500">This quote is valid for 30 days and excludes applicable taxes unless otherwise stated.</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="rounded-3xl border border-slate-300 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                >
                  Close
                </button>
                <button
                  onClick={() => window.print()}
                  className="rounded-3xl bg-primary-bgYellow px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-primary-bgYellow/90"
                >
                  Print / Save PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
