// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
        document.getElementById('formMessage').classList.remove('hidden');
    } else {
        const post = {
            username: username,
            title: title,
            content: content
        };

        // Store post data in localStorage (replace with actual API call in real application)
        savePostToLocalStorage(post);

        // Clear form fields
        document.getElementById('username').value = '';
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';

        // Show success message (optional)
        alert('Blog post submitted successfully!');

        // Optionally redirect to another page after submission
        // window.location.href = 'posts.html';
    }
}

// Function to save post data to localStorage
function savePostToLocalStorage(post) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Event listener for form submission
document.getElementById('blogForm').addEventListener('submit', handleSubmit);
