import React, { useState } from "react";

export default function Form() {

    const [pred, setPred] = useState();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const fd = new FormData(event.currentTarget);
        const data = Object.fromEntries(fd.entries());

        await fetch("http://localhost:3000/api/predict", {
            method: "POST",
            body: JSON.stringify({
                "fixed_acidity": +data["alcohol"],
                "volatile_acidity": +data["volatile_acidity"],
                "citric_acid": +data["citric_acid"],
                "residual_sugar": +data["residual_sugar"],
                "chlorides": +data["chlorides"],
                "free_sulfur_dioxide": +data["free_sulfur_dioxide"],
                "total_sulfur_dioxide": +data["total_sulfur_dioxide"],
                "density": +data["density"],
                "pH": +data["pH"],
                "sulphates": +data["sulphates"],
                "alcohol": +data["alcohol"]
            }),
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => response.json())
        .then(data => (
            setPred(data)
        ))
    }
        
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center content-center">
            <label htmlFor="fixed_acidity">Fixed Acidity</label>
            <input type="number" step="0.01" required id="fixed_acidity" name="fixed_acidity"></input>

            <label htmlFor="volatile_acidity">Volatile Acidity</label>
            <input type="number"  step="0.01" required id="volatile_acidity" name="volatile_acidity"></input>

            <label htmlFor="citric_acid">Citric Acid</label>
            <input type="number"  step="0.01" required id="citric_acid" name="citric_acid"></input>

            <label htmlFor="residual_sugar">Residual Sugar</label>
            <input type="number" step="0.01"  required id="residual_sugar" name="residual_sugar"></input>

            <label htmlFor="chlorides">Chlorides</label>
            <input type="number"  step="0.01" required id="chlorides" name="chlorides"></input>

            <label htmlFor="free_sulfur_dioxide">Free Sulfur Dioxide</label>
            <input type="number"  step="0.01" required id="free_sulfur_dioxide" name="free_sulfur_dioxide"></input>

            <label htmlFor="total_sulfur_dioxide">Total Sulfur Dioxide</label>
            <input type="number"  step="0.01" required id="total_sulfur_dioxide" name="total_sulfur_dioxide"></input>

            <label htmlFor="density">Density</label>
            <input type="number" step="0.01"  required id="density" name="density"></input>

            <label htmlFor="pH">pH</label>
            <input type="number" step="0.01"  required id="pH" name="pH"></input>

            <label htmlFor="sulphates">Sulphates</label>
            <input type="number" step="0.01"  required id="sulphates" name="sulphates"></input>

            <label htmlFor="alcohol">Alcohol</label>
            <input type="number"  step="0.01" required id="alcohol" name="alcohol"></input>

            <button>Submit</button>
            </div>
        </form>

        {pred ? <p>{pred}</p>: null}
        </div>
    )
}

