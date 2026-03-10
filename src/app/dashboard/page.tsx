"use client";

import OODAVisualizer from '@/components/OODAVisualizer';
import AgentOrchestrator from '@/components/AgentOrchestrator';
import LWSManager from '@/components/LWSManager';
import SmartNotepad from '@/components/SmartNotepad';
import BYOKSettings from '@/components/BYOKSettings';
import InvictusChat from '@/components/InvictusChat';
import { useProtocol } from '@/lib/protocol';
import { useState } from 'react';

export default function DashboardPage() {
    const p = useProtocol();
    const [editing, setEditing] = useState<string | null>(null);

    const EditableText = ({ value, onSave, label }: { value: string, onSave: (v: string) => void, label: string }) => {
        const [temp, setTemp] = useState(value);
        if (editing === label) {
            return (
                <input
                    autoFocus
                    className="bg-primary/10 border-b border-primary outline-none px-1 w-full"
                    value={temp}
                    onChange={(e) => setTemp(e.target.value)}
                    onBlur={() => { onSave(temp); setEditing(null); }}
                    onKeyDown={(e) => e.key === 'Enter' && (onSave(temp), setEditing(null))}
                />
            );
        }
        return <span onClick={() => setEditing(label)} className="cursor-edit hover:text-primary transition-colors">{value}</span>;
    };

    return (
        <main className="min-h-screen p-8">
            <div className="max-w-[1600px] mx-auto text-foreground">
                <header className="mb-12 flex justify-between items-end border-border border-b pb-6">
                    <div>
                        <h1 className="text-5xl font-extrabold tracking-tighter glow-text mb-2 uppercase">Invictus OS</h1>
                        <p className="text-secondary font-medium italic opacity-70">
                            &quot;<EditableText value={p.quote} onSave={p.setQuote} label="quote" />&quot;
                        </p>
                    </div>
                    <div className="text-right">
                        <span className="text-xs font-mono text-primary block uppercase tracking-tighter">
                            <EditableText value={p.stewardshipNode} onSave={p.setStewardshipNode} label="node" />
                        </span>
                        <span className="text-sm font-bold">
                            <EditableText value={p.provisionStatus} onSave={p.setProvisionStatus} label="status" />
                        </span>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Strategy & Loop */}
                    <section className="lg:col-span-3 space-y-8">
                        <OODAVisualizer />

                        <div className="glass-panel p-6 border-l-4 border-l-primary">
                            <h2 className="text-xl font-heading font-bold mb-4 text-primary">Intelligence Protocol</h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-primary/5 border border-primary/10 relative group">
                                    <span className="text-[10px] font-mono text-primary block mb-1 uppercase tracking-widest">Core Narrative</span>
                                    <p className="text-sm leading-relaxed italic">
                                        &quot;<EditableText value={p.coreNarrative} onSave={p.setCoreNarrative} label="narrative" />&quot;
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="p-4 bg-secondary/10 border border-secondary/20">
                                        <span className="text-[10px] font-mono text-secondary block mb-1 uppercase tracking-widest">Strategic Targets</span>
                                        <ul className="text-[11px] list-disc list-inside space-y-1 opacity-80">
                                            {p.strategicTargets.map((pt, i) => (
                                                <li key={i}>
                                                    <EditableText
                                                        value={pt}
                                                        onSave={(newVal) => {
                                                            const newTargets = [...p.strategicTargets];
                                                            newTargets[i] = newVal;
                                                            p.setStrategicTargets(newTargets);
                                                        }}
                                                        label={`target-${i}`}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Middle Column: Execution & Research */}
                    <section className="lg:col-span-6 space-y-8">
                        <InvictusChat />
                        <SmartNotepad />
                        <AgentOrchestrator />
                    </section>

                    {/* Right Column: Systems Control */}
                    <section className="lg:col-span-3 space-y-8">
                        <LWSManager />
                        <BYOKSettings />

                        <div className="glass-panel p-6 bg-primary/5">
                            <h2 className="text-lg font-heading font-bold mb-4">World Monitor</h2>
                            <div className="aspect-square w-full bg-secondary/20 flex items-center justify-center relative overflow-hidden group border border-border">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                                <div className="z-10 text-center p-4">
                                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] mb-2">Initialize 3D Renders</p>
                                    <button className="text-[10px] font-bold px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest shadow-2xl">
                                        Load Globe
                                    </button>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
                                    <div className="w-4/5 h-4/5 border-2 border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                                    <div className="absolute w-4/5 h-1/2 border border-primary/10 rounded-[100%] rotate-45"></div>
                                    <div className="absolute w-4/5 h-1/2 border border-primary/10 rounded-[100%] -rotate-45"></div>
                                </div>
                            </div>
                            <p className="text-[10px] text-secondary mt-4 italic text-center uppercase tracking-widest">Palantir-Style Mixed Recon</p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
