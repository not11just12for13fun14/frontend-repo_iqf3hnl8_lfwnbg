import React from 'react'
import { motion } from 'framer-motion'
import { Search, Bell, User, Cloud, Shield, Zap, Settings, Server, CreditCard, LineChart } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 16 } },
}

const pulse = {
  initial: { opacity: 0.6 },
  animate: {
    opacity: [0.6, 1, 0.6],
    transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Topbar */}
      <div className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-blue-500" />
            <a href="/" className="font-semibold hover:opacity-80 transition">MultiCloudX</a>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <Search className="h-4 w-4 text-slate-500" />
            <input placeholder="Search resources, accounts, tags…" className="w-64 bg-transparent text-sm outline-none placeholder:text-slate-400" />
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg p-2 hover:bg-slate-100"><Bell className="h-5 w-5" /></button>
            <button className="rounded-lg p-2 hover:bg-slate-100"><Settings className="h-5 w-5" /></button>
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1">
              <User className="h-5 w-5" />
              <span className="text-sm">you@company.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-12">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -12, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-500">Navigation</p>
            <nav className="space-y-1">
              {[
                { icon: <Cloud className="h-4 w-4" />, label: 'Overview' },
                { icon: <Server className="h-4 w-4" />, label: 'Resources' },
                { icon: <Shield className="h-4 w-4" />, label: 'Security' },
                { icon: <Zap className="h-4 w-4" />, label: 'Automation' },
                { icon: <CreditCard className="h-4 w-4" />, label: 'Spend' },
              ].map((i) => (
                <button key={i.label} className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-50">
                  <span className="flex items-center gap-2">{i.icon} {i.label}</span>
                  <span className="text-xs text-slate-400">⌘{i.label[0]}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-4 rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
            <p className="text-sm font-medium text-indigo-900">Tip</p>
            <p className="mt-1 text-xs text-indigo-900/80">Use tags to organize resources across accounts and clouds.</p>
          </div>
        </motion.aside>

        {/* Main content */}
        <div className="lg:col-span-9">
          {/* KPIs */}
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: 'Accounts discovered', value: '1,482', icon: Cloud },
              { label: 'IAM risks', value: '18 open', icon: Shield },
              { label: 'Unattached volumes', value: '324', icon: Server },
              { label: 'Monthly cloud spend', value: '$126k', icon: CreditCard },
            ].map(({ label, value, icon: Icon }) => (
              <motion.div key={label} variants={item} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <motion.div {...pulse} className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-500/10 to-blue-500/10" />
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
                    <p className="mt-2 text-2xl font-semibold">{value}</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-2 text-slate-700">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts row */}
          <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="xl:col-span-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium">Spend by Cloud</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-amber-700">AWS</span>
                  <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700">Azure</span>
                  <span className="rounded-full bg-sky-100 px-2 py-0.5 text-sky-700">GCP</span>
                </div>
              </div>
              <div className="h-64 rounded-xl bg-gradient-to-br from-indigo-500/10 to-blue-500/10 ring-1 ring-inset ring-slate-200" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium">Findings</p>
                <LineChart className="h-4 w-4 text-slate-500" />
              </div>
              <div className="space-y-2">
                {[
                  ['Public S3 buckets', '4'],
                  ['Over-permissive roles', '7'],
                  ['Unencrypted volumes', '12'],
                  ['Idle IPs', '22'],
                ].map(([name, count]) => (
                  <motion.div key={name} initial={{ scale: 0.96, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ type: 'spring', stiffness: 180, damping: 18 }} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                    <span className="text-sm">{name}</span>
                    <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs">{count}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Resources table placeholder */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <p className="text-sm font-medium">Resources</p>
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full bg-slate-100 px-2 py-0.5">Filter</span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5">Sort</span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-3 p-4 text-xs font-medium text-slate-500">
              <span className="col-span-3">Name</span>
              <span className="col-span-2">Cloud</span>
              <span className="col-span-2">Account</span>
              <span className="col-span-2">Region</span>
              <span className="col-span-1">Cost</span>
              <span className="col-span-2">Tags</span>
            </div>
            <div className="divide-y divide-slate-100">
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="grid grid-cols-12 gap-3 p-4 text-sm">
                  <span className="col-span-3">resource-{i}.prod</span>
                  <span className="col-span-2">{i % 3 === 0 ? 'AWS' : i % 3 === 1 ? 'Azure' : 'GCP'}</span>
                  <span className="col-span-2">acct-{1000 + i}</span>
                  <span className="col-span-2">{i % 2 ? 'us-west-2' : 'eastus'}</span>
                  <span className="col-span-1">${(Math.random() * 200).toFixed(0)}</span>
                  <span className="col-span-2">
                    <span className="mr-1 rounded bg-slate-100 px-1.5 py-0.5 text-xs">env:prod</span>
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs">team:core</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
