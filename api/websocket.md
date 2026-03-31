# WebSocket Protocol

RsClaw implements the OpenClaw WebSocket v3 protocol with 33+ methods. Compatible with the OpenClaw Control Panel (WebUI).

## Connection

```
ws://localhost:18888/ws
```

## Message Format

All messages are JSON:

```json
{
  "type": "method_name",
  "data": { ... }
}
```

## Methods

### Session Management

| Method | Direction | Description |
|--------|-----------|-------------|
| `chat` | Client -> Server | Send a chat message |
| `chat_stream` | Server -> Client | Streaming response chunks |
| `chat_end` | Server -> Client | End of response |
| `clear_session` | Client -> Server | Clear current session |
| `get_sessions` | Client -> Server | List all sessions |
| `get_history` | Client -> Server | Get session message history |
| `delete_session` | Client -> Server | Delete a session |

### Device & Pairing

| Method | Direction | Description |
|--------|-----------|-------------|
| `register_device` | Client -> Server | Register a new device |
| `pair` | Client -> Server | Submit pairing code |
| `get_devices` | Client -> Server | List paired devices |
| `revoke_device` | Client -> Server | Revoke a paired device |

### Configuration

| Method | Direction | Description |
|--------|-----------|-------------|
| `get_config` | Client -> Server | Get current configuration |
| `update_config` | Client -> Server | Update configuration |
| `get_models` | Client -> Server | List available models |
| `set_model` | Client -> Server | Change active model |

### Status

| Method | Direction | Description |
|--------|-----------|-------------|
| `get_status` | Client -> Server | Gateway status |
| `get_channels` | Client -> Server | Connected channels |
| `health` | Client -> Server | Health check |

### Agent Control

| Method | Direction | Description |
|--------|-----------|-------------|
| `spawn_agent` | Client -> Server | Spawn a sub-agent |
| `list_agents` | Client -> Server | List running agents |
| `kill_agent` | Client -> Server | Terminate an agent |

## Streaming Example

```javascript
const ws = new WebSocket('ws://localhost:18888/ws');

ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'chat',
    data: {
      message: 'Hello!',
      session_id: 'my-session',
      stream: true,
    }
  }));
};

ws.onmessage = (event) => {
  const msg = JSON.parse(event.data);
  switch (msg.type) {
    case 'chat_stream':
      process.stdout.write(msg.data.content);
      break;
    case 'chat_end':
      console.log('\n[Done]');
      break;
  }
};
```
