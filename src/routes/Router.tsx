import {createBrowserRouter} from 'react-router-dom'
import BookReader from '../pages/book_reader/book_reader';
import App from '../App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/book/:name",
    element: <BookReader />,
  },
]);

export default router;
