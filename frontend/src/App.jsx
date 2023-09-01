import { useState } from 'react';
import { TextToSpeech } from '../wailsjs/go/main/App';
import "./App.css"
import { TextField, Select, MenuItem, Alert } from '@mui/material';
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';

const languages = ["af", "ar", "bg", "bn", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "en-AU",
    "en-UK", "eo", "es", "et", "fi", "fr", "gu", "hi", "hr", "hu", "hy", "id", "is", "it", "ja", "jv",
    "km", "kn", "ko", "la", "lv", "mk", "ml", "mr", "ms", "my", "ne", "nl", "no", "pl", "pt", "ro", "ru",
    "si", "sk", "sq", "sr", "su", "sv", "sw", "ta", "te", "th", "tl", "tr", "uk", "ur", "vi", "zh"
];

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
