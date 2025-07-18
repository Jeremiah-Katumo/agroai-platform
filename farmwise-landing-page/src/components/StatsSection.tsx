import React from "react";

const StatsSection = () => {

    return (
        <>
            <div className="bg-muted rounded-lg p-4 m-4 text-center d-flex gap-5 flex-column align-items-center justify-content-center">
                <h2 className="text-2xl font-bold text-foreground mb-6">Platform Statistics</h2>
                <div className="d-flex gap-5 flex-row justify-content-center align-items-center"> {/* grid grid-cols-1 md:grid-cols-3 gap-8"> */}
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                        <div className="text-muted-foreground">Images Analyzed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2">92.4%</div>
                        <div className="text-muted-foreground">Average Accuracy</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-2">15+</div>
                        <div className="text-muted-foreground">Crop Types Supported</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsSection