# pi-cosmoshub-provider

Dynamic provider bridge for [CosmosHub](https://api.cosmoshub.tech) in the pi coding agent.

## Features

- **Auto-discovery**: Fetches models from `https://api.cosmoshub.tech/v1/models` at startup
- **Zero maintenance**: CosmosHub adds models → `/reload` in pi → models appear
- **Verification logging**: Built-in request/response/tool logging for debugging provider behavior
- **Custom commands**: `/verify-model` and `/verify-deep` for model identity probes

## Setup

### 1. Get API key

Sign up at CosmosHub and obtain your API key.

### 2. Set environment variable

```bash
export COSMOSHUB_API_KEY="your-api-key-here"
```

Add to `~/.zshrc` or `~/.bashrc` to persist.

### 3. Install in pi

Add to `~/.config/pi/agent/settings.json`:

```json
{
  "packages": [
    "git:github.com/yanralapdy/pi-cosmoshub-provider"
  ]
}
```

Or symlink for local development:

```bash
ln -s ~/sites/js/node/pi-cosmoshub-provider/index.ts ~/.pi/agent/extensions/cosmoshub.ts
```

### 4. Reload pi

```
/reload
/model
# Select cosmoshub/claude-opus-4.8 or any model
```

## Models

All models from CosmosHub's `/v1/models` endpoint are registered. Current catalog includes:
- Claude: `claude-opus-4.8`, `claude-sonnet-5`
- GPT: `gpt-5.5`, `gpt-5.6-luna`, `gpt-5.6-sol`, `gpt-5.6-terra`
- Chinese models: `qwen-3.7-max`, `glm-5.2`, `deepseek-v4-pro`, `kimi-k2.7-code`
- Others: `gemini-3.5-flash`, `mimo-v2.5-pro`, `grok-4.5`

## Verification Commands

### `/verify-model`
Ask the current model to self-identify (model name, version, creator, cutoff date).

### `/verify-deep`
Run knowledge cutoff probes (elections, products, company info) to detect model identity.

## Logging

All requests/responses are logged to `~/.pi/agent/logs/cosmoshub-verify-<timestamp>.log` including:
- Request model selection
- Response headers (reveals real model via `x-model-id`)
- Tool calls and results
- Token usage (tokenizer fingerprinting)
- Model response text

## License

MIT
