class MyComment extends HTMLElement {
    connectedCallback() {
        fetch("comment.html")
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            })
            .catch(error => console.error("Error loading comment.html:", error));
    }
}
customElements.define("my-comment", MyComment);


class MyPost extends HTMLElement {
    connectedCallback() {
        fetch("post.html")
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            })
            .catch(error => console.error("Error loading comment.html:", error));
    }
}
customElements.define("my-post", MyPost);