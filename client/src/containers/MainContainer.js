import ListContainer from './ListContainer.js'
import FormContainer from './FormContainer.js'

function MainContainer({bookings}) {
    return ( 
        <>
            <h1>Our Fancy Schmancy App</h1>
            <ListContainer bookings = {bookings} />
            <FormContainer />
        </>
    );
}

export default MainContainer;