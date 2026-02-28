// ==================== AUTHENTICATION SYSTEM WITH SUPABASE ====================
let currentUser = null;
let supabaseReady = false;

// Wait for Supabase to load
function initSupabase() {
    // The Supabase library should be available via window.supabase
    // If the config loaded properly, 'supabase' global should exist
    if (typeof supabase !== 'undefined' && supabase !== null) {
        supabaseReady = true;
        console.log('✅ Supabase authenticated');
        return true;
    }
    console.log('⏳ Waiting for Supabase...');
    return false;
}

// Check Supabase availability with retry
function ensureSupabase() {
    return new Promise((resolve) => {
        if (typeof supabase !== 'undefined' && supabase !== null) {
            resolve(true);
            return;
        }
        
        let attempts = 0;
        const checkInterval = setInterval(() => {
            if (typeof supabase !== 'undefined' && supabase !== null) {
                supabaseReady = true;
                clearInterval(checkInterval);
                console.log('✅ Supabase ready');
                resolve(true);
                return;
            }
            attempts++;
            if (attempts > 100) { // 10 seconds timeout
                clearInterval(checkInterval);
                console.error('❌ Supabase failed to load');
                resolve(false);
            }
        }, 100);
    });
}

// Handle Login with Supabase
async function handleLogin(e) {
    if (e) e.preventDefault();
    
    const email = document.getElementById('login-email')?.value;
    const password = document.getElementById('login-password')?.value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Make sure Supabase is ready
    if (!await ensureSupabase()) {
        alert('❌ Supabase connection failed. Please refresh the page and try again.');
        return;
    }
    
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        
        if (error) {
            alert('❌ Login failed: ' + error.message);
            console.error('Login error:', error);
            return;
        }
        
        if (!data.user) {
            alert('❌ Login failed: No user data received');
            return;
        }
        
        // Save user session
        currentUser = {
            id: data.user.id,
            email: data.user.email
        };
        sessionStorage.setItem('currentLoggedInUser', JSON.stringify(currentUser));
        
        alert('✅ Login successful!');
        window.location.href = 'dashboard.html';
        
    } catch (error) {
        alert('❌ Error: ' + error.message);
        console.error('Login exception:', error);
    }
}

// Handle Signup with Supabase
async function handleSignup(e) {
    if (e) e.preventDefault();
    
    const name = document.getElementById('signup-name')?.value;
    const email = document.getElementById('signup-email')?.value;
    const password = document.getElementById('signup-password')?.value;
    const confirm = document.getElementById('signup-confirm')?.value;
    const year = document.getElementById('signup-jamb-year')?.value || document.getElementById('signup-year')?.value;
    
    if (!name || !email ||  !password || !confirm || !year) {
        alert('❌ Please fill in all fields');
        return;
    }
    
    if (password !== confirm) {
        alert('❌ Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('❌ Password must be at least 6 characters');
        return;
    }
    
    // Make sure Supabase is ready
    if (!await ensureSupabase()) {
        alert('❌ Supabase connection failed. Please refresh the page.');
        return;
    }
    
    try {
        // Create auth user
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });
        
        if (error) {
            alert('❌ Signup failed: ' + error.message);
            return;
        }
        
        alert('✅ Account created! You can now login.');
        window.location.href = 'login.html';
        
    } catch (error) {
        alert('❌ Error: ' + error.message);
        console.error('Signup error:', error);
    }
}

// Logout
async function logout() {
    if (confirm('Are you sure you want to logout?')) {
        try {
            if (await ensureSupabase()) {
                await supabase.auth.signOut();
            }
            sessionStorage.removeItem('currentLoggedInUser');
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Logout error:', error);
            window.location.href = 'login.html';
        }
    }
}

// Check authentication on page load
function checkAuth() {
    const loggedInUser = sessionStorage.getItem('currentLoggedInUser');
    if (!loggedInUser) {
        const path = window.location.pathname;
        if (!path.includes('login.html') && !path.includes('signup.html') && !path.includes('index.html')) {
            window.location.href = 'login.html';
        }
    } else {
        currentUser = JSON.parse(loggedInUser);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initSupabase();
    checkAuth();
});
