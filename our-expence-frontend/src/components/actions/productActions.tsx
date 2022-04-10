import { fetchSinToken, fetchConToken } from '../../helpers/fetch';
import { types } from '../types/types'
import Swal from 'sweetalert2';

export const loadProducts = ({}) => {
  return async (dispatch:any) => {
    const resp = await fetchSinToken(
      'product',
      { },
      'GET',
    );


    if (resp.status===200) {

      dispatch(loadProductsFinish(resp.data));

    }else{
        Swal.fire('Error',"An error ocurred laoding the data",'error');
    }
  }
}

const loadProductsFinish = (products:any) => ({
  type: types.loadProductsFinish,
  payload: products,
})

export const createProduct = (product:any)=>{
  return async (dispatch:any)=>{
    const resp = await fetchSinToken(
      'product',
      {
        name:product.name,
        price:product.price,
        category:product.category
      },
      'POST'
    )

    if (resp.status===201) {
        dispatch(addProduct(resp.data))
        Swal.fire('Success',"Product Created",'success');

    }else{
        Swal.fire('Error',"An error ocurred creating the product",'error');
    }
  }
}

const addProduct = (product:any) => ({
  type: types.addProduct,
  payload: product,
})

export const updateProduct = (product:any)=>{
  return async (dispatch:any)=>{
    const resp = await fetchSinToken(
      `product/${product.id}`,
      {
        name:product.name,
        price:product.price,
        category:product.category
      },
      'PUT'
    )

    if (resp.status===200) {
        dispatch(updateProductFinish({
          _id:product.id,
          name:product.name,
          price:product.price,
          category:product.category
        }))
        Swal.fire('Success',"Product Updated",'success');

    }else{
        Swal.fire('Error',"An error ocurred updating the product",'error');
    }
  }
}

const updateProductFinish = (product:any) => ({
  type: types.updateProductFinish,
  payload: product,
})


export const deleteProduct = (product:any)=>{
  return async (dispatch:any)=>{
    const resp = await fetchSinToken(
      `product/${product.id}`,
      {},
      'DELETE'
    )

    if (resp.status===200) {
        dispatch(deleteProductFinish(resp.data))
        Swal.fire('Success',"Product Deleted",'success');

    }else{
        Swal.fire('Error',"An error ocurred deleting the product",'error');
    }
  }
}

const deleteProductFinish = (product:any) => ({
  type: types.deleteProductFinish,
  payload: product,
})