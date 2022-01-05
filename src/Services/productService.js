import axios from "axios";

export default class ProductService {
    static async getAllProduct (category) {
        const response = await axios.get(`https://fakestoreapi.com/products/${category ? `category/${category}` : ''}`)
        return response
    }
    static async getCategories () {
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        return response
    }
    static async getProductByCategory (category) {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        return response
    }
    static async getSingleProduct (id) {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response
    }
}