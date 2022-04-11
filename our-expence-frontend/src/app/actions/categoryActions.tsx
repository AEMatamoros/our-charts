import { fetchSinToken} from '../../helpers/fetch';
import { types } from '../types/types'
import Swal from 'sweetalert2';
import { GetCategory, PostCategory, PutCategory } from '../interfaces/category';

export const loadCategorys = ({}) => {
  return async (dispatch:any) => {
    const resp = await fetchSinToken(
      'category',
      { },
      'GET',
    );


    if (resp.status===200) {

      dispatch(loadCategorysFinish(resp.data));

    }else{
        Swal.fire('Error',"An error ocurred laoding the data",'error');
    }
  }
}

const loadCategorysFinish = (categories:GetCategory) => ({
  type: types.loadCategorysFinish,
  payload: categories,
})

export const createCategory = (category:PostCategory)=>{
  return async (dispatch:any)=>{
    const resp = await fetchSinToken(
      'category',
      {
        name:category.name,
        max:category.max,
        icon:category.icon
      },
      'POST'
    )

    if (resp.status===201) {
        dispatch(addCategory(resp.data))
        Swal.fire('Success',"category Created",'success');

    }else{
        Swal.fire('Error',"An error ocurred creating the category",'error');
    }
  }
}

const addCategory = (category:GetCategory) => ({
  type: types.addCategory,
  payload: category,
})

export const updateCategory = (category:PutCategory)=>{
  return async (dispatch:any)=>{
    const resp = await fetchSinToken(
      `category/${category.id}`,
      {
        name:category.name,
        max:category.max,
        icon:category.icon
      },
      'PUT'
    )

    if (resp.status===200) {
        dispatch(updateCategoryFinish({
          _id:category.id,
          name:category.name,
          max:category.max,
          icon:category.icon
        }))
        Swal.fire('Success',"category Updated",'success');

    }else{
        Swal.fire('Error',"An error ocurred updating the category",'error');
    }
  }
}

const updateCategoryFinish = (category:any) => ({
  type: types.updateCategoryFinish,
  payload: category,
})


export const deleteCategory = (product:any)=>{
  return async (dispatch:any)=>{
    const resp = await fetchSinToken(
      `category/${product.id}`,
      {},
      'DELETE'
    )

    if (resp.status===200) {
        dispatch(deleteCategoryFinish(resp.data))
        Swal.fire('Success',"Product Deleted",'success');

    }else{
        Swal.fire('Error',"An error ocurred deleting the product",'error');
    }
  }
}

const deleteCategoryFinish = (product:any) => ({
  type: types.deleteCategoryFinish,
  payload: product,
})