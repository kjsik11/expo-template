import PATHS from "navigation/constants/Paths";

import NotFoundScreenContent from "./NotFoundScreenContent";

const NotFoundScreen = {
  name: PATHS.NotFound,
  component: NotFoundScreenContent,
  options: { title: "Oops!" },
};

export default NotFoundScreen;
