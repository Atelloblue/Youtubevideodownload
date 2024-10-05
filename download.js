// ==UserScript==
// @name         YouTube Video Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a download button to YouTube videos
// @author       You
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to load
    window.addEventListener('load', function() {
        // Create a download button
        let downloadButton = document.createElement('button');
        downloadButton.innerHTML = 'Download Video';
        downloadButton.style.position = 'absolute';
        downloadButton.style.top = '10px';
        downloadButton.style.right = '10px';
        downloadButton.style.zIndex = '1000';

        // Append the button to the body
        document.body.appendChild(downloadButton);

        // Add click event to the button
        downloadButton.addEventListener('click', function() {
            let videoUrl = document.querySelector('video').src;
            window.open(videoUrl, '_blank');
        });
    }, false);
})();
