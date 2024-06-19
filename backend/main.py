from fastapi import FastAPI, Form
from .ml.model.model_template import PredictionModel
from pydantic import BaseModel, Field
import numpy as np
from torch import load, tensor, float32
from typing import Annotated

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

@app.get("/")
def root():
    return {"Working!"}

@app.post("/api/predict")
async def predict(fixed_acidity: Annotated[float, Form()],
    volatile_acidity: Annotated[float, Form()],
    citric_acid: Annotated[float, Form()],
    residual_sugar: Annotated[float, Form()],
    chlorides: Annotated[float, Form()],
    free_sulfur_dioxide: Annotated[float, Form()],
    total_sulfur_dioxide: Annotated[float, Form()],
    density: Annotated[float, Form()],
    pH: Annotated[float, Form()],
    sulphates: Annotated[float, Form()],
    alcohol: Annotated[float, Form()],):
    
    x = tensor([fixed_acidity,
             volatile_acidity,
             citric_acid,
             residual_sugar,
             chlorides,
             free_sulfur_dioxide,
             total_sulfur_dioxide,
             density,
             pH,
             sulphates,
             alcohol],
             dtype=float32)
    
    pred = model(x)
    return {pred.item()} 

