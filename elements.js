class MyComment extends HTMLElement {
    connectedCallback() {
        fetch("comment.html")
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            });
    }
}
customElements.define("my-comment", MyComment);


class MyPost extends HTMLElement {
    connectedCallback() {
        fetch("comment.html")
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
            });
    }
}
customElements.define("my-comment", MyComment);