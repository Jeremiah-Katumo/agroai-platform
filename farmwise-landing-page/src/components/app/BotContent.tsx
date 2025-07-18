
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import apiClient from './types';
import { CropYieldInput, PestInput } from './types';

interface BotContentProps {
    // onPredict: (input: CropYieldInput | PestInput) => void;
    category: string;
}

export default function BotContent({ category }: BotContentProps ) {
    const [query, setQuery] = useState<string>('');
    const [result, setResult] = useState<string | null>(null);

    const handleAsk = async () => {
        if (!query.trim()) {
            setResult('Please enter a query.');
            return;
        }

        try {
            const response = await apiClient.post('http://localhost:8000/chat', { query });
            setResult(response.data.answer);
        } catch (error) {
            console.error('Error asking bot:', error);
            setResult('Failed to get a response from the bot.');
        }
    }

    return (
        <div className='bot-content container p-4 d-flex gap-3 flex-column align-items-center'>
            <Typography variant="h4" gutterBottom>Ask the Bot</Typography>
            <TextField
                label={`Ask a question about ${category}`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                fullWidth
                multiline
                rows={4}
            />
            <Button variant="contained" color="primary" onClick={handleAsk}>
                Ask Bot
            </Button>
            {result && (
                <Typography variant="body1" style={{ marginTop: '20px' }}>
                    {`Response\n: ${result}`}
                </Typography>
            )}
        </div>
    );
}