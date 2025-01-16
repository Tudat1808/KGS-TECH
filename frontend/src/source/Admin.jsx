import React, { useState, useEffect } from 'react';
import '../App.css'; // Đảm bảo đường dẫn đến file CSS chính xác
import Header from '../components/Header';
import LoadingPage from '../components/LoadingPage';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Admin = () => {
  const { t } = useTranslation();
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(true); // Thêm state để quản lý loading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Ẩn trang loading sau một khoảng thời gian
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = { username, password, firstName, lastName, dob, gender, phone };
    console.log('Form submitted:', userInfo);
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
        <div className={`${isSignUp ? 'signup-form-container' : 'login-form-container'} animate__animated animate__fadeIn`}>
          <form onSubmit={handleSubmit} className="login-form">
            <h1 className="text-center">{isSignUp ? t('admin.signUpTitle') : t('admin.loginTitle')}</h1>
            {isSignUp && (
              <>
                <div className="input-group">
                  <label htmlFor="firstName">{t('admin.firstName')}</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder={t('admin.firstNamePlaceholder')}
                    style={{ fontStyle: 'italic', fontSize: 'small' }}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="lastName">{t('admin.lastName')}</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={t('admin.lastNamePlaceholder')}
                    style={{ fontStyle: 'italic', fontSize: 'small' }}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="dob">{t('admin.dob')}</label>
                  <input
                    type="date"
                    id="dob"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    placeholder={t('admin.dobPlaceholder')}
                    style={{ fontStyle: 'italic', fontSize: 'small' }}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="gender">{t('admin.gender')}</label>
                  <select
                    id="gender"
                    className="select-custom"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">{t('admin.select')}</option>
                    <option value="male">{t('admin.male')}</option>
                    <option value="female">{t('admin.female')}</option>
                    <option value="other">{t('admin.other')}</option>
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="phone">{t('admin.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t('admin.phonePlaceholder')}
                    style={{ fontStyle: 'italic', fontSize: 'small' }}
                  />
                </div>
              </>
            )}
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
            <Link to="/management" style={{ textDecoration: 'none' }}>
              <button className="login-button" type="submit">
                {isSignUp ? t('admin.signUpButton') : t('admin.loginButton')}
              </button>
            </Link>
            <button type="button" className="signup-button" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? t('admin.backToLogin') : t('admin.signUpButton')}
            </button>
          </form>
        </div>

      </div>
    </>
  );
};

export default Admin;
