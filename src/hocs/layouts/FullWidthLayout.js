import Alert from "components/Alert";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import { connect } from "react-redux";

const FullWidthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <Alert />
    </div>
  );
};

const mapStateTopProps = (state) => ({});

export default connect(mapStateTopProps, {})(FullWidthLayout);
