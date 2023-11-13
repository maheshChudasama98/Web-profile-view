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
    });
};

const sweetAlertDelete = () => {
    return Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        confirmButtonColor: '#92d050',
        cancelButtonColor: 'red',
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            return 'deleted';
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            return 'cancelled';
        }
    });
};


export {
    sweetAlerts,
    sweetAlertDelete
}