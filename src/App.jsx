import React from 'react'
import Spline from '@splinetool/react-spline'
import { Check, Shield, Cloud, Zap, GitBranch, Layers, ArrowRight, Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = React.useState(false)
  const nav = [
    { href: '#features', label: 'Features' },
    { href: '#integrations', label: 'Integrations' },
    { href: '#dashboard', label: 'Dashboard' },
    { href: '#pricing', label: 'Pricing' },
  ]

  return (
    <div className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/20 bg-white/40 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-blue-500" />
              <span className="text-lg font-semibold tracking-tight">MultiCloudX</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                  {n.label}
                </a>
              ))}
              <a href="#get-started" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-slate-800 transition-colors">
                Get Started
              </a>
            </nav>

            <button aria-label="Toggle menu" className="md:hidden rounded-lg p-2 hover:bg-white" onClick={() => setOpen(!open)}>
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/30 px-6 py-4">
              <div className="flex flex-col gap-3">
                {nav.map((n) => (
                  <a key={n.href} href={n.href} className="text-sm text-slate-700">
                    {n.label}
                  </a>
                ))}
                <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Now supporting AWS, Azure, and GCP
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          MultiCloud & MultiAccount Management
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600 sm:text-lg">
          Centralize visibility, automate governance, and ship faster across every cloud. Integrations built-in. Dashboard ready on day one.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#get-started" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800">
            Start Free Trial <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#dashboard" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-slate-900 shadow hover:bg-slate-50">
            View Live Dashboard
          </a>
        </div>
        <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-1"><Shield className="h-4 w-4 text-emerald-600" /> SOC2-ready</div>
          <div className="flex items-center gap-1"><Zap className="h-4 w-4 text-indigo-600" /> 5‑min setup</div>
          <div className="flex items-center gap-1"><Cloud className="h-4 w-4 text-blue-600" /> MultiCloud-native</div>
        </div>
      </div>
    </section>
  )
}

function Logos() {
  const logos = ['AWS', 'Azure', 'GCP', 'Kubernetes', 'GitHub', 'Okta']
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">Trusted by modern teams</p>
        <div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div key={l} className="flex h-10 items-center justify-center rounded-md border border-slate-100 bg-white">
              <span className="text-sm font-semibold text-slate-500">{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    {
      icon: <Layers className="h-5 w-5 text-indigo-600" />, 
      title: 'Unified Inventory', 
      desc: 'Discover accounts, subscriptions, and projects across AWS, Azure, and GCP.'
    },
    {
      icon: <Shield className="h-5 w-5 text-emerald-600" />, 
      title: 'Guardrails & Compliance', 
      desc: 'Policies, budgets, and IAM insights with automated drift detection.'
    },
    {
      icon: <GitBranch className="h-5 w-5 text-blue-600" />, 
      title: 'Integration Hub', 
      desc: 'Plug into GitHub, Okta, Slack, and Terraform with zero-copy data.'
    },
    {
      icon: <Zap className="h-5 w-5 text-amber-600" />, 
      title: 'Automation', 
      desc: 'Runbooks and workflows to remediate issues and tag resources at scale.'
    },
  ]

  return (
    <section id="features" className="bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">All your clouds. One control plane.</h2>
          <p className="mt-3 text-slate-600">Designed for platform, FinOps, and security teams to move with confidence.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">{f.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-600">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Secure by default</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> Scales to thousands of accounts</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Integrations() {
  const providers = [
    { name: 'AWS', color: 'from-amber-500 to-yellow-500' },
    { name: 'Azure', color: 'from-blue-600 to-indigo-600' },
    { name: 'GCP', color: 'from-sky-500 to-blue-400' },
    { name: 'GitHub', color: 'from-slate-800 to-slate-900' },
    { name: 'Okta', color: 'from-cyan-500 to-blue-500' },
    { name: 'Kubernetes', color: 'from-violet-500 to-purple-500' },
  ]
  return (
    <section id="integrations" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Plug-and-play integrations</h2>
            <p className="mt-3 text-slate-600">Connect your clouds and tools in minutes. Ingest metadata, identities, spend, and posture with minimal permissions.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {providers.map((p) => (
                <div key={p.name} className={`rounded-xl p-4 text-center text-sm font-semibold text-white shadow bg-gradient-to-br ${p.color}`}>
                  {p.name}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="aspect-[4/3] w-full rounded-xl bg-white p-6 shadow-inner">
              <div className="grid h-full w-full grid-cols-3 gap-3">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="rounded-lg border border-slate-200 bg-slate-50" />
                ))}
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">Multiple little screens — aligned and as grid</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardPreview() {
  return (
    <section id="dashboard" className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">A dashboard your execs will love</h2>
          <p className="mt-3 text-slate-600">Real-time posture, spend, and usage by account and cloud with drill-downs and filters.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="flex flex-col gap-6 p-6 md:flex-row">
            <div className="md:w-2/3">
              <div className="h-64 rounded-xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 ring-1 ring-inset ring-slate-200" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-20 rounded-lg bg-slate-50 ring-1 ring-inset ring-slate-200" />
                ))}
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="space-y-3">
                {[
                  ['Accounts discovered', '1,482'],
                  ['Unattached volumes', '324'],
                  ['IAM risks', '18 open'],
                  ['Monthly cloud spend', '$126k'],
                  ['Resources without tags', '2,104'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="text-sm text-slate-600">{k}</span>
                    <span className="text-sm font-semibold text-slate-900">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    { name: 'Starter', price: '$0', tag: 'Free', features: ['Up to 3 accounts', 'Core dashboard', 'Email support'] },
    { name: 'Team', price: '$49', tag: 'Most Popular', features: ['Up to 50 accounts', 'Automation workflows', 'SSO (Okta/SAML)'] },
    { name: 'Enterprise', price: 'Let’s talk', tag: 'Custom', features: ['Unlimited accounts', 'Dedicated SRE', 'Private cloud deploy'] },
  ]
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Scale when you need to.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-transparent hover:ring-indigo-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">{t.tag}</span>
              </div>
              <p className="mt-4 text-3xl font-semibold text-slate-900">{t.price}<span className="text-sm font-normal text-slate-500">{t.price === '$0' ? '' : '/mo'}</span></p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-600" /> {f}</li>
                ))}
              </ul>
              <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">Choose {t.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="get-started" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-blue-500/10 to-cyan-400/10" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl bg-slate-900 p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Unify your clouds today</h3>
              <p className="mt-2 max-w-xl text-slate-300">Deploy in minutes. Bring every account into a single plane of glass with secure, least-privilege integrations.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-slate-900 shadow hover:bg-slate-50">Start Free</a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white shadow hover:bg-indigo-400">Book a Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-blue-500" />
            <span className="text-sm font-semibold tracking-tight">MultiCloudX</span>
          </a>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} MultiCloudX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Integrations />
      <DashboardPreview />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
