from flask import Flask, request, jsonify
import json
import os

app = Flask(__name__)

def create_user_data_if_not_exists():
    if not os.path.exists('user_data.json'):
        with open('user_data.json', 'w') as file:
            json.dump({}, file)


#Endpoint save age
@app.route('/save_age', methods=['POST'])
def save_age():
    age = request.json.get('age')
    data = {'age': age}

    create_user_data_if_not_exists()  # Kiểm tra và tạo file user_data.json nếu nó không tồn tại

    with open('user_data.json', 'r+') as file:
        user_data = json.load(file)
        user_data.update(data)
        file.seek(0)  # Đặt con trỏ về đầu file để ghi đè dữ liệu mới
        json.dump(user_data, file)
        file.truncate()  # Xóa dữ liệu cũ nếu dữ liệu mới ngắn hơn

    return jsonify({'message': 'Age saved successfully'})




# Endpoint save height
@app.route('/save_height', methods=['POST'])
def save_height():
    height = request.json.get('height')

    with open('user_data.json', 'r') as file:
        data = json.load(file)
    data['height'] = height
    with open('user_data.json', 'w') as file:
        json.dump(data, file)
    return jsonify({'message': 'Height saved successfully'})




# Endpoint save weight
@app.route('/save_weight', methods=['POST'])
def save_weight():
    weight = request.json.get('weight')

    with open('user_data.json', 'r') as file:
        data = json.load(file)
    data['weight'] = weight
    with open('user_data.json', 'w') as file:
        json.dump(data, file)
    return jsonify({'message': 'Weight saved successfully'})




# Endpoint save glutest
@app.route('/save_blood_sugar', methods=['POST'])
def save_blood_sugar():
    data = request.json
    blood_sugar = data.get('blood_sugar')
    blood_sugar = int(blood_sugar) if blood_sugar else None


    if blood_sugar is not None:
        type_value = 2 if blood_sugar > 125 else 1
    else:
        return jsonify({'success': False, 'message': 'Invalid blood sugar value'}), 400


    try:
        with open('user_data.json', 'r') as file:
            data = json.load(file)
            data['blood_sugar'] = blood_sugar
            data['type'] = type_value

        with open('user_data.json', 'w') as file:
            json.dump(data, file)

        return jsonify({'success': True, 'message': 'Blood sugar saved successfully'}), 200
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500



#Endpoint recomend food
from flask import Flask, jsonify, request
import pandas as pd
from tensorflow.keras.models import load_model
from googleapiclient.discovery import build
import joblib



data_path_monan = r'C:\Users\HP\Documents\University\Năm_3\AI_trong_kinh_doanh\Coding\Data_MonAn_DinhDuong.xlsx'
df_monan = pd.read_excel(data_path_monan)

model = load_model('my_model.h5')

loaded_nn = joblib.load('knn_model.pkl')

api_key = 'AIzaSyAixOPQ13fsPI13tA4AtHG7LFbaO66b0G4'
search_engine_id = '554efeda3264d43c5'
service = build("customsearch", "v1", developerKey=api_key)

@app.route('/suggest-meal', methods=['GET'])
def suggest_meal():
    
    if request.method == 'GET':
        file_path_json = r"C:\Users\HP\Documents\University\Năm_3\AI_trong_kinh_doanh\Coding\customerinf.json"
        df = pd.read_json(file_path_json)
    else:
        json_data = request.get_json()
        df = pd.DataFrame(json_data)

    gl, ty, ag, he, we = df.iloc[-1][['Glutest', 'Type', 'Age', 'Height', 'Weight']]
    predictions = model.predict([[gl, ty, ag, he, we]])[0]
    c, p, f, cb = predictions[0], predictions[1], predictions[2], predictions[3]
    
    input_data_scaled = [[c, p, f, cb]]
    nearest_indices = loaded_nn.kneighbors(input_data_scaled, return_distance=False)[0]

    suggested_meals = []
    for index in nearest_indices:
        food_name = df_monan['FoodName'][index]
        query = food_name + " food"
        res = service.cse().list(q=query, cx=search_engine_id, searchType='image', num=1).execute()
        if 'items' in res:
            image_link = res['items'][0]['link']
            suggested_meals.append({'food_name': food_name, 'image_link': image_link})

    suggested_meals = suggested_meals[:4]  

    return jsonify({'suggested_meals': suggested_meals})



#Endpoin save new food
@app.route('/save_nutrition_data', methods=['POST'])
def save_nutrition_data():
    nutrition_data = request.json

    # Đọc dữ liệu từ tệp checkingfood.json (nếu cần)
    try:
        with open('checkingfood.json', 'r') as file:
            existing_data = json.load(file)
    except FileNotFoundError:
        existing_data = []

    # Thêm dữ liệu mới vào danh sách
    existing_data.append(nutrition_data)

    # Lưu dữ liệu vào tệp checkingfood.json
    with open('checkingfood.json', 'w') as file:
        json.dump(existing_data, file)

    return jsonify({'message': 'Nutrition data saved successfully'})


if __name__ == '__main__':
    app.run(debug=True, port=2612)
