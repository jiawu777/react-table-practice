import './Layout.scss';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Main from '../components/Modules/Main';

const Layout = (props) => {
  const { children } = props;
  return (
    <section className="layout">
      <section
        className="layout__wrapper"
      >
        {children}
      </section>
    </section>
  );
};

const LayoutHeader = () => {
  return <header className="layout__header"><Header /></header>;
};

const LayoutPageHeader = (props) => {
  const { children } = props;
  return <header className="layout__pageHeader">{children}</header>;
};

const LayoutNavBar = (props) => {
  const { children } = props;
  return <section className="layout__navBar">{children}</section>;
};

// const LayoutMain = (props) => {
//   const { children } = props;
//   return <main className="layout__main">{children}</main>;
// };

const LayoutMain = () => {
  return <main className="layout__main"><Main /></main>;
};

const LayoutFooter = () => {
  return (
    <footer className="layout__footer"><Footer /></footer>
  );
};

export { Layout, LayoutHeader, LayoutPageHeader, LayoutNavBar, LayoutMain, LayoutFooter };
