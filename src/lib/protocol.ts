"use client";

import { create } from 'zustand';

interface ProtocolState {
    coreNarrative: string;
    quote: string;
    stewardshipNode: string;
    provisionStatus: string;
    strategicTargets: string[];
    setCoreNarrative: (val: string) => void;
    setQuote: (val: string) => void;
    setStewardshipNode: (val: string) => void;
    setProvisionStatus: (val: string) => void;
    setStrategicTargets: (targets: string[]) => void;
}

export const useProtocol = create<ProtocolState>((set) => ({
    coreNarrative: "You don't enter elite networks by asking to join. You enter by solving a problem they care about.",
    quote: "Identify where they're frictional. Become specific.",
    stewardshipNode: "Stewardship Node",
    provisionStatus: "PROVISION ENTRUSTED // v2.0",
    strategicTargets: [
        "Real Estate Underwriting",
        "Family Office AI",
        "Private Healthcare Automation"
    ],
    setCoreNarrative: (val) => set({ coreNarrative: val }),
    setQuote: (val) => set({ quote: val }),
    setStewardshipNode: (val) => set({ stewardshipNode: val }),
    setProvisionStatus: (val) => set({ provisionStatus: val }),
    setStrategicTargets: (targets) => set({ strategicTargets: targets }),
}));
