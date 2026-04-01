# API Reference

RsClaw exposes an OpenAI-compatible REST API and a WebSocket protocol for real-time communication.

## REST API

OpenAI-compatible endpoints for integration with existing tools and SDKs.

- [REST API Reference](/api/rest) -- `/v1/chat/completions`, `/v1/models`, health, webhooks

## WebSocket Protocol

Real-time bidirectional communication, compatible with OpenClaw WebUI.

- [WebSocket Protocol](/api/websocket) -- 33+ methods, streaming, device pairing

## Base URL

```
http://localhost:18888    # default
http://localhost:18889    # --dev mode
```

## Authentication

Currently no authentication required for local connections. Configure `gateway.bind` to control access:

```json5
{
  gateway: {
    bind: "loopback",   // localhost only (default)
    // bind: "0.0.0.0", // all interfaces (use with caution)
  },
}
```
