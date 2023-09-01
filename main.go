package main

import (
    "embed"

    "github.com/wailsapp/wails/v2"
    // "github.com/wailsapp/wails/v2/pkg/runtime"
    // "github.com/wailsapp/wails/v2/pkg/menu"
    // "github.com/wailsapp/wails/v2/pkg/menu/keys"
    "github.com/wailsapp/wails/v2/pkg/options"
    "github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
    // Create an instance of the app structure
    app := NewApp()

    // appMenu := menu.NewMenu()
    // fileMenu := appMenu.AddSubmenu("File")
    // fileMenu.AddText("&Open", keys.CmdOrCtrl("o"), func(_ *menu.CallbackData) {})
    // fileMenu.AddSeparator()
    // fileMenu.AddText("&Quit", keys.CmdOrCtrl("q"), func(_ *menu.CallbackData) {
    //     runtime.Quit(app.ctx)
    // })

    // Create application with options
    err := wails.Run(&options.App{
        Title:  "myproject",
        Width:  1024,
        Height: 768,
        AssetServer: &assetserver.Options{
            Assets: assets,
        },
        // Menu: appMenu,
        // BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
        OnStartup:        app.startup,
        Bind: []interface{}{
            app,
        },
    })

    if err != nil {
        println("Error:", err.Error())
    }
}
