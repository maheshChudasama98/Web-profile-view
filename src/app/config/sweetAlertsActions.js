import React from "react";
import Swal from 'sweetalert2';

const sweetAlerts = (icon, message, theme) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    });

    Toast.fire({
        icon: icon,
        title: message,

        // background: "yellow",
    });
};


export {
    sweetAlerts
}