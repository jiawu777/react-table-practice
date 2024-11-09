import './Layout.scss';


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

const LayoutHeader = (props) => {
  const { children } = props;
  return <header className="layout__header">{children}</header>;
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
      Footer
    </footer>
  );
};

export { Layout, LayoutHeader, LayoutPageHeader, LayoutNavBar, LayoutMain, LayoutFooter };
