function ListItem({booking}) {
    return ( 
        <div className="booking">
            <h3>Name: {booking.name}</h3>
            <p>Email: {booking.email}</p>
        </div>
    );
}

export default ListItem;