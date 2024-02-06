# plausible-proxy-deno

> Simple Plausible Analytics proxy for Deno

For background on why you might want to proxy your Plausible Analytics, check out the
[docs](https://plausible.io/docs/proxy/introduction).

After deploying, use this script in the sites that you'd like to track:

```html
<script
  defer
  data-domain="your-domain.com"
  data-api="https://your-deno-subdomain.deno.dev/pap/event"
  src="https://your-deno-subdomain.deno.dev/pap/script.js"
></script>
```

Notice that the paths on the `data-api` and `src` fields can (and should) be customised to diminish
the chances that your script is blocked, but notice that those two values need to remain in sync
with the values in the worker script:

```typescript
const SCRIPT_PATH = "/pap/script.js";
const EVENT_PATH = "/pap/event";
```
