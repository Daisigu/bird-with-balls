module.exports = {
  apps: [
    {
      name: "Bird with Balls App",
      port: "3002",
      exec_mode: "fork",
      instances: 1,
      watch: true,
      autorestart: true,
      env: {
        NODE_ENV: "production",
      },
      max_restarts: 5,
      restart_delay: 5000,
      script: "./.output/server/index.mjs",
    },
  ],
};
