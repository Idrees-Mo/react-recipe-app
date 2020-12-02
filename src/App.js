import Header from './components/Header'
import Footer from './components/Footer'
import Main from './containers/main'
import Loader from './components/Loader';
import { useContext } from 'react'
import RecipeContext from './context/RecipeContext'

const App = () => {
  const { loading } = useContext(RecipeContext)
  return (
    <>
      {loading && <Loader />}
      <Header />
      <Main />
      <Footer />
    </>
  );
}
export default App;

