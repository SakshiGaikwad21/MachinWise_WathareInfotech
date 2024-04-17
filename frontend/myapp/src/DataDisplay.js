import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataDisplay() {
    const [data, setData] = useState([]); // This state holds the data fetched from API
    const [loading, setLoading] = useState(true); // This state tracks the loading status
    const [error, setError] = useState(null); // This state handles any errors during the fetch

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const result = await axios('http://localhost:5000/api/data'); // Adjust the URL as needed
                setData(result.data);
                setLoading(false); // Set loading to false when data is received
            } catch (error) {
                setError(error);
                setLoading(false); // Ensure loading is set to false if an error occurs
            }
        };

        fetchData(); // Call the fetchData function after the component mounts
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading) return <p>Loading...</p>; // Display a loading text or a spinner
    if (error) return <p>Error loading data!</p>; // Display an error message

    return (
        <div>
            <h1>Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item._id}>Timestamp: {item.timestamp}, Value: {item.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataDisplay;
