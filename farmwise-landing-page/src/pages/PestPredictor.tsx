import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import apiClient from "../components/app/types";
import { CropYieldInput, PestInput } from "../components/app/types";
import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableCaption,
} from "@/components/ui/table";


export default function PestPredictor() {
    const [form, setForm] = useState<PestInput>({ temperature: 0, humidity: 0 });
    const [result, setResult] = useState<number | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: Number(value),
        }));
    };

    const handlePredictPest = async () => {
        try {
            const response = await apiClient.post("/predict_pest", form as PestInput);
            setResult(response.data);
        } catch (error) {
            console.error("Error predicting pest:", error);
            setResult(null);  // Reset result on error
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await apiClient.post("/predict_pest", form as PestInput);
            setResult(response.data);
        } catch (error) {
            console.error("Error predicting pest:", error);
            setResult(null);  // Reset result on error
        }
    };

    return (
        <div className="yield-predictor container p-4 d-flex gap-4 flex-column align-items-center">
            <Typography variant="h4" gutterBottom>Pest Predictor</Typography>
            <form onSubmit={handleSubmit}>
                {Object.entries(form).map(([key, val]) => (
                    <TextField
                        key={key}
                        name={key}
                        label={key}
                        value={val}
                        onChange={handleChange}
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                ))}
                <Button variant="contained" color="primary" onClick={handlePredictPest}>
                    Predict Pest
                </Button>
            </form>
            {result !== null && (
                <div style={{ marginTop: "20px" }}>
                    <Table>
                        <TableCaption>Prediction Result</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHeader>Temperature</TableHeader>
                                <TableHeader>Humidity</TableHeader>
                                <TableHeader>Result</TableHeader>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>{form.temperature}</TableCell>
                                <TableCell>{form.humidity}</TableCell>
                                <TableCell>{result}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}