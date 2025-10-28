import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LoginPage.css'; // <-- 1. IMPORT FILE CSS BARU

function LoginPage() {
  // --- (LOGIKA ANDA SEMUA SAMA PERSIS) ---
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert('Login Berhasil!');
        localStorage.setItem('token', data.data.token);
        navigate('/dashboard'); 
      } else {
        setError(data.message || 'Login gagal, silakan cek kembali.');
      }
    } catch (err) {
      console.error('Error saat login:', err);
      setError('Tidak dapat terhubung ke server.');
    }
  };
  // --- (AKHIR LOGIKA) ---


  // --- 2. TAMPILAN (JSX) MENGGUNAKAN 'className' ---
  return (
    <div className="loginPage">
      <div className="loginContainer">
        
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Halaman Login</h2>
        
        {error && <p className="errorText">{error}</p>}
        
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input"
            />
          </div>
          
          <div className="formGroup">
            <label htmlFor="password" className="label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
            />
          </div>
          
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;