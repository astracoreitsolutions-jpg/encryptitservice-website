import React from "react";
import { useState } from "react";
import { ArrowRight, Linkedin, Phone, Mail, Globe, Shield, Layers, Users, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- Edit these brand constants anytime ---
const BRAND = {
  name: "Encrypt IT Services LLC",
  tagline: "Empowering innovation through people, technology, and partnerships.",
  phone: "+1-908-449-2929",
  email: "info@encryptitservice.com",
  website: "https://www.encryptitservice.com",
  primary: "#0ea5e9", // sky-500
  accent: "#22c55e", // green-500
};

export default function Site() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl" style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})` }} />
            <div className="font-semibold">
              <div className="text-lg">{BRAND.name}</div>
              <div className="text-xs text-slate-500 -mt-1">IT Services • Staffing • Vendor Management</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-slate-600">Services</a>
            <a href="#staffing" className="hover:text-slate-600">Staffing</a>
            <a href="#about" className="hover:text-slate-600">About</a>
            <a href="#culture" className="hover:text-slate-600">Culture</a>
            <a href="#contact" className="hover:text-slate-600">Contact</a>
            <a href="#contact" className="ml-2"><Button className="rounded-2xl">Get a Quote</Button></a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(600px 300px at 10% -10%, ${BRAND.primary}, transparent), radial-gradient(600px 300px at 110% 10%, ${BRAND.accent}, transparent)` }} />
        <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build faster with a partner who <span style={{ color: BRAND.primary }}>delivers</span>.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              {BRAND.tagline} We bridge cutting‑edge technology with exceptional talent to deliver real business impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact"><Button className="rounded-2xl">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
              <a href="#services" className="px-4 py-2 rounded-2xl border hover:bg-white">Explore Services</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" />{BRAND.phone}</span>
              <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${BRAND.email}`}><Mail className="h-4 w-4" />{BRAND.email}</a>
              <a className="inline-flex items-center gap-2 hover:underline" href={BRAND.website} target="_blank" rel="noreferrer"><Globe className="h-4 w-4" />Website</a>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://www.linkedin.com/company/encrypt-it-services" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Dynamics 365 & Power Platform", desc: "Model‑Driven Apps, Canvas Apps, Power Automate, Dataverse.", icon: <Layers className="h-5 w-5" /> },
                { title: "API & Azure Integration", desc: "Functions, Logic Apps, API Management, secure connectors.", icon: <Workflow className="h-5 w-5" /> },
                { title: "Security & Compliance", desc: "ADA/WCAG, data protection, audit, governance.", icon: <Shield className="h-5 w-5" /> },
                { title: "Staffing & Advisory", desc: "Flexible staffing, vendor management, CoE best practices.", icon: <Users className="h-5 w-5" /> },
              ].map((s, i) => (
                <Card key={i} className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white border" style={{ borderColor: BRAND.primary }}>{s.icon}</div>
                      <div className="font-semibold">{s.title}</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Core Services</h2>
          <p className="mt-2 text-slate-600">We design, build, and run solutions that scale with your business.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              {
                h: "Dynamics 365 & Power Platform",
                p: "End‑to‑end implementations: Dataverse, Model‑Driven Apps, Canvas Apps, business rules, BPFs, and Power Automate flows.",
              },
              {
                h: "Integration & Data",
                p: "REST/Graph integrations, Azure Functions & Logic Apps, EDQ Address Validation, DocumentCorePack, SharePoint, and data pipelines.",
              },
              {
                h: "Security & Governance",
                p: "Role‑based access, audit trails, ALM/DevOps, environment strategy, performance, ADA/WCAG compliance.",
              },
            ].map((c, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="font-semibold text-lg">{c.h}</div>
                  <p className="mt-2 text-slate-600 text-sm">{c.p}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staffing */}
      <section id="staffing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Staffing & Vendor Management</h2>
          <p className="mt-2 text-slate-600">Right people, right time. We provide vetted consultants and manage vendors to keep delivery on track.</p>
          <ul className="mt-6 grid md:grid-cols-2 gap-3 text-slate-700 list-disc list-inside">
            <li>Contract, Contract‑to‑Hire, and Full‑Time placements</li>
            <li>Rapid shortlisting with technical screening</li>
            <li>Flexible rate models and transparent invoicing</li>
            <li>Compliance: I‑9, E‑Verify, background checks</li>
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
            <p className="mt-4 text-slate-700">
              We help organizations modernize operations on Microsoft Cloud. Our approach blends product thinking with
              strong engineering practices — small, focused teams that ship value fast and safely.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-2xl border bg-slate-50">Industry: IT Services & Staffing</div>
              <div className="p-4 rounded-2xl border bg-slate-50">Focus: Dynamics 365, Power Platform, Azure</div>
              <div className="p-4 rounded-2xl border bg-slate-50">HQ: USA • Remote‑friendly</div>
              <div className="p-4 rounded-2xl border bg-slate-50">Delivery: Agile/SAFe, CI/CD, Quality‑first</div>
            </div>
          </div>
          <div className="rounded-3xl p-1" style={{ background: `linear-gradient(135deg, ${BRAND.primary}, ${BRAND.accent})` }}>
            <div className="rounded-2xl bg-white p-6 h-full">
              <h3 className="font-semibold">Why choose us</h3>
              <ul className="mt-3 space-y-2 text-slate-700 text-sm">
                <li>• Deep Microsoft ecosystem expertise</li>
                <li>• Proven delivery playbooks and governance</li>
                <li>• Security & compliance baked in</li>
                <li>• Transparent communication and outcomes</li>
              </ul>
              <a href="#contact" className="mt-6 inline-block"><Button className="rounded-2xl">Let’s talk</Button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section id="culture" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Culture</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[{
              t: "Integrity in Action",
              d: "We build trust through transparency and accountability.",
            },{
              t: "Innovation that Delivers",
              d: "We embrace new ideas to deliver measurable business results.",
            },{
              t: "Partnership for Progress",
              d: "We grow together with our employees, clients, and vendors.",
            }].map((c, i) => (
              <Card key={i} className="rounded-2xl">
                <CardContent className="p-6">
                  <div className="font-semibold text-lg">{c.t}</div>
                  <p className="mt-2 text-slate-600 text-sm">{c.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="mt-2 text-slate-600">Tell us about your project. We typically reply within 1 business day.</p>

          {!submitted ? (
            <form
              className="mt-8 grid md:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                // Replace with your Formspree endpoint or backend route
                fetch("https://formspree.io/f/your-id", { method: "POST", body: data }).then(() => setSubmitted(true)).catch(() => setSubmitted(true));
              }}
            >
              <input required name="name" placeholder="Your name" className="w-full rounded-xl border p-3" />
              <input required type="email" name="email" placeholder="Work email" className="w-full rounded-xl border p-3" />
              <input name="company" placeholder="Company" className="w-full rounded-xl border p-3 md:col-span-2" />
              <textarea required name="message" placeholder="What can we help you build?" rows={5} className="w-full rounded-xl border p-3 md:col-span-2" />
              <div className="md:col-span-2">
                <Button type="submit" className="rounded-2xl">Send Message</Button>
              </div>
            </form>
          ) : (
            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border">
              <div className="font-semibold">Thanks! Your message has been sent.</div>
              <p className="text-sm text-slate-600 mt-1">We’ll get back to you soon. If it’s urgent, call us at {BRAND.phone}.</p>
            </div>
          )}

          <div className="mt-8 text-sm text-slate-600">
            Or reach us directly: <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a> • {BRAND.phone}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
