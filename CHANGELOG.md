# Changelog

## [Unreleased]

### Added
- Curated context-window and maximum-output metadata for all 24 CosmosHub models
- Provider source URLs and knowledge-cutoff metadata for documented GPT models
- Conservative fallback limits for unknown models

### Changed
- Replace model-ID limit heuristics with the checked-in metadata catalog

## [1.0.0] - 2026-07-17

### Added
- Initial release
- Dynamic model discovery from CosmosHub `/v1/models` API
- Automatic reasoning flag detection (opus/sonnet/pro/max/gpt-5 models)
- Verification logging system (requests/responses/tools/usage)
- `/verify-model` command for self-identification probe
- `/verify-deep` command for knowledge cutoff probes
- Fallback to minimal set if API unreachable
