function attachEvents() {
    let postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    let postsElement = document.getElementById('posts');
    let commentsElement = document.getElementById('post-comments');

    let loadButton = document.getElementById('btnLoadPosts');
    let viewButton = document.getElementById('btnViewPost');

    let postsObject = {};

    loadButton.addEventListener('click', load => {
        while (postsElement.firstChild) {
            postsElement.removeChild(postsElement.firstChild);
        }

        fetch(postsUrl)
            .then(res => res.json())
            .then(posts => {
                for (const key in posts) {
                    currentOption = document.createElement('option');
                    currentOption.value = key;
                    currentOption.textContent = posts[key].title;
                    postsElement.appendChild(currentOption);
                }
                postsObject = posts;
            })
            .catch(ex => console.log('Error'));
    });

    viewButton.addEventListener('click', view => {
        while (commentsElement.firstChild) {
            commentsElement.removeChild(commentsElement.firstChild);
        }
        fetch(commentsUrl)
            .then(res => res.json())
            .then(comments => {
                let chosenPostId = postsElement.value;
                chosenPost = document.querySelector(`#posts option[value=${chosenPostId}`);

                document.getElementById('post-title').textContent = chosenPost.textContent;
                let chosenPostBody = document.getElementById('post-body');
                chosenPostBody.textContent = postsObject[chosenPostId].body;

                for (const key in comments) {
                    if (chosenPostId === comments[key].postId) {
                        let currentComment = document.createElement('li');
                        currentComment.id = comments[key].id;
                        currentComment.textContent = comments[key].text;
                        commentsElement.appendChild(currentComment);
                    }
                }

            })
            .catch(er => console.log('Error'));
    });
}

attachEvents();