import { Kuzzle, WebSocket } from "kuzzle-sdk";

const kuzzle = new Kuzzle(new WebSocket("http://localhost:7512"));

export const connectToKuzzle = async () => {
  try {
    await kuzzle.connect();
    console.log("✅ Connected to Kuzzle");
  } catch (error) {
    console.error("❌ Kuzzle connection error:", error);
  }
};

export default kuzzle;
