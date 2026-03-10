"use client";

const LWS_LAYERS = [
    { id: 1, name: 'Intent Definition', status: 'COMPLETE', rule: 'If intent is fuzzy, site does not ship.' },
    { id: 2, name: 'Page Archetype', status: 'PENDING', rule: 'Speed comes from constraint.' },
    { id: 3, name: 'Content Intelligence', status: 'PENDING', rule: 'AI drafts. Humans decide.' },
    { id: 4, name: 'Interface Execution', status: 'PENDING', rule: 'Design serves decisions.' },
    { id: 5, name: 'Evolution Layer', status: 'PENDING', rule: 'Websites are continuously improved.' },
];

export default function LWSManager() {
    return (
        <div className="glass-panel p-6">
            <h2 className="text-xl font-bold mb-6 glow-text text-primary">LWS Build Engine</h2>
            <div className="space-y-4">
                {LWS_LAYERS.map((layer) => (
                    <div key={layer.id} className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${layer.status === 'COMPLETE' ? 'bg-accent/20 border-accent text-accent' : 'bg-white/5 border-white/10 text-secondary'
                            }`}>
                            {layer.id}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-end">
                                <h3 className={`text-sm font-bold ${layer.status === 'COMPLETE' ? 'text-white' : 'text-secondary'}`}>
                                    {layer.name}
                                </h3>
                                <span className={`text-[10px] ${layer.status === 'COMPLETE' ? 'text-accent' : 'text-secondary'}`}>
                                    {layer.status}
                                </span>
                            </div>
                            <p className="text-[11px] text-secondary italic">{layer.rule}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-xs text-primary leading-relaxed">
                    <strong>Current Success Metric:</strong> Primary decision conversion target: 3%+ on londonosolutions.com
                </p>
            </div>
        </div>
    );
}
