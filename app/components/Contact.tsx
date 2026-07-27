"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    await fetch(
      "https://script.google.com/macros/s/AKfycbyBV1H_R8Ow911DhlZ4XO7gn8OzGB8uM57UwS2gWtjFEmzVnBelPELCmu693Q913vCn/exec",
      {
        method: "POST",
        body: JSON.stringify({
          name: form.name,
          mobile: form.mobile,
          service: "Website Inquiry",
          city: "Ahmedabad",
          message: form.message,
        }),
      }
    );

    alert("✅ Inquiry Sent Successfully!");

    setForm({
      name: "",
      mobile: "",
      message: "",
    });

    setLoading(false);
  };

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-white mb-12">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 bg-slate-900 p-8 rounded-3xl"
        >

          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-4 rounded-xl bg-slate-800 text-white"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            required
            value={form.mobile}
            onChange={(e) =>
              setForm({ ...form, mobile: e.target.value })
            }
            className="w-full p-4 rounded-xl bg-slate-800 text-white"
          />

          <textarea
            rows={5}
            placeholder="Your Requirement"
            required
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-4 rounded-xl bg-slate-800 text-white"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-4 rounded-xl font-bold"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

        </form>
      </div>
    </section>
  );
}