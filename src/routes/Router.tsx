import {createBrowserRouter} from 'react-router-dom'
import App from '../App';
import { PersonalBooks } from '../pages/PrivateBooks/PersonalBook';
import { TranslateEpub } from '../pages/Translate/Translate';
import { PageNotFound } from '../pages/PageNotFound/PageNotFound';
import { EbookReader } from '../pages/NewEbook/book_reader';
import { Login } from '../pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/book/:name",
    element: <EbookReader/>,
  },
  {
    path: "/personal_book",
    element: <PersonalBooks mobile={false} />
  },
  {
    path: "/m_personal_book",
    element: <PersonalBooks mobile={true} />
  },
  {
    path: "/translate",
    element: <TranslateEpub />
  },
  {
    path: "/favorites",
    element: <PageNotFound/>
  },
  {
    path: "/reading",
    element: <PageNotFound/>
  },
  {
    path: "login",
    element: <Login />
  }

]);

export default router;
