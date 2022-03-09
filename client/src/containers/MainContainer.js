import ListContainer from './ListContainer.js'
import FormContainer from './FormContainer.js'

function MainContainer({bookings, removeBooking}) {
    return ( 
        <>
            <h1>Our Fancy Schmancy App</h1>
            <ListContainer removeBooking={removeBooking} bookings={bookings} />
            <FormContainer />
        </>
    );
}

export default MainContainer;