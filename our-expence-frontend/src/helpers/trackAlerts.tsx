import Swal from "sweetalert2";

import React from 'react'

function TrackAlerts(expences:any) {

    let alerts:string[] = []
    expences.track.forEach((track:any) => {
        expences.categories.forEach((category:any) => {
            if((track._id === category._id) && (track.total > category.max)){
                alerts.push(`<p>You are Wasting to much in ${category.name} as always!</p>`)
            }
        });
    });
    
    if( alerts.length > 0 ){

        Swal.fire({
            title: '<strong><u>Please Stop Wasting Your Money</u></strong>',
            icon: 'warning',
            html:
            '<b>Stop</b>, ' +
            `${alerts.join('')} `
            ,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText:
            '<i class="fa-solid fa-face-sad-cry"></i> Sorry!',
        });
        
    }
}

export default TrackAlerts