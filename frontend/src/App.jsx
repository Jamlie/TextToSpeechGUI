import { useEffect, useState } from 'react';
import { TextToSpeech } from '../wailsjs/go/main/App';
import "./App.css"
import { TextField, Select, MenuItem, Checkbox, Alert } from '@mui/material';
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';

const languages = ["af", "ar", "bg", "bn", "bs", "ca", "cs", "cy", "da", "de", "el", "en", "en-AU",
    "en-UK", "eo", "es", "et", "fi", "fr", "gu", "hi", "hr", "hu", "hy", "id", "is", "it", "ja", "jv",
    "km", "kn", "ko", "la", "lv", "mk", "ml", "mr", "ms", "my", "ne", "nl", "no", "pl", "pt", "ro", "ru",
    "si", "sk", "sq", "sr", "su", "sv", "sw", "ta", "te", "th", "tl", "tr", "uk", "ur", "vi", "zh"
];

function App() {
    const [input, setInput] = useState('');
    const [language, setLanguage] = useState('en');
    const [fileName, setFileName] = useState('');
    const [allowFileName, setAllowFileName] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    function textToSpeech() {
        if (allowFileName && (fileName === '')) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
            return;
        }
        TextToSpeech(input, language, fileName);
    }

    useEffect(() => {
        if (showAlert && (fileName !== '')) {
            setShowAlert(false);
        }
    }, [fileName, showAlert]);

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

            <MDBInputGroup>
                {
                    allowFileName ?
                        <TextField label="File name" onChange={(e) => setFileName(e.target.value)}
                            sx={{ width: '100%', mt: 1 }}
                        /> :
                        <TextField label="File name" disabled
                            sx={{ width: '100%', mt: 1 }}
                        />
                }
                <Checkbox checked={allowFileName} onChange={(e) => setAllowFileName(e.target.checked)}
                    sx={{ 
                        color: "black",
                        '&.Mui-checked': {
                            color: "black",
                        },
                        mt: 1,
                        ":hover": {
                            backgroundColor: "#00121212",
                            borderRadius: "5px",

                        }
                    }}
                />
            </MDBInputGroup>
            {
                showAlert && (fileName === "") ?
                    <Alert severity='error' sx={{ mt: 1, width: "100%" }}>
                        File name cannot be empty, please enter a valid file name or uncheck the checkbox.
                    </Alert> :
                    null
            }
        </>
    )
}

export default App
