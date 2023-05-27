const AddEvent = () => {
    return (
        <>
            <div className="create-event-form">
                <form action="" method="post">
                    <h1>Fill in Event Details</h1>
                    <label>Name:</label>
                    <input type="text" name="event_name"></input>
                    <label>Involved Organization:</label>
                    <input type="text" name="organization"></input>
                    <label>Involved Person:</label>
                    <input type="text" name="person"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </>
    );
}

export default AddEvent;