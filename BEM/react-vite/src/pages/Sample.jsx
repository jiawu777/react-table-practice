// import Sample from "../components/Modules/Sample";
import {
  Layout,
  LayoutHeader,
  LayoutMain,
  LayoutFooter,
  LayoutPageHeader,
} from "../layouts/Layout";
import PageHeader from "../components/common/PageHeader";

const PageSample = () => {
  return (
    <Layout>
      <LayoutHeader />
      <LayoutPageHeader>
        <PageHeader />
      </LayoutPageHeader>
      <LayoutMain></LayoutMain>
      <LayoutFooter />
    </Layout>
  );
};

export default PageSample;
