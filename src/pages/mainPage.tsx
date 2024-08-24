import Layout from "@layout/index";
import AboutMe from "@components/aboutMe";
import Projects from "@components/projects";
import Knowledges from "@components/knowledges";
import Footer from "@components/footer";
import { ScrollTop } from "primereact/scrolltop";

export default function Main() {
  return (
    <div className="min-h-[100vh] font-lexend-regular text-white bg-body-light dark:bg-body-dark bg-fixed bg-repeat">
      <Layout>
        <div className="grid mt-10 gap-y-10">
          <AboutMe />
          <Projects />
          <Knowledges />
          <Footer />
        </div>
      </Layout>
      <ScrollTop className="!bg-sky-400 right-4 bottom-4" />
    </div>
  );
}
