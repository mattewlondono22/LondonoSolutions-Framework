"use client";

import { useState } from 'react';
import { OODAStep } from '@/lib/types';

const STEPS: { key: OODAStep; label: string; description: string }[] = [
    { key: 'OBSERVE', label: 'Observe', description: 'Collect structured signals from operations and market.' },
    { key: 'ORIENT', label: 'Orient', description: 'Transform signals into context. Frame scenarios and dependencies.' },
    { key: 'DECIDE', label: 'Decide', description: 'Human authority selects direction and approves boundaries.' },
    { key: 'ACT', label: 'Act', description: 'Execute approved actions through governed workflows.' },
    { key: 'LEARN', label: 'Learn', description: 'Capture outcomes and feed back into models and records.' },
];

export default function OODAVisualizer() {
    const [activeStep, setActiveStep] = useState<OODAStep>('OBSERVE');

    return (
        <div className="glass-panel p-6">
            <h2 className="text-xl font-bold mb-6 glow-text text-primary">Governed OODA Loop</h2>
            <div className="space-y-8">
                {STEPS.map((step) => (
                    <div
                        key={step.key}
                        className={`ooda-step ${activeStep === step.key ? 'active' : 'opacity-50'}`}
                        onClick={() => setActiveStep(step.key)}
                        role="button"
                    >
                        <h3 className="font-semibold text-lg">{step.label}</h3>
                        <p className="text-sm text-secondary mt-1">{step.description}</p>
                    </div>
                ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border">
                <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-widest text-secondary">Control Point</span>
                    <span className="text-xs font-mono text-accent">HUMAN_AUTHORITY_REQUIRED</span>
                </div>
            </div>
        </div>
    );
}
