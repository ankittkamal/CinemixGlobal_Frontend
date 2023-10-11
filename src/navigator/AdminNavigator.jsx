import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/admin/Dashboard";
import Movies from "../components/admin/Movies";
import Actors from "../components/admin/Actors";
import Notfound from "../components/Notfound";
import AdminNavbar from "../components/admin/AdminNavbar";
import Header from "../components/admin/Header";
import MovieUpload from "../components/admin/MovieUpload";
import { useState } from "react";
import ActorUpload from "../components/models/ActorUpload";

function AdminNavigator() {
  const [showMovieUploadModal, setShowMovieUploadModal] = useState(false);
  const [showActorUploadModal, setshowActorUploadModal] = useState(false);

  const displayMovieUploadModal = () => {
    setShowMovieUploadModal(true);
  };
  const displayActorUploadModal = () => {
    setshowActorUploadModal(true);
  };
  const hideMovieUploadModal = () => {
    setShowMovieUploadModal(false);
  };
  const hideActorUploadModal = () => {
    setshowActorUploadModal(false);
  };

  return (
    <>
      <div className="flex bg-white dark:bg-primary">
        <AdminNavbar />
        <div className="flex-1 p-2 max-w-screen-xl">
          <Header
            onAddMovieClick={displayMovieUploadModal}
            onAddActorClick={displayActorUploadModal}
          />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
      <MovieUpload
        visible={showMovieUploadModal}
        onClose={hideMovieUploadModal}
      />
      <ActorUpload
        visible={showActorUploadModal}
        onClose={hideActorUploadModal}
      />
    </>
  );
}

export default AdminNavigator;
