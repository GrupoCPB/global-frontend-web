module.exports = {
  apps: [
    {
      name: "sa_page_local",
      mode: "cluster",
      script: "./server.js",
      watch: true,
      env_development: {
        PORT: 3005,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 3005,
        NODE_ENV: "production",
      },
    },
  ],
};
