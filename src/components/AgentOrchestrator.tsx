"use client";

import { AgentClass } from '@/lib/types';

const AGENT_CLASSES: { type: AgentClass; role: string; authority: string }[] = [
    { type: 'SENTINEL', role: 'Observe & Detect', authority: 'No execution' },
    { type: 'ANALYST', role: 'Synthesize & Propose', authority: 'Zero execution' },
    { type: 'OPERATOR', role: 'Execute Approved Workflows', authority: 'Limited, reversible' },
    { type: 'STEWARD', role: 'Govern & Protect', authority: 'Override & Kill-switch' },
];

export default function AgentOrchestrator() {
    return (
        <div className="glass-panel p-6">
            <h2 className="text-xl font-bold mb-6 glow-text text-primary">Agent Orchestration</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {AGENT_CLASSES.map((agent) => (
                    <div key={agent.type} className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-mono text-primary tracking-tighter">{agent.type}</span>
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                        </div>
                        <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{agent.role}</h3>
                        <p className="text-[10px] text-secondary uppercase tracking-widest">{agent.authority}</p>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex gap-4">
                <button className="btn-primary text-xs flex-1">DEPLOY NEW AGENT</button>
                <button className="px-4 py-2 rounded-md border border-danger text-danger text-xs font-bold hover:bg-danger/10 transition-colors">KILL SWITCH</button>
            </div>
        </div>
    );
}
