var blogs = [
    {
        title: "First Date",
        date: "August 1st, 2023",
        description: "Today I asked out IU on a date to go to a flower garden and she said yes!!",
        image: "path/to/image",
        imageAlt: "alt/path",
        slug: "https://www.instagram.com/dlwlrma/?hl=en",
    },
    {
        title: "ENGAGED!!!",
        date: "November 14th, 2023",
        description: "I have nothing to say but thank you god",
        image: "path/to/image",
        imageAlt: "alt/path",
        slug: "https://www.instagram.com/dlwlrma/?hl=en",
    },
    {
        title: "We got married!!!!!!",
        date: "Feburary 14th, 2023",
        description: "I wanna thank my mom, and my dad, and my dog, and my sweater, and that one spider that i ran away from that led me to her",
        image: "path/to/image",
        imageAlt: "alt/path",
        slug: "https://www.instagram.com/dlwlrma/?hl=en",
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
        blogDiv.classList.add('blog');
        // make a title element with h1 styling and append it as a child
        var title = document.createElement('h1');
        title.textContent = blog.title;
        blogDiv.appendChild(title);
        // the same as the title element but with p styling
        var date = document.createElement('p');
        date.textContent = blog.date;
        blogDiv.appendChild(date);
        var description = document.createElement('p');
        description.textContent = blog.description;
        blogDiv.appendChild(description);
        var image = document.createElement('img');
        image.src = blog.image;
        image.alt = blog.imageAlt;
        blogDiv.appendChild(image);
        var readMoreLink = document.createElement('a');
        readMoreLink.href = "/blog/".concat(blog.slug);
        readMoreLink.textContent = 'This is her instagram. Go follow her';
        blogDiv.appendChild(readMoreLink);
        // append this div for the blog with all the child elements to the blogContainer
        blogContainer.appendChild(blogDiv);
    });
}
