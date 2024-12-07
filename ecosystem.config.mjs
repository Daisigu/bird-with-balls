module.exports = {
  apps: [
    {
      name: "Bird with Balls App",
      port: "3002",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
