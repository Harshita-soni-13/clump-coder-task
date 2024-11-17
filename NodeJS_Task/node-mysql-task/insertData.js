const db = require('./db');

const insertData = async () => {
    try {
       
        const [result] = await db.query(`
            INSERT INTO master (category_name) VALUES
            ('Education'),
            ('Work Experience'),
            ('Skills');
        `);

        console.log(`Inserted ${result.affectedRows} categories into master table.`);

        
        await db.query(`
            INSERT INTO detail (master_id, question) VALUES
            (1, 'What is your highest degree?'),
            (1, 'Which institution did you graduate from?'),
            (2, 'What was your last job role?'),
            (2, 'How many years of experience do you have?'),
            (3, 'What technical skills do you possess?');
        `);

        console.log('Questions inserted into detail table.');
    } catch (err) {
        console.error('Error inserting data:', err);
    }
};

insertData();
