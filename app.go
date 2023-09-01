package main

import (
    "context"
    "os"
    "runtime"
    "path"

    htgotts "github.com/hegedustibor/htgo-tts"
    // voices "github.com/hegedustibor/htgo-tts/voices"
)

// App struct
type App struct {
    ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
    return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
    a.ctx = ctx
}

func (a *App) TextToSpeech(text, language string) {
    var userHome string
    if runtime.GOOS == "windows" {
        userHome = os.Getenv("USERPROFILE")
    } else {
        userHome = os.Getenv("HOME")
    }

    folderPath := path.Join(userHome, "Desktop", "TTS")

    speech := htgotts.Speech{Language: language , Folder: folderPath}
    speech.Speak(text)
}
