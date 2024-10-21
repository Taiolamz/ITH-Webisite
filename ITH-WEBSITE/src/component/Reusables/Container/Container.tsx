import { ReactNode } from "react";
import HeaderNav from "../HeaderNav/header-nav";
import Footer from "../Footer/Footer";

const Container = ({ children }: { children?: ReactNode }) => {
  return (
    <section className="h-screen relative">
      <HeaderNav />
      {children}
      <Footer />
    </section>
  );
};

export default Container;
