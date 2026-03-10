export type OODAStep = 'OBSERVE' | 'ORIENT' | 'DECIDE' | 'ACT' | 'LEARN';

export interface OODASet {
  id: string;
  step: OODAStep;
  input: string;
  analysis?: string;
  options?: string[];
  decision?: string;
  outcome?: string;
  timestamp: number;
}

export type AgentClass = 'SENTINEL' | 'ANALYST' | 'OPERATOR' | 'STEWARD';

export interface Agent {
  id: string;
  name: string;
  class: AgentClass;
  status: 'IDLE' | 'WORKING' | 'ALERT';
  owner: string;
  authorityBoundary: string;
}

export const COMMANDER_INTENT = "AI expands analysis, leaders retain authority, operations stay governed.";
