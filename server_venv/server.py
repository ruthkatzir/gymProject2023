from flask import Flask, request
import cv2
import face_recognition
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello():
    print(request.method)
    if request.method == 'GET':  
          # Load the cascade classifier for face detection
        face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

        # Load the existing images
        existing_images = ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","5.png"]  # Update with the paths to your existing images

        # Capture an image from the computer camera
        video_capture = cv2.VideoCapture(0)
        ret, frame = video_capture.read()

        # Convert the captured frame to grayscale
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detect faces in the captured frame
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        # Process each face
        for (x, y, w, h) in faces:
            # Draw a rectangle around the face in the captured frame
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

            # Encode the captured face
            captured_face_encoding = face_recognition.face_encodings(frame, [(y, x+w, y+h, x)])[0]

            # Compare the captured face with the existing images
            for existing_image in existing_images:
                # Load each existing image
                existing_img = face_recognition.load_image_file(existing_image)
                existing_face_encodings = face_recognition.face_encodings(existing_img)

                # Compare each face in the existing images with the captured face
                for existing_face_encoding in existing_face_encodings:
                    # Compare the features of each face
                    matches = face_recognition.compare_faces([existing_face_encoding], captured_face_encoding)
                    if True in matches:
                        return f"Match found! The captured face matches with {existing_image}"

        # Display the captured frame with rectangles around the detected faces
        cv2.imshow('Faces', frame)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

if __name__ == '__main__':
    app.run()



# # Load the cascade classifier for face detection
# face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

# # Load the existing images
# existing_images = ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg"]  # Update with the paths to your existing images

# # Capture an image from the computer camera
# video_capture = cv2.VideoCapture(0)
# ret, frame = video_capture.read()

# # Convert the captured frame to grayscale
# gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

# # Detect faces in the captured frame
# faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

# # Process each face
# for (x, y, w, h) in faces:
#     # Draw a rectangle around the face in the captured frame
#     cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

#     # Encode the captured face
#     captured_face_encoding = face_recognition.face_encodings(frame, [(y, x+w, y+h, x)])[0]

#     # Compare the captured face with the existing images
#     for existing_image in existing_images:
#         # Load each existing image
#         existing_img = face_recognition.load_image_file(existing_image)
#         existing_face_encodings = face_recognition.face_encodings(existing_img)

#         # Compare each face in the existing images with the captured face
#         for existing_face_encoding in existing_face_encodings:
#             # Compare the features of each face
#             matches = face_recognition.compare_faces([existing_face_encoding], captured_face_encoding)
#             if True in matches:
#                 print("Match found! The captured face matches with", existing_image)

# # Display the captured frame with rectangles around the detected faces
# cv2.imshow('Faces', frame)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
