import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { AdminDash, HomeAdmin, AllPolls, NotFound, PermissionsAdmin, Users, Stats, SignUp, Home, PollClient } from "./pages";
import Layout from './Layout';
// import Store from "./hooks/Store";
// import NewPollForm from "./components/AddPoll/NewPollForm"
import {
  AdminDash,
  HomeAdmin,
  AllPolls,
  NotFound,
  PermissionsAdmin,
  Users,
  Stats,
  SignUp,
  Home,
  PollClient,
  NewPollForm,
} from './pages';
import Store from './hooks/Store';
import NewPool from './components/NewPool';

function App() {
  return (
    <div className="App">
      <Store>
        <Layout>
          <Routes>
            <Route path={'/'} exact element={<SignUp />} />
            {/* <Route path={'/sign-up'} exact element={<SignUp />} /> */}
            <Route path={'/poll/:id'} element={<PollClient />} />
            <Route path={'/my-polls'} element={<></>} />
            <Route path={'/test'} element={<NewPool />} />

            <Route element={<PermissionsAdmin />}>
              <Route path="admin" element={<AdminDash />}>
                <Route index element={<HomeAdmin />} />
                <Route path="all-polls" element={<AllPolls />} />
                <Route path="users" element={<Users />} />
                <Route path={"/admin/poll/:id"} element={<NewPollForm/>} />
                <Route path="stats" element={<Stats />}>
                  <Route path="poll-general" element={<></>} />
                </Route>
              </Route>
            </Route>

            <Route path="*" element={<NotFound title={'Oops'} message={"we didn't found this page"} />} />
          </Routes>
        </Layout>
      </Store>
    </div>
  );
}

export default App;
