import { Route, Routes } from "react-router-dom";
import { Layout } from "../widgets/layout";
import { MainPage } from "../pages/main-page";
import { Header } from "../widgets/header";
import { PostFull } from "../widgets/post-full";

export const App = () => {
  return (
    <Layout header={<Header />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fullpost/:id" element={<PostFull />} />
      </Routes>
    </Layout>
  );
};
