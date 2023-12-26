import pandas as pd
# Load Data_SucKhoe_DinhDuong.xlsx
data_path_suckhoe = './Data_SucKhoe_DinhDuong.xlsx'
df_suckhoe = pd.read_excel(data_path_suckhoe)

# Load Data_MonAn_DinhDuong.csv
data_path_monan = './Data_MonAn_DinhDuong.xlsx'
df_monan = pd.read_excel(data_path_monan)

# Prepare data before fitting models
cols = df_suckhoe.columns
# Apply MinMax Scaling
minVec = df_suckhoe[cols].min()
maxVec = df_suckhoe[cols].max()
df_suckhoe[cols] = (df_suckhoe[cols]-minVec)/(maxVec-minVec)


X = df_suckhoe[['Glutest','Type','Age','Height', 'Weight']]
y = df_suckhoe[['Calories','Protein','Fat','Carb']]

from sklearn.model_selection import train_test_split
# training (70%) and a temporary set (30%)
X_train, X_temp, y_train, y_temp = train_test_split(
    X, y, test_size=0.3, random_state=42
)

# Testing (20%) and Validation (10%)
X_test, X_val, y_test, y_val = train_test_split(
    X_temp, y_temp, test_size=1/3, random_state=42
)

from sklearn.preprocessing import RobustScaler

scaler = RobustScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
X_val_scaled = scaler.transform(X_val)

import tensorflow as tf
from tensorflow.keras.layers import Dropout
model = Sequential()
model.add(Dense(128,input_dim = 5,  activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(64, activation='relu'))
model.add(Dense(4, activation='linear'))  

model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mae'])  
early_stopping = EarlyStopping(monitor='val_loss', patience=50, verbose=1, restore_best_weights=True)
history = model.fit(X_train_scaled, y_train, epochs=1000, batch_size=32, validation_split=0.1, callbacks=[early_stopping]) 

# Import information from the user
age = int(input("How old are you? "))  
height = float(input("How much do you weigh (in kg)? "))  
weight = float(input("How tall are you (in meters)? "))  
glutest = float(input("Your FOOD SUGAR level (mg/dL): "))  
if glutest > 126:
    types = 1
else:
    types = 0

# Predict the required nutritional value
input_data = scaler.transform([[glutest, types, age, height, weight,]])
predictions = model.predict(input_data)[0]

# Assign a predicted value to each nutrient
c, cb, p, f = predictions[0], predictions[1], predictions[2], predictions[3]

# Get data from Data_MonAn_DinhDuong.csv
X_mon_an = df_monan[['Calories', 'Carb', 'Protein', 'Fat']]
from sklearn.preprocessing import  StandardScaler

scaler = StandardScaler()
X_mon_an_scaled = scaler.fit_transform(X_mon_an)

from sklearn.neighbors import NearestNeighbors
#KNN
nn = NearestNeighbors(n_neighbors=5)
nn.fit(X_mon_an_scaled)

input_data_scaled = scaler.transform([[c, cb, p, f]])

# Find dishes with corresponding nutritional values
nearest_indices = nn.kneighbors([[c, cb, p, f]])[1][0]
