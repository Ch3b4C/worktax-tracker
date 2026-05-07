'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Upload, MapPin, Tunnel, CalendarDays, FileSpreadsheet, ShieldCheck, CreditCard, Bell, ChevronRight, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function WorkTaxTrackerPremium() {
  const [autoPay, setAutoPay] = useState(true);
  const tunnelRate = useMemo(() => (autoPay ? 'Peak £6.50 / Off-peak £2.50' : 'Manual payment rate'), [autoPay]);

  const stats = [
    { label: 'Monthly total', value: '£248.50', icon: CreditCard },
    { label: 'Congestion Charge', value: '£180.00', icon: MapPin },
    { label: 'Tunnel charges', value: '£68.50', icon: Tunnel },
    { label: 'Days worked', value: '17', icon: CalendarDays },
  ];

  const workDays = [
    { date: '07 May', postcode: 'E16', cc: 'Inside CC', tunnel: 'Blackwall', direction: 'SE → E', charge: '£6.50', status: 'Verified' },
    { date: '08 May', postcode: 'SE10', cc: 'Outside CC', tunnel: 'Silvertown', direction: 'E → SE', charge: '£2.50', status: 'Review' },
    { date: '09 May', postcode: 'W1', cc: 'Inside CC', tunnel: 'None', direction: '-', charge: '£15.00', status: 'Verified' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 py-6 space-y-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl bg-white/10 border border-white/10 grid place-items-center shadow-lg"><Car className="h-6 w-6" /></div>
            <div><h1 className="text-2xl font-bold tracking-tight">WorkTax Tracker</h1><p className="text-sm text-slate-400">CHEBAC personal business dashboard</p></div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-white hover:bg-white/10 flex items-center"><Bell className="h-4 w-4 mr-2" /> Alerts</button>
            <button className="rounded-2xl bg-white px-4 py-2 text-slate-950 hover:bg-slate-200 flex items-center"><Upload className="h-4 w-4 mr-2" /> Upload screenshots</button>
          </div>
        </header>

        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200"><ShieldCheck className="h-4 w-4" /> System ready for tracking</div>
                <div><h2 className="text-4xl md:text-5xl font-bold tracking-tight">Track work days, CC and tunnel charges automatically.</h2><p className="mt-4 max-w-2xl text-slate-300">Upload route screenshots, extract postcodes, detect Congestion Charge status, estimate Blackwall/Silvertown charges and export monthly reports.</p></div>
              </div>
              <div className="min-w-56 rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                <p className="text-sm text-slate-400">Vehicle profile</p><p className="mt-1 text-lg font-semibold">Large Van</p>
                <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl bg-white/5 p-3"><span className="text-sm">Auto Pay</span><button onClick={() => setAutoPay(!autoPay)} className={`relative h-8 w-14 rounded-full transition ${autoPay ? 'bg-emerald-500' : 'bg-slate-700'}`}><span className={`absolute top-1 h-6 w-6 rounded-full bg-white transition ${autoPay ? 'left-7' : 'left-1'}`} /></button></div>
                <p className="mt-3 text-xs text-slate-400">{tunnelRate}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold">Quick setup</h3>
            {['Create account', 'Add vehicle', 'Set Auto Pay', 'Upload first screenshots'].map((item, index) => <div key={item} className="flex items-center justify-between rounded-2xl bg-white/5 border border-white/10 p-4"><div className="flex items-center gap-3"><div className="h-8 w-8 rounded-full bg-white/10 grid place-items-center text-sm">{index + 1}</div><span className="text-sm">{item}</span></div>{index < 3 ? <CheckCircle2 className="h-5 w-5 text-emerald-300" /> : <ChevronRight className="h-5 w-5 text-slate-400" />}</div>)}
          </div>
        </motion.section>

        <section className="grid md:grid-cols-4 gap-4">
          {stats.map((stat) => { const Icon = stat.icon; return <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl p-5"><div className="h-10 w-10 rounded-2xl bg-white/10 grid place-items-center mb-4"><Icon className="h-5 w-5" /></div><p className="text-sm text-slate-400">{stat.label}</p><p className="mt-1 text-3xl font-bold">{stat.value}</p></div>; })}
        </section>

        <section className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-6 space-y-5">
            <div><h3 className="text-xl font-semibold">Create / edit profile</h3><p className="text-sm text-slate-400">Saved details used for automatic charge calculations.</p></div>
            <div className="grid gap-3"><input className="rounded-2xl bg-white/5 border border-white/10 text-white px-4 py-3" placeholder="Full name" /><input className="rounded-2xl bg-white/5 border border-white/10 text-white px-4 py-3" placeholder="Email" /><input className="rounded-2xl bg-white/5 border border-white/10 text-white px-4 py-3" placeholder="VRM / Registration number" /><input className="rounded-2xl bg-white/5 border border-white/10 text-white px-4 py-3" placeholder="Home postcode" /></div>
            <button className="w-full rounded-2xl bg-white text-slate-950 hover:bg-slate-200 px-4 py-3 font-medium">Save profile</button>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl p-6">
            <div className="flex items-center justify-between gap-4 mb-5"><div><h3 className="text-xl font-semibold">Recent work days</h3><p className="text-sm text-slate-400">OCR postcode detection + charge estimate</p></div><button className="rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 px-4 py-2 flex items-center"><FileSpreadsheet className="h-4 w-4 mr-2" /> Export</button></div>
            <div className="space-y-3">{workDays.map((day) => <div key={`${day.date}-${day.postcode}`} className="grid md:grid-cols-7 gap-3 items-center rounded-3xl border border-white/10 bg-slate-950/40 p-4 text-sm"><div className="font-semibold">{day.date}</div><div>{day.postcode}</div><div className="text-slate-300">{day.cc}</div><div className="text-slate-300">{day.tunnel}</div><div className="text-slate-300">{day.direction}</div><div className="font-semibold">{day.charge}</div><div className="flex justify-end"><span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs ${day.status === 'Verified' ? 'bg-emerald-400/10 text-emerald-200' : 'bg-amber-400/10 text-amber-200'}`}>{day.status === 'Verified' ? <CheckCircle2 className="h-3 w-3" /> : <AlertTriangle className="h-3 w-3" />}{day.status}</span></div></div>)}</div>
          </div>
        </section>
      </div>
    </main>
  );
}
