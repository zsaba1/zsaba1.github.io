<img id="wellness-image" src="images/image1.jpg" alt="Wellness Image">

<script>
  const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
  ];

  function refreshImage() {
    const imgElement = document.getElementById('wellness-image');
    const randomIndex = Math.floor(Math.random() * images.length);
    imgElement.src = images[randomIndex];
  }

  setInterval(refreshImage, 60000); // Refresh image every 60 seconds
</script>
