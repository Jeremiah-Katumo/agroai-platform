import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import apiClient from '../components/app/types';


export default function UploadCSV() {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            await apiClient.post('http://localhost:8000/upload_csv', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage('File uploaded successfully!');
        } catch (error) {
            console.error('Error uploading file:', error);
            setMessage('Failed to upload file.');
        }
    };

    return (
        <div className='d-flex flex-column align-items-center justify-content-center gap-4 p-5'>
            <Typography variant="h4" gutterBottom>Upload CSV</Typography>
            <div className="form-group">
                <label htmlFor='name'></label>
                <input name="file" type="file" accept=".csv" onChange={handleFileChange} />
            </div>
            
            <div className='d-flex flex-row gap-4'>
                <Button variant="contained" color="primary" onClick={handleUpload}>
                    Upload Pest CSV
                </Button>
                <Button variant='contained' color='primary' onClick={handleUpload}>
                    Upload Crop Yield CSV
                </Button>
            </div>
            {message && <Typography variant="body1">{message}</Typography>}
        </div>
    );
}