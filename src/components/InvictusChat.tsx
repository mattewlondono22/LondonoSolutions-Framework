"use client";

import { useState, useEffect } from 'react';
import { useProtocol } from '@/lib/protocol';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export default function InvictusChat() {
    const p = useProtocol();
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: `Invictus Online. Protocol Acknowledged: "${p.coreNarrative}". Provide signal.` }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        // Acknowledge protocol changes
        setMessages(prev => [...prev, {
            role: 'assistant',
            content: `Protocol Update Detected. Core Narrative synchronized: "${p.coreNarrative}". Analyzing new strategic parameters.`
        }]);
    }, [p.coreNarrative]);

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessages: Message[] = [...messages, { role: 'user', content: input }];
        setMessages(newMessages);
        setInput('');
        setIsTyping(true);

        // Simulated Invictus Response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Understood. Analyzing friction points. You enter elite networks by solving problems they care about. I am processing your request through the stewardship lens."
            }]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="glass-panel flex flex-col h-[600px] border-l-2 border-l-primary/30">
            <div className="p-4 border-b border-border bg-primary/5 flex justify-between items-center">
                <h2 className="font-heading font-bold text-primary tracking-widest text-sm uppercase">Direct Recon // Invictus</h2>
                <span className="text-[9px] font-mono text-secondary animate-pulse uppercase">Sync: Active</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-area">
                {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[85%] p-3 text-xs font-mono leading-relaxed ${m.role === 'user'
                            ? 'bg-primary/10 border border-primary/20 text-foreground'
                            : 'bg-secondary/10 border border-secondary/20 text-foreground italic'
                            }`}>
                            <span className="block text-[8px] opacity-40 mb-1 uppercase tracking-tighter">
                                {m.role === 'user' ? 'Steward' : 'Invictus'}
                            </span>
                            {m.content}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="text-[10px] font-mono text-primary animate-pulse italic">Invictus is synthesizing...</div>
                )}
            </div>

            <div className="p-4 border-t border-border bg-white/5">
                <div className="flex gap-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="State your objective..."
                        className="flex-1 bg-transparent border-b border-border p-2 text-xs font-mono outline-none focus:border-primary transition-all"
                    />
                    <button
                        onClick={handleSend}
                        className="text-[10px] font-bold px-4 py-2 bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest"
                    >
                        Execute
                    </button>
                </div>
            </div>
        </div>
    );
}
