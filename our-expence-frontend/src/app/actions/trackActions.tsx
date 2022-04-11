import { fetchSinToken} from '../../helpers/fetch';
import { types } from '../types/types'
import Swal from 'sweetalert2';
import { GetTrack } from '../interfaces/track';

export const loadMonthTrack = ({}) => {
  return async (dispatch:any) => {
    const resp = await fetchSinToken(
      'track',
      { },
      'GET',
    );

    if (resp.status===200) {

      dispatch(loadMonthTrackFinish(resp.data));

    }else{
        Swal.fire('Error',"An error ocurred laoding the data",'error');
    }
  }
}


export const loadFilteredTrack = (year:number, month:number) => {
  return async (dispatch:any) => {
    const resp = await fetchSinToken(
      'track',
      {},
      'GET',
      {year, month},
    );

    if (resp.status===200) {

      dispatch(loadMonthTrackFinish(resp.data));

    }else{
        Swal.fire('Error',"An error ocurred laoding the data",'error');
    }
  }
}

const loadMonthTrackFinish = (track:GetTrack[]) => ({
  type: types.loadMonthTrackFinish,
  payload: track,
})
