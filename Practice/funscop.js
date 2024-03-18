let tdShow = document.getElementById('tdShow')

const fetcherData = () => {
    return new Promise((resolve, reject) => {
        fetch("https://dummyjson.com/products")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject('data is not found' ,err);
            })
    })
}

fetcherData()
    .then((productData) => {
        // let product = finalData
        let finalData = productData.products
        finalData.map((value) => {
            
            tdShow.innerHTML +=`
            <tr>
            <td>${value.title}</td>
            <td>${value.description}</td>
            <td>${value.price}</td>
            <td>${value.discountPercentage}</td>
            <td>${value.rating}</td>
            <td>${value.brand}</td>
            <td><img src="${value.images[1]}"/></td>
            </tr>
            `
            
        })
    
    })