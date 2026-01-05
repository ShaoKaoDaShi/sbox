import "zx/globals";

const main = async () => {
  try {
    await $`pkill -f pnpm run dev`;
  } catch (err) {
    console.error("Error stopping pnpm dev processes:", err);
    process.exit(1);
  }
};

export default main;
