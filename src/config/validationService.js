export const mapValidationErrors = (errorResponse) => {
    if (!errorResponse?.data) return {};

    const mapped = {};

    for (const field in errorResponse.data) {
        const messages = errorResponse.data[field];

        if (Array.isArray(messages) && messages.length > 0) {
            mapped[field] = messages.join(", ");
        }
    }

    return mapped;
};