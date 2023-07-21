import React from "react";

import CoreProvider from "core/providers/CoreProvider";

import NavigationProvider from "navigation/providers/NavigationProvider";

function AppRoot() {
  return (
    <CoreProvider>
      <NavigationProvider />
    </CoreProvider>
  );
}

export default AppRoot;
