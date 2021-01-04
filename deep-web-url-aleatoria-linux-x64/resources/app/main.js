const { app, BrowserWindow } = require("electron");

// criando a janela e carregando o arquivo index.html
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 280,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.setMaximizable(false);
  win.setResizable(false);
  win.setMenuBarVisibility(false);
  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
