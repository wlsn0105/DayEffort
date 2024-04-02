# 1
# from flask import Flask, render_template, request, jsonify
# from google.cloud import vision_v1

# app = Flask(__name__)

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/upload', methods=['POST'])
# def upload():
#     if 'image' not in request.files:
#         return jsonify({'error': 'No image file provided'}), 400

#     image_file = request.files['image']
#     image_content = image_file.read()

#     client = vision_v1.ImageAnnotatorClient.from_service_account_file('visionai-416513-82056cc0b57a.json')
#     image = vision_v1.Image(content=image_content)
#     response = client.label_detection(image=image)
#     labels = response.label_annotations

#     return jsonify({'labels': [{'description': label.description} for label in labels]})

# if __name__ == '__main__':
#     app.run(debug=True)

# 2
# from flask import Flask, render_template, request, jsonify, url_for
# import os
# from werkzeug.utils import secure_filename
# from google.cloud import vision_v1

# app = Flask(__name__)
# app.config['UPLOAD_FOLDER'] = 'uploads'
# os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# @app.route('/')
# def index():
#     return render_template('index.html')

# @app.route('/upload', methods=['POST'])
# def upload():
#     if 'image' not in request.files:
#         return jsonify({'error': 'No image file provided'}), 400

#     image_file = request.files['image']

#     # 이미지를 안전하게 저장하고 URL을 반환
#     if image_file and allowed_file(image_file.filename):
#         filename = secure_filename(image_file.filename)
#         image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#         image_file.save(image_path)
#         image_url = url_for('uploaded_image', filename=filename)
#     else:
#         return jsonify({'error': 'Invalid file format'}), 400

#     # Vision AI API에 연결
#     client = vision_v1.ImageAnnotatorClient.from_service_account_file('visionai-416513-82056cc0b57a.json')

#     # 이미지를 Vision API에 전송
#     with open(image_path, 'rb') as image_file:
#         content = image_file.read()

#     image = vision_v1.Image(content=content)

#     # Vision AI API 호출 (라벨링)
#     response = client.label_detection(image=image)
#     labels = response.label_annotations

#     return jsonify({'labels': [{'description': label.description} for label in labels],
#                    'image_url': image_url})

# @app.route('/uploads/<filename>')
# def uploaded_image(filename):
#     return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

# def allowed_file(filename):
#     return '.' in filename and filename.rsplit('.', 1)[1].lower() in {'png', 'jpg', 'jpeg', 'gif'}

# if __name__ == '__main__':
#     app.run(debug=True)

# 가격 예측만
# import tensorflow as tf
# from tensorflow import keras
# from tensorflow.keras import layers
# from tensorflow.keras.preprocessing import image
# from tensorflow.keras.preprocessing.image import ImageDataGenerator
# import numpy as np
# from pathlib import Path

# # 이미지 인식 모델
# base_model = keras.applications.MobileNetV2(weights='imagenet', include_top=False, input_shape=(224, 224, 3))
# base_model.trainable = False

# model = keras.Sequential([
#     base_model,
#     layers.GlobalAveragePooling2D(),
#     layers.Dense(256, activation='relu'),
#     layers.Dropout(0.5),
#     layers.Dense(1, activation='linear')  # 회귀 분석을 위한 선형 활성화 함수
# ])

# # 데이터셋은 물건 이미지와 해당 물건의 가격을 포함해야 합니다.
# # 이 예제에서는 ImageDataGenerator를 사용하여 데이터를 로드합니다.
# # 데이터셋은 적절한 구조로 폴더에 저장되어 있어야 합니다.
# train_datagen = ImageDataGenerator(rescale=1./255)

# data_dir = Path('./data')
# train_generator = train_datagen.flow_from_directory(
#     data_dir,
#     target_size=(224, 224),
#     batch_size=32,
#     class_mode='categorical'  # regression을 위한 설정
# )

# # 모델 컴파일
# model.compile(optimizer='adam', loss='mean_squared_error', metrics=['mae'])

# # 모델 학습
# model.fit(train_generator, epochs=10)

# # 학습된 모델을 사용하여 가격 예측
# img_path = './data/class1/고려청자.jpeg'
# img = image.load_img(img_path, target_size=(224, 224))
# img_array = image.img_to_array(img)
# img_array = np.expand_dims(img_array, axis=0) / 255.0

# prediction = model.predict(img_array)
# print('Predicted Price:', prediction[0][0])

from flask import Flask, render_template, request, jsonify, url_for
import os
from werkzeug.utils import secure_filename
from google.cloud import vision_v1
from keras.models import load_model
from keras.preprocessing import image
import numpy as np
import tensorflow as tf

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# 모델 로드 (가상의 함수로 가정)
def load_price_prediction_model():
    # 가상의 함수, 실제로는 모델을 로드하는 코드를 추가하세요.
    return None

# 이미지를 전처리하고 모델에 전달하여 가격 예측
def predict_price(model, img_path):
    # 가상의 함수, 실제로는 이미지 전처리 및 모델 예측 코드를 추가하세요.
    price = ['10000원', '20000원', '30000원', '40000원', '50000원']
    # pre_price = random.choice(price)
    return np.random.choice(price)  # 가상의 랜덤 값

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image_file = request.files['image']

    # 이미지를 안전하게 저장하고 URL을 반환
    if image_file and allowed_file(image_file.filename):
        filename = secure_filename(image_file.filename)
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        image_file.save(image_path)
        image_url = url_for('uploaded_image', filename=filename)
    else:
        return jsonify({'error': 'Invalid file format'}), 400

    # Vision AI API에 연결
    client = vision_v1.ImageAnnotatorClient.from_service_account_file('visionai-416513-82056cc0b57a.json')

    # 이미지를 Vision API에 전송
    with open(image_path, 'rb') as image_file:
        content = image_file.read()

    image = vision_v1.Image(content=content)

    # Vision AI API 호출 (라벨링)
    response = client.label_detection(image=image)
    labels = response.label_annotations

    # 모델 로드 (한 번만 로드하면 됨)
    model = load_price_prediction_model()

    # 이미지로부터 가격 예측
    predicted_price = predict_price(model, image_path)

    return jsonify({'labels': [{'description': label.description} for label in labels],
                    'predicted_price': predicted_price,
                    'image_url': image_url})

@app.route('/uploads/<filename>')
def uploaded_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in {'png', 'jpg', 'jpeg', 'gif'}

if __name__ == '__main__':
    app.run(debug=True)
