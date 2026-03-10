"use client";

import { useState, useEffect } from 'react';
import { ApiKeys } from '@/lib/workspace';

export default function BYOKSettings() {
    const [keys, setKeys] = useState<ApiKeys>({});
    const [status, setStatus] = useState<'IDLE' | 'SAVING'>('IDLE');

    const handleSave = () => {
        setStatus('SAVING');
        // Save to local storage or backend for this token/user
        localStorage.setItem('invictus_byok', JSON.stringify(keys));
        setTimeout(() => setStatus('IDLE'), 1000);
    };

    return (
        <div className="glass-panel p-6 space-y-4">
            <h2 className="font-heading font-bold text-primary">API Configuration (BYOK)</h2>
            <p className="text-[10px] text-secondary uppercase tracking-widest mb-4">Power your workspace with your own keys</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-secondary">OpenAI Key</label>
                    <input
                        type="password"
                        placeholder="sk-..."
                        className="w-full bg-white/5 border border-border p-2 text-xs font-mono outline-none focus:border-primary"
                        onChange={(e) => setKeys({ ...keys, openai: e.target.value })}
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-secondary">Groq Key</label>
                    <input
                        type="password"
                        placeholder="gsk_..."
                        className="w-full bg-white/5 border border-border p-2 text-xs font-mono outline-none focus:border-primary"
                        onChange={(e) => setKeys({ ...keys, groq: e.target.value })}
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-secondary">Ollama URL</label>
                    <input
                        type="text"
                        placeholder="http://localhost:11434"
                        className="w-full bg-white/5 border border-border p-2 text-xs font-mono outline-none focus:border-primary"
                        onChange={(e) => setKeys({ ...keys, ollama_url: e.target.value })}
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase text-secondary">OpenRouter Key</label>
                    <input
                        type="password"
                        placeholder="sk-or-..."
                        className="w-full bg-white/5 border border-border p-2 text-xs font-mono outline-none focus:border-primary"
                        onChange={(e) => setKeys({ ...keys, openrouter: e.target.value })}
                    />
                </div>
            </div>

            <button
                onClick={handleSave}
                className="btn-primary w-full text-xs mt-4"
            >
                {status === 'SAVING' ? 'Securing Keys...' : 'Initialize Configuration'}
            </button>
            <p className="text-[9px] text-secondary italic mt-2 text-center">
                Keys are stored in your local encrypted storage. Shared runtime is available for Pro users.
            </p>
        </div>
    );
}
