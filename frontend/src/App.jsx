import {useState} from 'react';
import { TextToSpeech } from '../wailsjs/go/main/App';
import "./App.css"
import { MDBInputGroup, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
// import { Button, TextField } from '@mui/material';

function App() {
    const [input, setInput] = useState('');

    function textToSpeech() {
        TextToSpeech(input);
    }

    // <Form>
    //     <Form.Group className="mb-3">
    //         <Form.Label>Text to Speech</Form.Label>
    //         <Form.Control as="textarea" rows={3} placeholder="Enter text" style={inputStyle} onChange={(e) => setInput(e.target.value)} />
    //     </Form.Group>
    // </Form>
    // <br />
    // <Button variant="primary" onClick={textToSpeech} size='sm' style={
    //     {display: 'block', margin: '0 auto'}
    // }>Text to Speech</Button>

            // <div style={{ textAlign: 'center' }}>
            //     <TextField id='outlined-basic' label="Enter your text" variant="outlined" onChange={(e) => setInput(e.target.value)} />
            // </div>
            // <div style={{ textAlign: 'center' }}>
            //     {
            //         input !== "" ?
            //         <Button variant="contained" onClick={textToSpeech} size='medium'>Text to Speech</Button>
            //         :
            //         <Button variant="contained" disabled size='medium'>Text to Speech</Button>
            //     }
            // </div>
            // <TextField id="outlined-multiline-static" label="Enter your text" multiline rows={3} variant="outlined" onChange={(e) => setInput(e.target.value)} style={
            //     {color: 'white'}
            // } />
    return (
        <>
            <h1>Convert Text to Speech</h1>
            <MDBInputGroup>
                <MDBInput label="Enter your text" onChange={(e) => setInput(e.target.value)} />
                {
                    input !== "" ?
                    <MDBBtn color="dark" onClick={textToSpeech} size='sm'>Text to Speech</MDBBtn>
                    :
                    <MDBBtn color="dark" disabled size='sm'>Text to Speech</MDBBtn>
                }
            </MDBInputGroup>
        </>
    )
}

export default App
