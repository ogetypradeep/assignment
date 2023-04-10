module.exports = {
  apps : [{
    name   : "todo-list-client",
    script : "./node_modules/react-scripts/bin/react-scripts.js",
    args: "--openssl-legacy-provider start",
    env: {
      "NODE_ENV": "development",
    }
  }]
}
