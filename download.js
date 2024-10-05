// ==UserScript==
// @name         YouTube Video Downloader
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Adds a download button to YouTube videos
// @author       You
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to add the download button
    function addDownloadButton() {
        // Check if the button already exists
        if (document.querySelector('#downloadButton')) return;

        // Create a download button
        let downloadButton = document.createElement('button');
        downloadButton.id = 'downloadButton';
        downloadButton.innerHTML = 'Download Video';
        
        // Style the button
        downloadButton.style.position = 'fixed';
        downloadButton.style.top = '10px';
        downloadButton.style.right = '10px';
        downloadButton.style.padding = '10px 20px';
        downloadButton.style.backgroundColor = '#ff0000';
        downloadButton.style.color = '#ffffff';
        downloadButton.style.border = 'none';
        downloadButton.style.borderRadius = '5px';
        downloadButton.style.cursor = 'pointer';
        downloadButton.style.zIndex = '1000';
        downloadButton.style.fontSize = '16px';
        downloadButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

        // Append the button to the body
        document.body.appendChild(downloadButton);

        // Add click event to the button
        downloadButton.addEventListener('click', function() {
            let video = document.querySelector('video');
            if (video) {
                let videoUrl = video.src;
                window.open(videoUrl, '_blank');
            } else {
                alert('Video element not found!');
            }
        });
    }

    // Wait for the page to load
    window.addEventListener('load', addDownloadButton, false);
})();
