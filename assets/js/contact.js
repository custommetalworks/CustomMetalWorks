const spinner = document.getElementById('spinner');
const iframeMap = document.getElementById('iframe-map');
const iframeDiv = document.getElementById('iframe');

iframeMap.addEventListener('load', () => {
    spinner.style.display = 'none';
    iframeMap.style.visibility = 'visible';
    iframeMap.style.opacity = '1';
    iframeDiv.setAttribute('aria-busy', 'false');
});