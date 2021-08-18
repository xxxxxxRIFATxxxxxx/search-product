const products = [
    { name: "Apple phone", price: 1000 },
    { name: "Apple laptop", price: 15700 },
    { name: "Sony laptop", price: 25700 },
    { name: "Nokia Mobile Phone", price: 700 },
    { name: "Sony Headphone", price: 1400 },
    { name: "Techno Laptop", price: 12008 },
];

// Define Function
function searchProduct(products, searchText) {
    const matchedProduct = [];

    for (product of products) {
        // // For Index Of Function
        if (product.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
            matchedProduct.push(product);
        };

        // // For Includes Function
        // if (product.name.toLowerCase().includes(searchText.toLowerCase())) {
        //     matchedProduct.push(product);
        // };


        // // For Starts With Function
        // if (product.name.toLowerCase().startsWith(searchText.toLowerCase())) {
        //     matchedProduct.push(product);
        // };

        // // For Ends With Function
        // if (product.name.toLowerCase().endsWith(searchText.toLowerCase())) {
        //     matchedProduct.push(product);
        // };
    };

    return matchedProduct;
};

const result = searchProduct(products, "LAPTOP");
console.log(result);