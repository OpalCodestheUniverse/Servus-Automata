// Fetch and display blog posts from Google Sheets
fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?action=getPosts')
  .then(response => response.json())
  .then(posts => {
    const postsContainer = document.getElementById('posts');
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><em>${post.author}</em> - ${post.date}</p>`;
      postsContainer.appendChild(postElement);
    });
  });
