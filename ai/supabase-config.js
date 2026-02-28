// Supabase Configuration
const SUPABASE_URL = 'https://edagyypljswefulfngia.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkYWd5eXBsanN3ZWZ1bGZuZ2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3ODI3MzYsImV4cCI6MjA4NzM1ODczNn0.ENxr-lPG_rK3UwDODIDenMIKt0jgaoO-kS-hbNYNswY';

// Create Supabase client
let supabase = null;

function createSupabaseClient() {
    console.log('🔍 Looking for Supabase library...');
    
    // Try different ways to access Supabase
    let supabaseLib = null;
    
    if (typeof window !== 'undefined') {
        // Method 1: Direct window.supabase
        if (window.supabase && typeof window.supabase.createClient === 'function') {
            supabaseLib = window.supabase;
            console.log('✅ Found Supabase via window.supabase');
        }
        // Method 2: Check for alternate names
        else if (window.supabaseClient) {
            supabaseLib = window.supabaseClient;
            console.log('✅ Found Supabase via window.supabaseClient');
        }
    }
    
    if (supabaseLib && typeof supabaseLib.createClient === 'function') {
        try {
            supabase = supabaseLib.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('✅ Supabase client initialized successfully');
            window.supabaseReady = true;
            return supabase;
        } catch (error) {
            console.error('❌ Error creating Supabase client:', error);
            return null;
        }
    }
    
    // If not available yet, retry in 500ms
    console.log('⏳ Supabase not ready, retrying in 500ms...');
    setTimeout(createSupabaseClient, 500);
    return null;
}

// Initialize on window load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('📄 DOM loaded, initializing Supabase...');
        createSupabaseClient();
    });
} else {
    console.log('📄 DOM already loaded, initializing Supabase...');
    createSupabaseClient();
}

// Also try immediately
setTimeout(() => createSupabaseClient(), 100);



