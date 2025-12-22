import axios from "axios";

const apiStore = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

apiStore.interceptors.response.use(
    (response) => response.data, 
    (error) => {
        console.info('API error:', 
        {
            message: error.message,
            status: error.response?.status,
        });
        return Promise.reject(error);
    }
);

export async function getList() {
    try {
        return await apiStore.get('/products');    
    } catch (error) {
        console.log('Error en el servicio getList');
    }
}

export async function getProduct(id) {
    try {
        return await apiStore.get(`/products/${ id }`)
    } catch (error) {
        console.log('Error en el servicio getProduct');
    }
}