import logo from './logo.svg';
import './App.css';

import useGetTestApi from './hooks/useGetTestApi';
import usePostTestApi from './hooks/usePostTestApi';

function App() {
  const { loading, response } = useGetTestApi();
  const {
    loading: loadingPost,
    response: responsePost,
    execPost,
  } = usePostTestApi();
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{loading ? 'loading' : response?.data?.id}</p>
        <p>{loadingPost ? 'loadingPost' : responsePost?.id}</p>
        <a
          className='App-link'
          onClick={() =>
            execPost({ email: 'eve.holt@reqres.in', password: 'pistol' })
          }
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
