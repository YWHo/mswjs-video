export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { server } = require("./mock/node");
    server.listen();
    console.log('\nMSW server listening...\n\n');
  }
}
