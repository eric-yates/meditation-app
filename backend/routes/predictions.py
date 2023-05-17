import timm

from base64 import b64decode
from datetime import datetime
from flask import Blueprint, request
from io import BytesIO
from PIL import Image
from transformers import pipeline

predictions = Blueprint('predictions', __name__)

model = pipeline('image-segmentation', model='openmmlab/upernet-convnext-tiny')

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

