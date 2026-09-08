# Telcel

Dual-client plugin for the user's Telcel account operations. It helps an
agent distinguish package expiry from exhausted data, inspect live Mi Telcel
state, choose the least-committing suitable data option, complete an explicitly
authorized purchase or package change, and verify the result.

The plugin contains no phone number, payment data, session material, message
content, or account snapshot. Those remain in their owning systems and are read
only when needed for a current task.

## Capabilities

- Read a bounded set of recent Telcel messages through the available Messages
  integration.
- Verify active package, remaining navigation data, expiry, recurrence, and
  Saldo Amigo in Mi Telcel.
- Select between renewal funding, a one-off Internet Amigo add-on, and a
  recurring package change using live terms and current usage evidence.
- Complete explicitly authorized purchases through official Telcel channels
  and read back the final account state.

## Validation

```bash
npm test
```
