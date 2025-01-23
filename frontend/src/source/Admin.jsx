import React, { useState, useEffect } from 'react';
import '../App.css'; // Đảm bảo đường dẫn đến file CSS chính xác
import Header from '../components/Header';
import LoadingPage from '../components/LoadingPage';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(''); // Thêm state để xử lý lỗi
  const navigate = useNavigate(); // Sử dụng để điều hướng

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Reset lỗi
    const userInfo = { email: username, password };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials'); // Xử lý khi API trả lỗi
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Lưu token vào localStorage hoặc sessionStorage
      localStorage.setItem('access_token', data.access_token);

      // Điều hướng đến trang quản lý
      navigate('/management/homepage');
    } catch (error) {
      console.error('Login error:', error);
      window.alert('Invalid username or password'); // Hiển thị lỗi cho người dùng
    }
  };

  return (
    <>
      <Header />
      <div className="admin-container">
        <div className="welcome-message animate__animated animate__fadeIn">
          {t('admin.welcome')}
        </div>
        <div className="login-background">
          <div className="background-image"></div>
        </div>
        <div className="login-form-container animate__animated animate__fadeIn">
          <form onSubmit={handleSubmit} className="login-form">
            <h1 className="text-center">{t('admin.loginTitle')}</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="input-group">
              <label htmlFor="username">{t('admin.username')}</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={t('admin.usernamePlaceholder')}
                style={{ fontStyle: 'italic', fontSize: 'small' }}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">{t('admin.password')}</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('admin.passwordPlaceholder')}
                style={{ fontStyle: 'italic', fontSize: 'small' }}
              />
            </div>
            <button className="login-button" type="submit">
              {t('admin.loginButton')}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
