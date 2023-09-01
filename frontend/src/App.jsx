import { useState } from 'react';
import { TextToSpeech } from '../wailsjs/go/main/App';
import "./App.css"
import { TextField, Select, MenuItem, Alert, AlertTitle } from '@mui/material';
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';

const languages = [ "en", "en-UK", "en-AU", "ja", "de", "es", "ru", "ar", "bn", "cs", "da", "nl",
    "fi", "el", "hi", "hu", "id", "km", "la", "it", "no", "pl", "sk", "sv", "th", "tr", "uk",
    "vi", "af", "bg", "ca", "cy", "et", "fr", "gu", "is", "jv", "kn", "ko", "lv", "ml", "mr",
    "ms", "ne", "pt", "ro", "si", "sr", "su", "ta", "te", "tl", "ur", "zh", "sw", "sq", "my",
    "mk", "hy", "hr", "eo", "bs",
]

function App() {
    const [input, setInput] = useState('');
    const [language, setLanguage] = useState('en');
    const [showAlert, setShowAlert] = useState(false);

    function textToSpeech() {
        if (language === '') {
            setShowAlert(true);
            return;
        }
        TextToSpeech(input, language);
    }

    return (
        <>
            <h1>Convert Text to Speech</h1>
            <MDBInputGroup>
                <TextField label="Enter your text" onChange={(e) => setInput(e.target.value)}
                    sx={{ width: '100%' }}
                />
                <Select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    options={languages}
                    autoWidth
                >
                    {
                        languages.map((language, index) => (
                            <MenuItem key={index} value={language}>{language}</MenuItem>
                        ))
                    }
                </Select>

                {
                    input !== "" ?
                        <MDBBtn color="dark" onClick={textToSpeech}>Convert to Speech</MDBBtn>
                        :
                        <MDBBtn color="dark" disabled>Convert to Speech</MDBBtn>
                }
            </MDBInputGroup>

            {
                showAlert && (
                    <Alert severity="error">
                        Please select a <strong>language</strong>
                    </Alert>
                )
            }
        </>
    )
}

export default App
