import './Layout.scss';
import Header from '../components/common/Header';


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

const LayoutMain = (props) => {
  const { children } = props;
  return <main className="layout__main">{children}</main>;
};

const LayoutFooter = () => {
  return (
    <footer className="layout__footer">
      愛進化科技股份有限公司 統編：53995694. | Copyright © 2023 Evolutive Labs Co., Ltd
    </footer>
  );
};

export { Layout, LayoutHeader, LayoutPageHeader, LayoutNavBar, LayoutMain, LayoutFooter };
