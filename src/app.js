
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow()
{
	const winSettings = {
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true
		},
		icon: path.join(__dirname, 'icon.png')
	};

	// Creates the browser window
	const mainWindow = new BrowserWindow(winSettings);

	// No top menu
	mainWindow.setMenu(null);

	// Loads the main index file
	mainWindow.loadFile('index.html');

	// Open the inner developer console
	//mainWindow.webContents.openDevTools();
}

// When on ready, calls the create window function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () =>
{
	// For macOS
	if(process.platform !== 'darwin')
	{
		app.quit();
	}
});

