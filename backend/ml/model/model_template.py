from torch import nn

class PredictionModel(nn.Module):
    def __init__(self):
        super().__init__()
        
        self.layers = nn.Sequential(
            nn.Linear(in_features=11, 
                      out_features=11),
            nn.LeakyReLU(),
            nn.Linear(in_features=11,
                      out_features=11),
            nn.LeakyReLU(),
            nn.Linear(in_features=11,
                      out_features=1)
        )
        
    def forward(self, x):
        return self.layers(x)
    
    
if __name__ == "__main__":
    None