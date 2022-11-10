import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { getIssue, issueSelector } from './features/issue';
import List from './components/List';
import NavBar from './components/NavBar';
import Loader from './components/Loader';




function App() {
  const dispatch = useDispatch();
  const { loading, items, page } = useSelector(issueSelector)
  useEffect(() => {
    dispatch(getIssue())
    return () => {
    }
  }, [dispatch])

  const loadMore = useCallback(
    () => {
      dispatch(getIssue({ page: page + 1 }))
    },
    [page, dispatch],
  )


  return (
    <div className='overflow-hidden'>
      <NavBar />
      <List data={items} loadMore={loadMore} loading={loading} />
    </div>
  );
}

export default App;
