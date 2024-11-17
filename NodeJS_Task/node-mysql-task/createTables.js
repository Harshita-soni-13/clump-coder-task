const db = require('./db');

const createTables = async () => {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS master (
                id INT AUTO_INCREMENT PRIMARY KEY,
                category_name VARCHAR(100) NOT NULL
            );
        `);

     
        await db.query(`
            CREATE TABLE IF NOT EXISTS detail (
                id INT AUTO_INCREMENT PRIMARY KEY,
                master_id INT NOT NULL,
                question TEXT NOT NULL,
                FOREIGN KEY (master_id) REFERENCES master(id) ON DELETE CASCADE
            );
        `);

        console.log('Tables created successfully!');
    } catch (err) {
        console.error('Error creating tables:', err);
    }
};

createTables();
