const main = document.querySelector(".news-content")

function loadBlog(){
    fetch('blog.json')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(blog =>{
                const {img, title, date, author, desc, link} = blog

                const div = document.createElement('div')

                div.classList.add('news-card')
                div.innerHTML = `
                <a href="${link}">
                    <img src="${img}" alt="">
                </a>
                    <br>
                    <h4>${title}</h4>
                    <br>
                    <p> <span>${date}</span> ${author} </p>
                    <p>${desc}</p>
        `;
                main.appendChild(div)
            })
        })
}

loadBlog()