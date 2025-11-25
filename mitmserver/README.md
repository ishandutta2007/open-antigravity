# Open Antigravity - MITM Server

This is a man-in-the-middle (MITM) proxy server designed to intercept and inspect the network requests made by the official Antigravity application. It's a crucial tool for understanding the Antigravity API and for developing the Open Antigravity gateway.

## How it Works

The server is a simple Node.js application that uses the `http-proxy` library. It creates a proxy server that listens on a local port. When the Antigravity application is configured to use this proxy, all of its network traffic will pass through this server. The server logs the details of each request and response to the console, allowing you to see exactly what's happening under the hood.

## Installation

1.  Navigate to this directory:
    ```bash
    cd mitmserver
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

## Running the Server

1.  Start the server:
    ```bash
    npm start
    ```
    The server will start listening on port 8080.

## Configuring the Antigravity App

To use this proxy, you need to configure the official Antigravity application to send its requests to the proxy server instead of the real Antigravity backend. The exact method for this will depend on the Antigravity application itself. You may need to:

-   Change a setting in the application's configuration file.
-   Use a tool that intercepts system-wide network traffic and redirects it to the proxy.

**Important:** You will also need to update the `target` URL in `server.js` to point to the real Antigravity backend. The current placeholder is `http://localhost:3000`.

```javascript
// server.js
proxy.web(req, res, { target: 'https://real.antigravity.backend.com' }); // Change this URL
```

Once configured, you will see the requests and responses from the Antigravity app logged in your console.
