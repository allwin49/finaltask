let api = document.querySelector(".api")

api.innerHTML = "Loading..."

fetch("https://fakestoreapi.com/products")

.then(response => response.json())

.then(data => {


    api.innerHTML = "API data successfully loaded"

    data.slice(0, 5).forEach(product => {

        let heading = document.createElement("h1")
        heading.innerHTML = product.title
        api.appendChild(heading)


    
        api.innerHTML += `<h2>${product.id} - ${product.title}</h2>`

        api.innerHTML += `<p>${product.title.slice(0, 30)}</p>`


        api.innerHTML += `<p>${product.description.slice(0, 100)}</p>`


        api.innerHTML += `
    <div>
        <img src="${product.image}" width="200px">
    </div>
    
`



 api.innerHTML += `<p>${product.price}</p>`

api.innerHTML += `<h3>${product.category}</h3>`

 api.innerHTML += `<p>${product.title.toUpperCase()}</p>`

api.innerHTML += `<p>${product.title} - ${product.title.length}</p>`

api.innerHTML += `<p>${product.id} - ${product.title} - $${product.price}</p>`



api.innerHTML += `

    <div class="card">
                <h2>${product.title}</h2>
            </div>
        `

 api.innerHTML += `
        <div>
                <h2>${product.title}</h2>
                <p>${product.description.slice(0, 50)}</p>
            </div>
        `

console.log(product.title)
    api.innerHTML += `<p>${product.title}</p>`

        
api.innerHTML += `
        <div>
                <h2>${product.title}</h2>
                <h3>${product.category}</h3>
            </div>
        `

    })

})

.catch(error => {

    api.innerHTML = `<p style="color:red">${error}</p>`

})

.finally(() => {
    console.log("API request completed")
    api.innerHTML += "<p>Request completed</p>"
})