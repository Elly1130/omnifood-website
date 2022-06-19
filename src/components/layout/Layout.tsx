import Footer from './Footer';
import Navigation from './Navigation';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <>
    <Navigation />
    <main>{children}</main>
    <Footer />
  </>;
};

export default Layout;