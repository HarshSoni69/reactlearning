const RestaurantNotFound = () => {
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Restaurant Not Found</h2>
            <p style={styles.text}>We couldn't find any restaurants matching your search.</p>
            <img src="https://thumbs.dreamstime.com/b/not-found-blue-stamp-not-found-blue-stamp-isolated-white-background-97561679.jpg" alt="Restaurant Not Found" style={styles.image} />
            <p style={styles.text}>Please try a different search term or explore other options.</p>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    text: {
        fontSize: '16px',
        marginBottom: '15px',
    },
    image: {
        maxWidth: '100%',
        marginBottom: '15px',
    }
};

export default RestaurantNotFound;
