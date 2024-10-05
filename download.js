// ==UserScript==
// @name         YouTube Video Downloader
// @namespace    http://your.namespace.here
// @version      0.1
// @description  Adds a download button to download your YouTube video and shows a notification
// @author       You
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to show a notification
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.innerText = message;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        notification.style.color = 'white';
        notification.style.padding = '10px';
        notification.style.borderRadius = '5px';
        notification.style.zIndex = '9999';
        notification.style.fontSize = '14px';
        notification.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

        document.body.appendChild(notification);

        // Remove notification after 5 seconds
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 5000);
    }

    // Function to download the video
    function downloadVideo() {
        const videoElement = document.querySelector('video');

        if (videoElement) {
            const videoUrl = videoElement.src;
            const a = document.createElement('a');
            a.href = videoUrl;
            a.download = ''; // You can set a filename here if desired
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            // Show notification after starting download
            showNotification('Your video is downloading...');
        } else {
            console.error('Could not find video URL!');
            showNotification('Could not find video URL!');
        }
    }

    // Function to add download button
    function addDownloadButton() {
        const buttonContainer = document.querySelector('.title.style-scope.ytd-video-primary-info-renderer');

        if (buttonContainer && !document.getElementById('download-button')) {
            const downloadButton = document.createElement('button');
            downloadButton.innerText = 'Download Video';
            downloadButton.id = 'download-button';
            downloadButton.style.marginLeft = '10px';
            downloadButton.style.cursor = 'pointer';
            downloadButton.style.padding = '5px 10px';
            downloadButton.style.backgroundColor = '#ff0000'; // Red background
            downloadButton.style.color = 'white'; // White text
            downloadButton.style.border = 'none';
            downloadButton.style.borderRadius = '5px';
            downloadButton.style.fontSize = '14px';
            downloadButton.style.zIndex = '9999';

            downloadButton.onclick = downloadVideo;

            buttonContainer.appendChild(downloadButton);
        }
    }

    // Observe changes to the DOM to add the button when the video loads
    const observer = new MutationObserver(addDownloadButton);
    observer.observe(document.body, { childList: true, subtree: true });
})();
