 <script>
        const video = document.getElementById('camera'); <!-- Gets the video element -->
        const canvas = document.getElementById('canvas'); <!-- Gets the canvas element -->
        const popup = document.getElementById('popup'); <!-- Gets the popup element -->
        const capturedImage = document.getElementById('capturedImage'); <!-- Gets the captured image element -->
        
        navigator.mediaDevices.getUserMedia({ video: true }) <!-- Requests access to the user's camera -->
            .then(stream => video.srcObject = stream) <!-- Sets the video stream as the source for the video element -->
            .catch(err => console.error("Error accessing camera:", err)); <!-- Handles errors if camera access fails -->
        
        function capturePhoto() {
            const context = canvas.getContext('2d'); <!-- Gets the 2D drawing context of the canvas -->
            canvas.width = video.videoWidth; <!-- Sets the canvas width to match the video width -->
            canvas.height = video.videoHeight; <!-- Sets the canvas height to match the video height -->
            context.drawImage(video, 0, 0, canvas.width, canvas.height); <!-- Draws the video frame on the canvas -->
            capturedImage.src = canvas.toDataURL('image/png'); <!-- Converts the canvas image to a PNG format -->
            popup.style.display = 'block'; <!-- Displays the popup with the captured image -->
        }
        
        function savePhoto() {
            const link = document.createElement('a'); <!-- Creates a temporary anchor element -->
            link.href = capturedImage.src; <!-- Sets the captured image as the download link -->
            link.download = 'captured_image.png'; <!-- Names the file as 'captured_image.png' -->
            link.click(); <!-- Triggers the download of the image -->
            popup.style.display = 'none'; <!-- Hides the popup after saving -->
        }
        
        function retakePhoto() {
            popup.style.display = 'none'; <!-- Hides the popup and allows retaking the photo -->
        }
    </script>
</body>
</html>
