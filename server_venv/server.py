# from flask import Flask, request
# import cv2
# import face_recognition

# app = Flask(__name__)


# @app.route("/", methods=["GET", "POST"])
# def hello():
#     print(request.method)
#     if request.method == "GET":
#         # Load the cascade classifier for face detection
#         face_cascade = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")
#         # Load the existing images
#         existing_images = [
#             "images/1.jpg",
#             "images/2.jpg",
#             "images3.jpg",
#             "images/4.jpg",
#             "images/5.jpg",
#             "images/5.png",
#         ]  # Update with the paths to your existing images
#         # Capture an image from the computer camera
#         video_capture = cv2.VideoCapture(0)
#         ret, frame = video_capture.read()

#         # Convert the captured frame to grayscale
#         gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

#         # Detect faces in the captured frame
#         faces = face_cascade.detectMultiScale(
#             gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30)
#         )

#         # Process each face
#         for x, y, w, h in faces:
#             # Draw a rectangle around the face in the captured frame
#             cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

#             # Encode the captured face
#             captured_face_encoding = face_recognition.face_encodings(
#                 frame, [(y, x + w, y + h, x)]
#             )[0]

#             # Compare the captured face with the existing images
#             for existing_image in existing_images:
#                 # Load each existing image
#                 existing_img = face_recognition.load_image_file(existing_image)
#                 existing_face_encodings = face_recognition.face_encodings(existing_img)

#                 # Compare each face in the existing images with the captured face
#                 for existing_face_encoding in existing_face_encodings:
#                     # Compare the features of each face
#                     matches = face_recognition.compare_faces(
#                         [existing_face_encoding], captured_face_encoding
#                     )
#                     if True in matches:
#                         print("rrrrrrrrrrrrrrrrrrrrr ", existing_image)
#                         return f"Match found! The captured face matches with {existing_image}"

#         # Display the captured frame with rectangles around the detected faces
#         cv2.imshow("Faces", frame)
#         cv2.waitKey(0)
#         cv2.destroyAllWindows()


# if __name__ == "__main__":
#     app.run()

from flask import Flask, request
import cv2
import face_recognition
import glob

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def hello():
    print(request.method)
    if request.method == "GET":
        # Load the cascade classifier for face detection
        face_cascade = cv2.CascadeClassifier("haarcascade_frontalface_default.xml")

        # Specify the path to the images folder
        images_folder = "images/"

        # Retrieve the file paths of all the image files in the folder
        image_files = glob.glob(images_folder + "*.jpg") + glob.glob(
            images_folder + "*.png"
        )

        # Capture an image from the computer camera
        video_capture = cv2.VideoCapture(0)
        ret, frame = video_capture.read()

        # Convert the captured frame to grayscale
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detect faces in the captured frame
        faces = face_cascade.detectMultiScale(
            gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30)
        )

        # Process each face
        for x, y, w, h in faces:
            # Draw a rectangle around the face in the captured frame
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

            # Encode the captured face
            captured_face_encoding = face_recognition.face_encodings(
                frame, [(y, x + w, y + h, x)]
            )[0]

            # Compare the captured face with the existing images
            for image_file in image_files:
                # Load each existing image
                existing_img = face_recognition.load_image_file(image_file)
                existing_face_encodings = face_recognition.face_encodings(existing_img)

                # Compare each face in the existing images with the captured face
                for existing_face_encoding in existing_face_encodings:
                    # Compare the features of each face
                    matches = face_recognition.compare_faces(
                        [existing_face_encoding], captured_face_encoding
                    )
                    if True in matches:
                        return image_file

        # Display the captured frame with rectangles around the detected faces
        cv2.imshow("Faces", frame)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    # return "no user found!"


if __name__ == "__main__":
    app.run()
