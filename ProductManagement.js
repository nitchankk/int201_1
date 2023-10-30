//practice teacher

function ProductManagement() {
  //add products variable here 
  const products = []
  function getAllProducts() {
    return products 
  } 
  function addProduct(product) {
    products.push(product)
  }

  function searchByName(name) {
    return products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))

  }

  function searchByPriceRange(minPrice, maxPrice) {
    return products.filter((product) => product.price > minPrice && maxPrice > product.price )
  }

  function removeAll() {
    products.splice(0,products.length)
  }

  return {
    removeAll,
    searchByName,
    searchByPriceRange,
    getAllProducts,
    addProduct
  }
}
module.exports = ProductManagement
const productCatalog = ProductManagement()

