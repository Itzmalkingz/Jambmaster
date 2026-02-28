// Supabase Configuration
const SUPABASE_URL = 'https://edagyypljswefulfngia.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkYWd5eXBsanN3ZWZ1bGZuZ2lhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3ODI3MzYsImV4cCI6MjA4NzM1ODczNn0.ENxr-lPG_rK3UwDODIDenMIKt0jgaoO-kS-hbNYNswY';

// Create Supabase client
let supabase = null;

function createSupabaseClient() {
    // Check if supabaseClient is available (from CDN)
    if (typeof window.supabase !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('✅ Supabase client created');
        return supabase;
    }
    
    // If not available, try again in 500ms
    setTimeout(createSupabaseClient, 500);
    return null;
}

// Initialize immediately
createSupabaseClient();


