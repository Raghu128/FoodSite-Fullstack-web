import Cards from './components/Card';
import Header from './components/Headers';
import { useDispatch } from 'react-redux';
import { fetchingLogin } from './services/isLogin';

function Layout() {
  const dispatch = useDispatch();

  fetchingLogin(dispatch);
  return (
    <>
    <Header/>
    <Cards/>
    </>


  );
}

export default Layout;
