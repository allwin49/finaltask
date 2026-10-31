
let api = document.querySelector(".api")

api.innerHTML = "Loading..."

fetch("https://fakestoreapi.com/products")

.then(response => response.json())

.then(data => {

    api.innerHTML = ""

    data.forEach(product => {

        let card = document.createElement("div")

    card.className = "card"



card.innerHTML = `
            <h2>Product ID: ${product.id}</h2>

            <h3>${product.title.slice(0, 50)}</h3>

         <p>Price: $${product.price}</p>

            <p>${product.description.slice(0, 100)}</p>

            <img src="${product.image}" width="200px">
        `

        api.appendChild(card)

    })

})

.catch(error => {

    api.innerHTML = `<p style="color:red">${error}</p>`

})

.finally(() => {

    console.log("API request completed")

    api.innerHTML += "<p>API request completed</p>"

})
