function displayPosts(posts){
    const postsContainer = document.querySelector(`#post-list`)
    if (!postsContainer) {
    console.error('Error: post-list container not found.');
    return;
  }

  postsContainer.innerHTML = ''  //clear previous posts

  const newPost = document.createDocumentFragment();

    posts.forEach(post => {
        const li = document.createElement('li')
        const h1 = document.createElement('h1')
        h1.textContent = post.title
        const p = document.createElement('p')
        p.textContent = post.body
        li.append(h1, p)
        newPost.appendChild(li)
    });

  postsContainer.appendChild(newPost);

}

async function fetchAndDisplayPosts(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}


document.addEventListener('DOMContentLoaded', fetchAndDisplayPosts);

