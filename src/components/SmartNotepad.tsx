"use client";

import { useState } from 'react';

export default function SmartNotepad() {
    const [content, setContent] = useState<string>('');
    const [isResearching, setIsResearching] = useState(false);

    const handleResearch = () => {
        setIsResearching(true);
        // Logic for Invictus Smart Research would go here
        setTimeout(() => setIsResearching(false), 2000);
    };

    return (
        <div className="glass-panel flex flex-col h-[500px]">
            <div className="p-4 border-b border-border flex justify-between items-center bg-white/30">
                <h2 className="font-heading font-bold text-primary tracking-tighter">Smart Intelligence Ledger</h2>
                <div className="flex gap-2">
                    <button
                        onClick={handleResearch}
                        className={`text-[10px] font-bold px-3 py-1 border border-primary text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest ${isResearching ? 'animate-pulse' : ''}`}
                    >
                        {isResearching ? 'Synthesizing...' : 'Invictus Research'}
                    </button>
                    <button className="text-[10px] font-bold px-3 py-1 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all uppercase tracking-widest">
                        Save Artifact
                    </button>
                </div>
            </div>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Input raw signals or analyze: 
• Federal monetary policy
• Asset inflation
• Global liquidity cycles..."
                className="flex-1 p-6 bg-transparent outline-none resize-none font-mono text-sm leading-relaxed placeholder:opacity-30"
                onMouseUp={() => {
                    const selection = window.getSelection()?.toString();
                    if (selection) {
                        console.log('Selected for research:', selection);
                    }
                }}
            />
            <div className="p-2 border-t border-border bg-white/10 flex justify-between items-center px-4">
                <span className="text-[9px] font-mono text-secondary uppercase">Memory Sync: Active</span>
                <span className="text-[9px] font-mono text-primary uppercase">Tokens: 2.3k</span>
            </div>
        </div>
    );
}
