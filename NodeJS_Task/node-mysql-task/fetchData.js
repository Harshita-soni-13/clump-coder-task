const db = require('./db');

const fetchData = async () => {
    try {
       
        const [rows] = await db.query(`
            SELECT m.category_name, d.question
            FROM master m
            JOIN detail d ON m.id = d.master_id;
        `);

        console.log('Fetched data:');
        rows.forEach(row => {
            console.log(`Category: ${row.category_name}, Question: ${row.question}`);
        });
    } catch (err) {
        console.error('Error fetching data:', err);
    }
};

fetchData();
