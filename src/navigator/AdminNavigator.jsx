import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/admin/Dashboard";
import Movies from "../components/admin/Movies";
import Actors from "../components/admin/Actors";
import Notfound from "../components/Notfound";
import AdminNavbar from "../components/admin/AdminNavbar";
import Header from "../components/admin/Header";

function AdminNavigator() {
  return (
    <div className="flex bg-white dark:bg-primary">
      <AdminNavbar />
      <div className="flex-1 p-2 max-w-screen-xl">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/actors" element={<Actors />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminNavigator;
