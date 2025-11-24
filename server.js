import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

import db from './db.js';
import corsMiddleware from './config/сors.js';
import sessionMiddleware from './config/session.js';

dotenv.config();

const app = express();

app.use(corsMiddleware);
app.use(sessionMiddleware);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const [existing] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if (existing.length > 0) {
            return res.json({ success: false, message: 'Користувач з таким іменем вже існує' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
        await db.query(sql, [username, hashedPassword, email]);

        console.log(`New user: ${username}`);
        res.json({ success: true, message: 'Реєстрація успішна' });
    } catch (err) {
        console.error("Register Error:", err);
        res.status(500).json({ success: false, message: 'Помилка: юзер існує або збій БД' });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

        if (rows.length === 0) {
            return res.json({ success: false, message: 'Невірний логін або пароль' });
        }

        const user = rows[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            req.session.user = { id: user.id, username: user.username, email: user.email };
            console.log(`User logged in: ${username}`);
            res.json({ success: true, user: req.session.user });
        } else {
            res.json({ success: false, message: 'Невірний логін або пароль' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Помилка сервера' });
    }
});

app.get('/auth/check', (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, user: req.session.user });
    } else {
        res.json({ loggedIn: false });
    }
});

app.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.json({ success: true });
    });
});

app.get('/artists', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM artists');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching artists' });
    }
});

app.get('/artists/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM artists WHERE id = ?', [id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: 'Artist not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});