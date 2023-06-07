
import pickle
import os
from tensorflow import keras
from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/', methods=['GET'])
def index():
    return "OiC"


@app.route('/detect-news', methods=['GET', 'POST'])
def detect():
    try:
        model = keras.models.load_model('models')

        if model:
            print("model loaded successfully")

        # Get the current directory
        current_dir = os.path.dirname(os.path.abspath(__file__))

        # Specify the file name
        file_name = "tokenizer.pkl"

        # Construct the file path
        file_path = os.path.join(current_dir, file_name)

        # Load the pickle file
        with open(file_path, "rb") as file:
            tokenn = pickle.load(file)

        if tokenn:
            print("tokenizer loaded successfully")

        def test(inp):
            news = [inp]
            news_seq = tokenn.texts_to_sequences(news)
            news_pad = keras.preprocessing.sequence.pad_sequences(
                news_seq, maxlen=3000, padding='post', truncating='post')
            result = (model.predict(news_pad) > 0.5).astype(int)
            return int(result[0])

        if request.method == "GET":
            # Get the request data
            data = "Setelah dilakukan penelusuran berita, faktanya pada tahun 2017, Manager Hukum dan Humas PTDI, Irfan Budiman pernah menyatakan isu penjualan PTDI yang tersebar di Whatsapp dan media sosial adalah tidak benar atau hoaks"
            print(data)

            if data:
                # Process the request data with the ML model
                print("detecting")
                detection_result = test(data)
                print("detection completed, the result is: ", detection_result)

                # Return the predictions as the response
                return {'content': data, 'detection_result': detection_result}

            # Return an error response if data is missing
            return jsonify({'error': 'Invalid request data'}, 400)

        if request.method == "POST":
            # Get the request data
            data = "kajlhlksjahdlakjsdha asdasd"
            print(data)

            if data:
                # Process the request data with the ML model
                print("detecting")
                detection_result = test(data)
                print("detection completed, the result is: ", detection_result)

                # Return the predictions as the response
                return {'content': data, 'detection_result': detection_result}

            # Return an error response if data is missing
            return jsonify({'error': 'Invalid request data'}, 400)

    except Exception as e:
        print(str(e))
        return {"error": "Failed to process the request."}


if __name__ == '__main__':
    app.run(debug=True)
