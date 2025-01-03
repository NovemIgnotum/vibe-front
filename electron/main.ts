import { app, BrowserWindow } from "electron";
import * as path from "path";
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";

let win: BrowserWindow | null;

function createWindow() {
  win = new BrowserWindow({
    width: 1920, // Largeur par défaut
    height: 1080, // Hauteur par défaut
    autoHideMenuBar: true, // Masquer automatiquement la barre de menu
    frame: true, // Maintient un cadre classique (comme un navigateur)
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Maximiser la fenêtre dès son ouverture
  win.maximize();

  // Charger l'application en fonction du mode (packagé ou développement)
  if (app.isPackaged) {
    win.loadURL(`file://${__dirname}/../index.html`);
  } else {
    win.loadURL("http://localhost:3000/index.html");

    win.webContents.openDevTools();

    // Hot Reloading
    require("electron-reload")(__dirname, {
      electron: path.join(
        __dirname,
        "..",
        "..",
        "node_modules",
        ".bin",
        "electron" + (process.platform === "win32" ? ".cmd" : "")
      ),
      forceHardReset: true,
      hardResetMethod: "exit",
    });
  }

  // Amélioration : Afficher uniquement quand la fenêtre est prête
  win.once("ready-to-show", () => {
    win?.show();
  });
}

// Application principale
app.whenReady().then(() => {
  // Installer les extensions de développement
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log("An error occurred: ", err));

  createWindow();

  // Réouvrir une fenêtre si l'application est activée et aucune fenêtre n'est ouverte (macOS)
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  // Quitter l'application lorsque toutes les fenêtres sont fermées (sauf macOS)
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
});
