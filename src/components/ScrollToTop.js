import React from "react";
import { withRouter } from "../functions/withRouter"

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.history.name !== prevProps.history.name
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);
