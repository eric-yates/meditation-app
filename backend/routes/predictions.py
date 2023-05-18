import timm
import openai
openai.api_key = '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'

from base64 import b64decode
from datetime import datetime
from flask import Blueprint, request
from io import BytesIO
from PIL import Image
from transformers import pipeline
from elevenlabs import generate, play, set_api_key

set_api_key('5404185d628a882b4bf1b679b118ac5f')

predictions = Blueprint('predictions', __name__)

# model = pipeline('image-segmentation', model='openmmlab/upernet-convnext-tiny')

@predictions.route('/predictions/text_to_text', methods=['POST'])
def text_to_text():
    pass


@predictions.route('/predictions/text_to_speech', methods=['POST'])
def text_to_speech():

    prompt = request.json.get('text')
    print('PROMPT', prompt)

    default_prompt = 'You are a mindfulness coach. You are to help Eugene to look inside of himself and become more aware of his feelings, sensations, and emotions. You must always first validate what he is feeling. Then, you ask followup questions to help him tune more into his feelings. If he gets distracted from their inner experience, gently remind him of his intention to stay focused on his inner experience. Now, please respond to what Eugene said, and limit your response to 1 or 2 sentences. You should always end with a question about the specific feeling or sensation he mentioned. You should never attempt to complete his sentences: '

    chat_completion = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": default_prompt + prompt}]
    )

    text = chat_completion.choices[0].message.content

    print('TEXT', text)

    audio = generate(
      text=text,
      voice="Bella",
      model="eleven_monolingual_v1"
    )

    play(audio)

    return ''


def get_image(base64_img):

    # Convert base64 string to bytes
    img_bytes = b64decode(base64_img.split(',')[1])

    # Create a BytesIO object and read the decoded image bytes
    img_io = BytesIO(img_bytes)

    # Open the image with PIL
    img = Image.open(img_io)

    return img

@predictions.route('/predictions/segmentation', methods=['POST'])
def segmentation():
    """ Segments an image """

    t0 = datetime.now()

    frames = request.json.get('frames')

    f0 = frames[0]
    f1 = frames[1]

    if f0 and f1:

        im0 = get_image(f0)
        im1 = get_image(f1)

        print(im0.size)

        p0 = model(im0)
        p1 = model(im1)

        print('P0', p0)

#     t1 = datetime.now()
#     print('TIME', (t1-t0).total_seconds())
#     print('IMG', img)

    return 'Hello mindful!'

