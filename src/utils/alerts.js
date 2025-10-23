import Swal from 'sweetalert2';

export const showError = (message, html = null) => {
    Swal.fire({
        title: 'Hubo un Error',
        text: html ? undefined : message,
        html: html || undefined,
        icon: 'error',
        confirmButtonText: 'Entendido'
    });
};