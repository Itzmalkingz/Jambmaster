// ==================== AUTHENTICATION SYSTEM ====================
let currentUser = null;
let users = JSON.parse(localStorage.getItem('jambUsers')) || [];

// Create demo account if no users exist
if (users.length === 0) {
    const demoUser = {
        id: 1,
        name: 'Demo User',
        email: 'test@example.com',
        password: 'password123',
        year: 2026,
        progress: {
            totalAttempted: 15,
            totalCorrect: 12,
            quizzesCompleted: 3,
            bySubject: {
                english: { attempted: 5, correct: 4 },
                math: { attempted: 5, correct: 4 },
                biology: { attempted: 5, correct: 4 }
            },
            activities: []
        }
    };
    users.push(demoUser);
    localStorage.setItem('jambUsers', JSON.stringify(users));
}

// Handle Login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentLoggedInUser', JSON.stringify(user));
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password. Try: test@example.com / password123');
    }
}

// Handle Signup
function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    const year = document.getElementById('signup-year').value;
    
    if (password !== confirm) {
        alert('Passwords do not match');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        alert('Email already registered');
        return;
    }
    
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        year,
        progress: {
            totalAttempted: 0,
            totalCorrect: 0,
            quizzesCompleted: 0,
            bySubject: {},
            activities: []
        }
    };
    
    users.push(newUser);
    localStorage.setItem('jambUsers', JSON.stringify(users));
    
    alert('Account created successfully! Logging you in...');
    currentUser = newUser;
    localStorage.setItem('currentLoggedInUser', JSON.stringify(newUser));
    window.location.href = 'dashboard.html';
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentLoggedInUser');
        window.location.href = 'login.html';
    }
}

// Check authentication on page load
function checkAuth() {
    const loggedInUser = localStorage.getItem('currentLoggedInUser');
    if (!loggedInUser) {
        // Only redirect if we're not on login or signup page
        if (!window.location.pathname.includes('login.html') && !window.location.pathname.includes('signup.html')) {
            window.location.href = 'login.html';
        }
    } else {
        currentUser = JSON.parse(loggedInUser);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', checkAuth);
