export interface ApiKeys {
    openai?: string;
    groq?: string;
    anthropic?: string;
    gemini?: string;
    openrouter?: string;
    huggingface?: string;
    sambanova?: string;
    ollama_url?: string; // Default http://localhost:11434
}

export interface UserWorkspace {
    id: string;
    userId: string;
    name: string;
    isPro: boolean;
    apiKeys: ApiKeys;
    currentFocus: string;
    guidingPrinciples: string[];
    lastActive: number;
}

export const INITIAL_FOCUS = "How do Reaganomics, communism, and AI interplay to shape social classes and current events in South Florida (Miami, Homestead, Key Largo)?";

export const INITIAL_PRINCIPLES = [
    "Systematic compassion",
    "Interconnected systems thinking",
    "Challenge embedded inequality",
    "Stewardship over extraction",
    "Transparent accountability"
];
