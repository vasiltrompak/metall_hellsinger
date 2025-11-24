import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const initDB = async () => {
    console.log("🔄 Починаємо ініціалізацію бази даних...");

    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    });

    try {
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
        console.log(`✅ База даних '${process.env.DB_NAME}' перевірена/створена.`);

        await connection.query(`USE ${process.env.DB_NAME}`);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users
            (
                id
                INT
                AUTO_INCREMENT
                PRIMARY
                KEY,
                username
                VARCHAR
            (
                50
            ) NOT NULL UNIQUE,
                password VARCHAR
            (
                255
            ) NOT NULL,
                email VARCHAR
            (
                100
            )
                )
        `);
        console.log("✅ Таблиця 'users' готова.");

        await connection.query(`DROP TABLE IF EXISTS artists`);

        await connection.query(`
            CREATE TABLE artists
            (
                order_id  INT AUTO_INCREMENT,
                id        VARCHAR(50) NOT NULL,
                name      VARCHAR(100),
                band      VARCHAR(100),
                songs     JSON,
                gridImage VARCHAR(255),
                btnOff    VARCHAR(255),
                btnOn     VARCHAR(255),
                mainImage VARCHAR(255),
                PRIMARY KEY (order_id)
            )
        `);
        console.log("✅ Таблиця 'artists' перестворена.");

        const artistsSql = `
            INSERT INTO artists (id, name, band, songs, gridImage, btnOff, btnOn, mainImage)
            VALUES ('tatiana', 'Tatiana Shmaluk', 'Jinjer', '[{"name": "Burial at Night", "videoId": "PiD6_pPT8W0"}]',
                    '/assets/artists/tatiana_shmayluk.webp', '/assets/artists/tatiana_shmayluk_button_1.webp',
                    '/assets/artists/tatiana_shmayluk_button_2.webp', '/assets/artists/backgrounds/tatiana.webp'),
                   ('bjorn', 'Björn Strid', 'Soilwork', '[{"name": "Dissolution", "videoId": "FTQ5akx7syQ"}]',
                    '/assets/artists/bjorn_strid.webp', '/assets/artists/bjorn_strid_button_1.webp',
                    '/assets/artists/bjorn_strid_button_2.webp', '/assets/artists/backgrounds/bjorn.webp'),
                   ('matt', 'Matt Heafy', 'Trivium', '[{"name": "This Devastation", "videoId": "HidvYgF9-8Q"}]',
                    '/assets/artists/matt_heafy.webp', '/assets/artists/matt_heafy_button_1.webp',
                    '/assets/artists/matt_heafy_button_2.webp', '/assets/artists/backgrounds/matt.webp'),
                   ('mikael', 'Mikael Stanne', 'Dark Tranquillity',
                    '[{"name": "Through You", "videoId": "3Cf5VjO4rfA"}, {"name": "This Is the End", "videoId": "vtNEEd3ykuQ"}, {"name": "Blood and Law", "videoId": "eU6fuUwZuWY"}]',
                    '/assets/artists/mikael_stanne.webp', '/assets/artists/mikael_stanne_button_1.webp',
                    '/assets/artists/mikael_stanne_button_2.webp', '/assets/artists/backgrounds/mikeal.webp'),
                   ('serj', 'Serj Tankian', 'System of a Down', '[{"name": "No Tomorrow", "videoId": "CVyPO_tR540"}]',
                    '/assets/artists/serj_tankian.webp', '/assets/artists/serj_tankian_button_1.webp',
                    '/assets/artists/serj_tankian_button_2.webp', '/assets/artists/backgrounds/serj.webp'),
                   ('dennis', 'Dennis Lyxzén', 'Refused & INVSN',
                    '[{"name": "Silence No More", "videoId": "8q2fnTCXrEs"}]', '/assets/artists/dennis_lyxen.webp',
                    '/assets/artists/dennis_lyxen_button_1.webp', '/assets/artists/dennis_lyxen_button_2.webp',
                    '/assets/artists/backgrounds/dennis.webp'),
                   ('randy', 'Randy Blythe', 'Lamb of God', '[{"name": "Acheron", "videoId": "THV2b2tHEQE"}]',
                    '/assets/artists/randy_blythe.webp', '/assets/artists/randy_blythe_button_1.webp',
                    '/assets/artists/randy_blythe_button_2.webp', '/assets/artists/backgrounds/randy.webp'),
                   ('james', 'James Dorton', 'Whitechapel', '[{"name": "Poetry of Cinder", "videoId": "jt3_-e9MjQ0"}]',
                    '/assets/artists/james_dorton.webp', '/assets/artists/james_dorton_button_1.webp',
                    '/assets/artists/james_dorton_button_2.webp', '/assets/artists/backgrounds/james.webp'),
                   ('christina', 'Christina Scabbia', 'Lacuna Coil',
                    '[{"name": "Dream of the Beast", "videoId": "8ugDtmwP_3s"}]',
                    '/assets/artists/christina_scabbia.webp', '/assets/artists/cristina_scabbia_button_1.webp',
                    '/assets/artists/cristina_scabbia_button_2.webp', '/assets/artists/backgrounds/christina.webp'),
                   ('will', 'Will Ramos', 'Lorna Shore', '[{"name": "Leviathan", "videoId": "79d_QYKiC48"}]',
                    '/assets/artists/will_ramos.webp', '/assets/artists/will_rumos_button_1.webp',
                    '/assets/artists/will_rumos_button_2.webp', '/assets/artists/backgrounds/will.webp'),
                   ('alissa', 'Alissa White-Gluz', 'Arch Enemy', '[{"name": "Stygia", "videoId": "cpJ0jBTdP70"}]',
                    '/assets/artists/alissa_white_gluz.webp', '/assets/artists/alissa_white_gluz_button_1.webp',
                    '/assets/artists/alissa_white_gluz_button_2.webp', '/assets/artists/backgrounds/alissa.webp');
        `;

        await connection.query(artistsSql);
        console.log("✅ Дані артистів успішно завантажені.");

    } catch (error) {
        console.error("❌ Помилка ініціалізації:", error);
    } finally {
        await connection.end();
        console.log("🏁 Роботу завершено. Можна запускати сервер!");
    }
};

initDB();