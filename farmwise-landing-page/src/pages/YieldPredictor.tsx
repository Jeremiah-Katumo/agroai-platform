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

export default function YieldPredictor() {
    //   const [rainfall, setRainfall] = useState<number>(0);
    //   const [temperature, setTemperature] = useState<number>(0);
    //   const [humidity, setHumidity] = useState<number>(0);
    //   const [prediction, setPrediction] = useState<string>("");
    const [form, setForm] = useState<CropYieldInput>({ rainfall: 0, temperature: 0, humidity: 0 });
    const [result, setResult] = useState<number | null>(null);

    // handle change for form inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: Number(value),
        }));
    };

    // handle prediction logic
    const handlePredictYield = async () => {
        try {
            const response = await apiClient.post("/predict_yield", form as CropYieldInput);
            setResult(response.data);
        } catch (error) {
            console.error("Error predicting yield:", error);
            setResult(null);  // Reset result on error
        }
    };
    //   const handlePredictYield = async () => {
    //     try {
    //       const response = await apiClient.post("/predict_yield", {
    //         rainfall,
    //         temperature,
    //         humidity,
    //       } as CropYieldInput);
    //       setPrediction(`Predicted Yield: ${response.data}`);
    //     } catch (error) {
    //       console.error("Error predicting yield:", error);
    //       setPrediction("Error predicting yield.");
    //     }
    //   };

    // handle submit for pest prediction
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await apiClient.post("/predict_pest", form as PestInput);
            setResult(response.data);
        } catch (error) {
            console.error("Error predicting pest:", error);
            setResult(null);  // Reset result on error
        }
    }

    return (
        <div className="yield-predictor container p-4 d-flex gap-4 flex-column align-items-center">
            <Typography variant="h4" gutterBottom>Yield Predictor</Typography>
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
                <Button variant="contained" color="primary" onClick={handlePredictYield} style={{ marginRight: 8 }}>
                    Predict Yield
                </Button>
                <Button variant="outlined" color="secondary" type="submit">
                    Predict Pest
                </Button>
            </form>
            {result !== null && (
                <div style={{ marginTop: "20px" }}>
                    <Table>
                        <TableCaption>Prediction Result</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHeader>Rainfall</TableHeader>
                                <TableHeader>Temperature</TableHeader>
                                <TableHeader>Humidity</TableHeader>
                                <TableHeader>Result</TableHeader>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>{form.rainfall}</TableCell>
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
