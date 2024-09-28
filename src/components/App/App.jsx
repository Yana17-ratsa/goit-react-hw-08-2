// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
// import ContactList from '../ContactList/ContactList';
// import css from './App.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from '../../redux/contactsOps';
// import {
//   selectContacts,
//   selectError,
//   selectLoading,
// } from '../../redux/contactsSlice';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';

function App() {
  const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
  const RegistrationPage = lazy(() =>
    import('../../pages/RegistrationPage/RegistrationPage')
  );
  const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
  const ContactsPage = lazy(() =>
    import('../../pages/ContactsPage/ContactsPage')
  );

  return (
    <div>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
