<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wellbeing Image Refresh</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f0f4f8;
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <img id="wellbeing-image" src="image1.jpg" alt="Wellbeing Image">
  
  <script>
    // Array of image URLs
    const images = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg'
    ];

    // Function to refresh the image
    function refreshImage() {
      const imgElement = document.getElementById('wellbeing-image');
      const randomIndex = Math.floor(Math.random() * images.length);
      imgElement.src = images[randomIndex] + '?t=' + new Date().getTime(); // Cache-busting
    }

    // Refresh image every 30 seconds
    setInterval(refreshImage, 30000);

    // Initial image load
    refreshImage();
  </script>
</body>
</html>
