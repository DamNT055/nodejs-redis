// Connect Redis Server
import { createClient } from "redis";
const client = createClient();
client.on("error", (err) => console.log("Redis Client Error", err));
await client.connect({
  connectTimeout: 10000,
});
console.log("Connect Success");

// Store and Retrieve simple string.
await client.set("key", "value");
const value = await client.get("key");
console.log("Retrieve value:", value);

// Store and Retrieve a map
await client.hSet("user-name:123", {
  name: "Thanh Ng",
  surname: "Van",
  company: "DataNext",
  age: 29,
});
let user = await client.hGetAll("user-name:123");
console.log("Retrieve map:", JSON.stringify(user));

await client.quit();
