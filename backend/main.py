from fastapi import FastAPI, Form, status
from ml.model.model_template import PredictionModel
from pydantic import BaseModel, Field
import numpy as np
from torch import load, tensor, float32
from typing import Annotated
import uvicorn
from fastapi.middleware.cors import CORSMiddleware

class Input(BaseModel):
    fixed_acidity: float = Field()
    volatile_acidity: float = Field()
    citric_acid: float = Field()
    residual_sugar: float = Field()
    chlorides: float = Field()
    free_sulfur_dioxide: float = Field()	
    total_sulfur_dioxide: float = Field()
    density: float = Field()
    pH: float = Field()
    sulphates: float = Field()
    alcohol: float = Field()

model = PredictionModel() 

model.load_state_dict(load("./ml/model/trained_model.pth"))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def root():
    return {"Working!"}

@app.post("/api/predict", status_code=status.HTTP_200_OK)
async def predict(request: Input):
    
    x = tensor([request.fixed_acidity,
             request.volatile_acidity,
             request.citric_acid,
             request.residual_sugar,
             request.chlorides,
             request.free_sulfur_dioxide,
             request.total_sulfur_dioxide,
             request.density,
             request.pH,
             request.sulphates,
             request.alcohol],
             dtype=float32)
    
    pred = model(x)
    return {pred.item()} 

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=3000)