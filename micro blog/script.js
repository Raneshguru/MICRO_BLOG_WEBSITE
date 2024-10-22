document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postContent = document.getElementById('postContent').value;
    const mediaInput = document.getElementById('mediaInput').files[0];

    if (postContent || mediaInput) {
        addPost(postContent, mediaInput);
        document.getElementById('postContent').value = '';
        document.getElementById('mediaInput').value = '';
    }
});

function addPost(content, media) {
    const postsContainer = document.getElementById('posts');
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    if (content) {
        const textElement = document.createElement('p');
        textElement.textContent = content;
        postElement.appendChild(textElement);
    }

    if (media) {
        const mediaElement = document.createElement(media.type.startsWith('image') ? 'img' : 'video');
        mediaElement.src = URL.createObjectURL(media);
        mediaElement.controls = media.type.startsWith('video'); // Add controls for videos
        postElement.appendChild(mediaElement);
    }

    postsContainer.prepend(postElement);
}
