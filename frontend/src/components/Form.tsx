import React, { useState } from "react";
import Popup from "reactjs-popup";

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
        <div className="bg-rose-200 m-4 rounded-md border-zinc-600 border-2">
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-center content-center">
            <label className="self-center font-bold m-2" htmlFor="fixed_acidity">Fixed Acidity</label>
            <input className="w-2/3 self-center rounded-lg" type="number" step="0.01" required id="fixed_acidity" name="fixed_acidity"></input>

            <label className="self-center font-bold m-2" htmlFor="volatile_acidity">Volatile Acidity</label>
            <input className="w-2/3 self-center rounded-lg" type="number"  step="0.01" required id="volatile_acidity" name="volatile_acidity"></input>

            <label className="self-center font-bold m-2" htmlFor="citric_acid">Citric Acid</label>
            <input className="w-2/3 self-center rounded-lg" type="number"  step="0.01" required id="citric_acid" name="citric_acid"></input>

            <label className="self-center font-bold m-2" htmlFor="residual_sugar">Residual Sugar</label>
            <input className="w-2/3 self-center rounded-lg" type="number" step="0.01"  required id="residual_sugar" name="residual_sugar"></input>

            <label className="self-center font-bold m-2" htmlFor="chlorides">Chlorides</label>
            <input className="w-2/3 self-center rounded-lg" type="number"  step="0.01" required id="chlorides" name="chlorides"></input>

            <label className="self-center font-bold m-2" htmlFor="free_sulfur_dioxide">Free Sulfur Dioxide</label>
            <input className="w-2/3 self-center rounded-lg" type="number"  step="0.01" required id="free_sulfur_dioxide" name="free_sulfur_dioxide"></input>

            <label className="self-center font-bold m-2" htmlFor="total_sulfur_dioxide">Total Sulfur Dioxide</label>
            <input className="w-2/3 self-center rounded-lg" type="number"  step="0.01" required id="total_sulfur_dioxide" name="total_sulfur_dioxide"></input>

            <label className="self-center font-bold m-2" htmlFor="density">Density</label>
            <input className="w-2/3 self-center rounded-lg" type="number" step="0.01"  required id="density" name="density"></input>

            <label className="self-center font-bold m-2" htmlFor="pH">pH</label>
            <input className="w-2/3 self-center rounded-lg" type="number" step="0.01"  required id="pH" name="pH"></input>

            <label className="self-center font-bold m-2" htmlFor="sulphates">Sulphates</label>
            <input className="w-2/3 self-center rounded-lg" type="number" step="0.01"  required id="sulphates" name="sulphates"></input>

            <label className="self-center font-bold m-2" htmlFor="alcohol">Alcohol</label>
            <input className="w-2/3 self-center rounded-lg" type="number"  step="0.01" required id="alcohol" name="alcohol"></input>

            <button className="p-2 m-4 border rounded-xl font-bold bg-rose-400">Submit</button>
            </div>
        </form>

        {pred ? <h1 className="m-2 text-center font-bold">Quality: {pred}</h1>: null}
        </div>
    )
}

