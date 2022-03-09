const baseURL = 'http://127.0.0.1:5000/api/bookings'

export const getBookings = () => {
    const result = fetch(baseURL)
        .then((res) => res.json())
    return result;
}