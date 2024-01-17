const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

/**
 * Log reader Electron main process
 */

/**
 * Window
 */
let win;

/**
 * Create the browser window
 */
function createWindow() {
    win = new BrowserWindow({ width: 1200, height: 700 });
    // Open dev tools for debugging
    win.webContents.openDevTools();
    // Hide the menu bar
    win.setMenu(null);
    // load the dist folder from Angular
    win.loadURL(
        url.format({
            pathname: path.join(__dirname, "/dist/log-reader/browser/index.html"),
            protocol: "file:",
            slashes: true
        })
    );
    // The following is optional and will open the DevTools:
    // win.webContents.openDevTools()
    win.on("closed", () => {
        win = null;
    });
}

/**
 * Create window on electron initialization
 */
app.on("ready", createWindow);

/**
 * Close when all windows are closed
 */
app.on("window-all-closed", () => {
    app.quit();
});