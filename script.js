document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_VIDEO_URL' with the actual URL of your video
    const videoUrl = 'YOUR_VIDEO_URL';

    // Create the video element
    const videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.controls = true;

    // Append the video element to the video container
    const videoContainer = document.getElementById('video-container');
    videoContainer.appendChild(videoElement);

    // Create and display the QR code linking to the video
    const qrCode = new QRCode(document.createElement('div'), {
        text: videoUrl,
        width: 128,
        height: 128,
    });
    vi
