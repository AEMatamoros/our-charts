import { fetchSinToken, fetchConToken } from '../../helpers/fetch';
import { types } from '../types/types'
import Swal from 'sweetalert2';

export const loadMonthTrack = ({}) => {
  return async (dispatch:any) => {
    const resp = await fetchSinToken(
      'track',
      { },
      'GET',
    );

    console.log("resp.data")
    console.log(resp.data)


    if (resp.status===200) {

      dispatch(loadMonthTrackFinish(resp.data));

    }else{
        Swal.fire('Error',"An error ocurred laoding the data",'error');
    }
  }
}

const loadMonthTrackFinish = (categories:any) => ({
  type: types.loadMonthTrackFinish,
  payload: categories,
})

