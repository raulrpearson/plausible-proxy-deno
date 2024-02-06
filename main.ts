const SCRIPT_PATH = "/pap/script.js";
const EVENT_PATH = "/pap/event";

Deno.serve((req, info) => {
  if (req.url.endsWith(SCRIPT_PATH)) {
    return fetch("https://plausible.io/js/plausible.js");
  } else if (req.url.endsWith(EVENT_PATH)) {
    const request = new Request(req);
    request.headers.delete("cookie");
    request.headers.set("X-Forwarded-For", info.remoteAddr.hostname);
    return fetch("https://plausible.io/api/event", request);
  }
  return new Response(null, { status: 404 });
});
