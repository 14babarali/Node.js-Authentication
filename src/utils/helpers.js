export const validateInput = (username, password) => {
    if (!username || !password) {
        return 'Please provide username and password';
    }
    
    if (username.length < 3) {
        return 'Username must be at least 3 characters';
    }
    
    if (password.length < 6) {
        return 'Password must be at least 6 characters';
    }
    
    return null; 
};