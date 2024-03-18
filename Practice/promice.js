
// fetch("https://dummyjson.com/products")
// .then((response) => {
//    return response.json();
// })
// .then((data) => {
//     return productData = data
//  })
// .then((productData) => {
//     let finalData = productData.products
//     let product = finalData[1]
//     let tableData = "";
//     console.log(product);
        
//         tableData += `
//             <td>${product.title}</td>
//             <td>${product.description}</td>
//             <td>${product.price}</td>
//             <td>${product.discountPercentage}</td>
//             <td>${product.rating}</td>
//             <td>${product.stock}</td>
//             <td>${product.brand}</td>
//             <td>${product.category}</td>
//             <td><img src="${product.images[1]}"/></td>
//         `
//         document.getElementById('tdShow').innerHTML = tableData;
//     })







/**fetch Way No:- 02 */

const fetcherData = () => {
    return new Promise((resolve, reject) => {
        // fetch data
        fetch("https://dummyjson.com/products")
        .then((response) => {
           return response.json();
        })
        .then((data) => {
           return productData = data
        })
        .then((productData) => {
            resolve(productData)
        })
        .catch((err) => {
            reject("data is not defined",err);
        })
    })
}

fetcherData()
.then((productData) => {
   let finalData = productData.products
   let product = finalData;
//    console.log(product);
   let tableData = "";
   product.map((value) => {
       
     tableData += `
        <tr>
            <td>${value.title}</td>
            <td>${value.description}</td>
            <td>${value.price}</td>
            <td>${value.discountPercentage}</td>
            <td>${value.rating}</td>
            <td>${value.stock}</td>
            <td>${value.brand}</td>
            <td>${value.category}</td>
            <td><img src="${value.images[1]}"/></td>
        </tr>
       `
       document.getElementById('tdShow').innerHTML = tableData
    })


})






/**
 * 
 */
// const api = fetch("https://dummyjson.com/products")
