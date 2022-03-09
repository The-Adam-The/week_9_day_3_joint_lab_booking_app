import {deleteBooking} from '../BookingsService'

function ListItem({booking, removeBooking}) {

    const handleDelete = () => {
        console.log(booking._id)
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id)
        })
    }

    return ( 
        <div className="booking">
            <h3>Name: {booking.name}</h3>
            <p>Email: {booking.email}</p>
            <button onClick={handleDelete} >Delete</button>
        </div>
    );
}

export default ListItem;