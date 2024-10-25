var blogs = [
    {
        title: "First Date",
        date: "August 1st, 2023",
        description: "Today I asked out IU on a date to go to a flower garden and she said yes!!",
        image: "./images/iu turtle.jpg",
        imageAlt: "alt/path",
        slug: "first-date",
    },
    {
        title: "ENGAGED!!!",
        date: "November 14th, 2023",
        description: "I have nothing to say but thank you god",
        image: "./images/iu puffy.jpg",
        imageAlt: "alt/path",
        slug: "engaged",
    },
    {
        title: "We got married!!!!!!",
        date: "Feburary 14th, 2023",
        description: "I wanna thank my mom, and my dad, and my dog, and my sweater, and that one spider that i ran away from that led me to her lol",
        image: "./images/iu white.jpg",
        imageAlt: "alt/path",
        slug: "we-got-married",
    }
];
function appendBlogsToContainer(blogs) {
    var blogContainer = document.getElementById('blog-container');
    if (!blogContainer) {
        console.error('Blog container not found :(');
        return;
    }
    blogs.forEach(function (blog) {
        var blogDiv = document.createElement('div');
        blogDiv.classList.add('blog-entry');

        // Create title as a clickable link
        var blogLink = document.createElement('a');
        blogLink.href = `blogs/${blog.slug}.html`; // Redirect to specific blog page
        blogLink.textContent = blog.title;
        blogLink.classList.add('blog-title');
        
        var date = document.createElement('p');
        date.textContent = blog.date;
        date.classList.add('blog-date');

        var description = document.createElement('p');
        description.textContent = blog.description;
        description.classList.add('blog-description');

        var image = document.createElement('img');
        image.src = `${blog.image}`;
        image.alt = blog.imageAlt;
        image.classList.add('blog-image');

        // Append elements to the blogDiv
        blogDiv.appendChild(blogLink);
        blogDiv.appendChild(date);
        blogDiv.appendChild(description);
        blogDiv.appendChild(image);

        // Append the blogDiv to the container
        blogContainer.appendChild(blogDiv);
    });
}

appendBlogsToContainer(blogs);
