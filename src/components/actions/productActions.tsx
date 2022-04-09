import { fetchSinToken, fetchConToken } from '../../helpers/fetch';
import { types } from '../types/types'
import Swal from 'sweetalert2';

export const loadProducts = ({}) => {
  return async (dispatch:any) => {
    const resp = await fetchSinToken(
      'products',
      { },
      'GET',
    );
    const body = await resp.json();

    if (body.ok) {

      loadProductsFinish(body.res);

    }else{
        Swal.fire('Error',body.msg,'error');
    }
  }
}

const loadProductsFinish = (products:any) => ({
  type: types.loadProductsFinish,
  payload: products,
})


