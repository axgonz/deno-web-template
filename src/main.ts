import { serve } from "https://deno.land/std@0.103.0/http/server.ts";

const port = 8080;
const app = serve({ port: port });
const hostname = (await Deno.readTextFile("/etc/hostname")).split("\n")[0];

const log_msg = `http://localhost:${port}`;
const app_msg = `Hello, I am ${hostname} listening on ${port}.\n`;

console.log(log_msg);
for await (const req of app) {
  req.respond({ body: app_msg });
}
