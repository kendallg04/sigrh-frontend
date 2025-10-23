import { mapValidationErrors } from "./validationService";

export const handleApiError = (error, showError) => {
    const backendError = error.data;

    if (backendError && backendError.data) {
        const errors = mapValidationErrors(backendError);
        let html = "<ul style='text-align: left'>";
        for (const field in errors) {
            html += `<li><b>${field}:</b> ${errors[field]}</li>`;
        }
        html += "</ul>";

        showError(null, html);
        return;
    }
    showError(error.message || "Ocurrió un error inesperado");
};
