const http = require("http");
const dotenv = require("dotenv");
const fs = require("fs");

function loadEnv() {
  dotenv.config();
  dotenv.config({ path: ".env.tenant" });
}

loadEnv();

const server = http.createServer((req, res) => {
  const keys = Object.keys(process.env).filter((key) =>
    key.startsWith("TENANT_ACTIVE")
  );

  const resultEnv = keys.reduce((acc, key) => {
    acc[key] = process.env[key];
    return acc;
  }, {});

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(resultEnv, null, 2));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Listen for custom signal (e.g., SIGUSR1)
process.on("SIGUSR1", () => {
  console.log("SIGUSR1 received, reloading environment variables...");
  loadEnv();
  console.log("Environment variables reloaded.");
});

fs.watch("/env/.env.tenant", () => {
  console.log(
    "/env/.env.tenant file changed, reloading environment variables..."
  );
  loadEnv();
});

fs.watch(".env.tenant", () => {
  console.log(".env.tenant file changed, reloading environment variables...");
  loadEnv();
});
