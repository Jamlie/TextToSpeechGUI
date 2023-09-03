import { useEffect, useState } from 'react';
import UserPromptCoverter from './UserPromptWithSubmit/UserPromptCoverter';
import ChangedFileName from './ChangeFileName/ChangedFileName';
import NoFileNameAttachedForTextAlert from "./Alerts/NoFileNameAttachedForTextAlert"

export default function TextToSpeechConverter() {
    const [fileName, setFileName] = useState('');
    const [allowFileName, setAllowFileName] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    useEffect(() => {
        if (showErrorAlert && (fileName !== '')) {
            setShowErrorAlert(false);
        }
    }, [fileName, showErrorAlert]);

    return (
        <>
            <UserPromptCoverter fileName={fileName} allowFileName={allowFileName} setShowAlert={setShowErrorAlert} />
            <ChangedFileName allowFileName={allowFileName} setFileName={setFileName} setAllowFileName={setAllowFileName} />
            <NoFileNameAttachedForTextAlert showAlert={showErrorAlert} fileName={fileName} />
            {/*<OrLine />
            <FileUploadConverter fileName={fileName} allowFileName={allowFileName} setShowErrorAlert={setShowErrorAlert} setShowDoneAlert={setShowFileUploadedAlert} />
            <NoFileNameAttachedAlert showAlert={showErrorAlert} fileName={fileName} />
            <FileConvertedAlert showAlert={showFileUploadAlert} fileName={fileName} />*/}
        </>
    )
}
