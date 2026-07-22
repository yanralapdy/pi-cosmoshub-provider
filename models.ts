export type CosmosHubModelMetadata = {
  /** Total context capacity in tokens, including generated output. */
  contextWindow: number;
  /** Maximum generated output tokens. */
  maxTokens: number;
  knowledgeCutoff?: string;
  source?: string;
};

/**
 * Curated limits for models currently returned by CosmosHub.
 * CosmosHub's /v1/models does not publish these values, so they come from
 * provider documentation or gateway-specific metadata.
 */
export const COSMOSHUB_MODEL_METADATA: Record<string, CosmosHubModelMetadata> = {
  "claude-haiku-4.5": { contextWindow: 200_000, maxTokens: 64_000 },
  "claude-opus-4.8": { contextWindow: 1_000_000, maxTokens: 128_000 },
  "claude-sonnet-4.5": { contextWindow: 200_000, maxTokens: 64_000 },
  "claude-sonnet-5": { contextWindow: 1_000_000, maxTokens: 128_000 },
  "deepseek-3.2": { contextWindow: 163_840, maxTokens: 65_536 },
  "deepseek-v4-flash": { contextWindow: 1_000_000, maxTokens: 384_000 },
  "deepseek-v4-pro": { contextWindow: 1_000_000, maxTokens: 384_000 },
  "gemini-3.1-pro": { contextWindow: 1_048_576, maxTokens: 65_536 },
  "gemini-3.5-flash": { contextWindow: 1_048_576, maxTokens: 65_536 },
  "gemini-3.6-flash": {
    contextWindow: 1_048_576,
    maxTokens: 65_536,
    source: "https://ai.google.dev/gemini-api/docs/models/gemini-3.6-flash",
  },
  "glm-5.2": { contextWindow: 1_000_000, maxTokens: 131_072 },
  "gpt-5.5": {
    contextWindow: 1_050_000,
    maxTokens: 128_000,
    knowledgeCutoff: "2025-12-01",
    source: "https://developers.openai.com/api/docs/models/gpt-5.5",
  },
  "gpt-5.6-luna": {
    contextWindow: 1_050_000,
    maxTokens: 128_000,
    knowledgeCutoff: "2026-02-16",
    source: "https://developers.openai.com/api/docs/models/gpt-5.6-luna",
  },
  "gpt-5.6-sol": {
    contextWindow: 1_050_000,
    maxTokens: 128_000,
    knowledgeCutoff: "2026-02-16",
    source: "https://developers.openai.com/api/docs/models/gpt-5.6-sol",
  },
  "gpt-5.6-terra": {
    contextWindow: 1_050_000,
    maxTokens: 128_000,
    knowledgeCutoff: "2026-02-16",
    source: "https://developers.openai.com/api/docs/models/gpt-5.6-terra",
  },
  "kimi-k2.7-code": { contextWindow: 262_144, maxTokens: 262_144 },
  "kimi-k3": {
    contextWindow: 1_048_576,
    maxTokens: 1_048_576,
    source: "https://platform.kimi.ai/docs/guide/kimi-k3-quickstart#important-limits",
  },
  "mimo-v2.5": { contextWindow: 1_048_576, maxTokens: 131_072 },
  "mimo-v2.5-pro": { contextWindow: 1_048_576, maxTokens: 131_072 },
  // Conservative value: CosmosHub reports this model as a combo route.
  "minimax-m2.5": { contextWindow: 196_608, maxTokens: 24_576 },
  "minimax-m3": {
    contextWindow: 1_000_000,
    maxTokens: 128_000,
    source: "https://platform.minimax.io/docs/api-reference/api-overview",
  },
  "muse-spark-1.1": { contextWindow: 1_000_000, maxTokens: 32_000 },
  // Conservative value based on the documented 256K/32K serving limit.
  "nemotron-3-super": { contextWindow: 256_000, maxTokens: 32_000 },
  "qwen-3.7-max": { contextWindow: 1_000_000, maxTokens: 65_536 },
};

export const COSMOSHUB_DEFAULT_MODEL_METADATA: CosmosHubModelMetadata = {
  contextWindow: 128_000,
  maxTokens: 8_192,
};
