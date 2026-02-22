require('dotenv').config({ quiet: true });
const express = require('express');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;
const NODE_ENV = process.env.NODE_ENV || 'development';
const USERS_FILE = path.join(__dirname, 'users.json');

// ===========================================
// MIDDLEWARE
// ===========================================
app.use(cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:5173', 'http://localhost:3000', 'https://craftsyyy.parot.dev'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===========================================
// DATA STORE (JSON FILE)
// ===========================================
const initDataStore = () => {
    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, JSON.stringify([]));
        console.log('[DATA] Users file created');
    }
};

const getUsers = () => {
    try {
        const data = fs.readFileSync(USERS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('[DATA] Error reading users:', err.message);
        return [];
    }
};

const saveUsers = (users) => {
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
    } catch (err) {
        console.error('[DATA] Error saving users:', err.message);
    }
};

// Initialize data store
initDataStore();

// ===========================================
// HEALTH CHECK
// ===========================================
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        environment: NODE_ENV
    });
});

// ===========================================
// AUTH ROUTES
// ===========================================
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters' });
        }

        const users = getUsers();
        const existingUser = users.find(u => u.email === email.toLowerCase());

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            id: Date.now().toString(),
            email: email.toLowerCase(),
            password: hashedPassword,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        saveUsers(users);

        const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: '7d' });

        console.log(`[AUTH] New user registered: ${email}`);
        res.status(201).json({ token, message: 'User created successfully' });
    } catch (error) {
        console.error('[AUTH] Signup error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const users = getUsers();
        const user = users.find(u => u.email === email.toLowerCase());

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });

        console.log(`[AUTH] User logged in: ${email}`);
        res.status(200).json({ token, message: 'Logged in successfully' });
    } catch (error) {
        console.error('[AUTH] Login error:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// ===========================================
// CONFIG ROUTES
// ===========================================
app.get('/api/config/whatsapp', (req, res) => {
    res.json({
        number: process.env.WHATSAPP_NUMBER || '',
        message: process.env.WHATSAPP_MESSAGE || ''
    });
});

// ===========================================
// PRODUCTION ROUTING
// ===========================================
if (NODE_ENV === 'production') {
    const staticPath = path.join(__dirname, '../Craftsyy/dist');

    app.use(express.static(staticPath));
    console.log(`[SERVE] Static files from: ${staticPath}`);

    // SPA fallback - serve index.html for non-API routes
    app.use((req, res, next) => {
        if (!req.path.startsWith('/api')) {
            res.sendFile(path.join(staticPath, 'index.html'));
        } else {
            next();
        }
    });
} else {
    app.get('/', (req, res) => {
        res.json({
            message: 'Craftsyyy API Server',
            version: '1.0.0',
            endpoints: {
                health: '/api/health',
                auth: {
                    signup: 'POST /api/auth/signup',
                    login: 'POST /api/auth/login'
                },
                config: 'GET /api/config/whatsapp'
            }
        });
    });
}

// ===========================================
// ERROR HANDLING
// ===========================================
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error('[ERROR] Server error:', err.message);
    res.status(500).json({ message: 'Internal server error' });
});

// ===========================================
// SERVER START
// ===========================================
const server = app.listen(PORT, () => {
    console.log('='.repeat(40));
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📦 Environment: ${NODE_ENV}`);
    console.log(`🔐 JWT Secret: ${JWT_SECRET ? 'Configured' : 'Missing!'}`);
    console.log('='.repeat(40));
});

// Graceful shutdown
const shutdown = (signal) => {
    console.log(`\n[SHUTDOWN] Received ${signal}, closing server...`);
    server.close(() => {
        console.log('[SHUTDOWN] Server closed');
        process.exit(0);
    });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

// Unhandled errors
process.on('unhandledRejection', (err) => {
    console.error('[ERROR] Unhandled rejection:', err.message);
    server.close(() => process.exit(1));
});

process.on('uncaughtException', (err) => {
    console.error('[ERROR] Uncaught exception:', err.message);
    process.exit(1);
});

process.on('exit', (code) => {
    console.log('[DEBUG] Process is exiting with code:', code);
});
