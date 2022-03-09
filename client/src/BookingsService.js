const baseURL = 'http://127.0.0.1:5000/api/bookings/'

export const getBookings = () => {
    const result = fetch(baseURL)
        .then((res) => res.json())
    return result;
};

export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST', 
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json' }
    }).then((res) => res.json())
};

export const deleteBooking = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
};