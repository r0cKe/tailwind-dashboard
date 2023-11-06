import store from "@/redux/store";
import Footer from "../Footer";
import Menu from "../Menu";
import Navbar from "../Navbar";
import { Provider } from "react-redux";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <div className={`bg-dark_bg text-soft`}>
        <Navbar />
        <div className="flex">
          <Menu />
          <div className="w-full px-5 py-2">{children}</div>
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default Layout;
