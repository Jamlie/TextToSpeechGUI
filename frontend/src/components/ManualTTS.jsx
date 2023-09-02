import { useEffect, useState } from 'react';
import UserPromptCoverter from './UserPromptWithSubmit/UserPromptCoverter';
import ChangedFileName from './ChangeFileName/ChangedFileName';
import NoFileAttached from './Errors/NoFileAttached';


export default function ManualTTS() {
    const [fileName, setFileName] = useState('');
    const [allowFileName, setAllowFileName] = useState(false);
    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
        if (showAlert && (fileName !== '')) {
            setShowAlert(false);
        }
    }, [fileName, showAlert]);

    return (
        <>
            <h1>Convert Text to Speech</h1>
            <UserPromptCoverter fileName={fileName} allowFileName={allowFileName} setShowAlert={setShowAlert} />
            <ChangedFileName allowFileName={allowFileName} setFileName={setFileName} setAllowFileName={setAllowFileName} />
            <NoFileAttached showAlert={showAlert} fileName={fileName} />
        </>
    )

}
