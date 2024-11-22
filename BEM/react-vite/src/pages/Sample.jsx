// import Sample from "../components/Modules/Sample";
import {
  Layout,
  LayoutHeader,
  LayoutMain,
  LayoutFooter,
  LayoutPageHeader,
} from "../layouts/Layout";
import PageHeader from "../components/common/PageHeader";
// import Main from "../components/Modules/Main";
import About from "../components/Modules/About";

const PageSample = () => {
  return (
    <Layout>
      <LayoutHeader />
      <LayoutPageHeader>
        <PageHeader />
      </LayoutPageHeader>
      <LayoutMain>
        <About />
      </LayoutMain>
      <LayoutFooter />
    </Layout>
  );
};

export default PageSample;
