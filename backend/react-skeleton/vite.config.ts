import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import pages from "vite-plugin-pages";

// Custom code generation for pages exports to handle more complex use cases simulating Remix
function onClientGenerated(clientCode: string) {
  // Replace all basic imports to also include other React-Router exports like loader and action
  Array.from(clientCode.matchAll(/import (__.+) from/g)).forEach(([, res]) => {
    clientCode = clientCode.replace(
      `"element":React.createElement(${res})`,
      `...${res}, "element": React.createElement(${res}.default)`
    );
  });
  clientCode = clientCode.replace(/import (__.+) from/g, "import * as $1 from");

  // Replace all the React.lazy components for lazy React-Router routes
  Array.from(clientCode.matchAll(/const (.+) = React.lazy/g)).forEach(
    ([, res]) => {
      clientCode = clientCode.replace(
        `"element":React.createElement(${res})`,
        `"lazy":${res}`
      );
    }
  );
  clientCode = clientCode.replace("React.lazy", "");

  return clientCode;
}

export default defineConfig({
  plugins: [
    react(),
    pages({
      dirs: "src/app",
      routeStyle: "remix",
      resolver: "react",
      importMode: "sync",
      onClientGenerated,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  build:{
    assetsDir:"static"
  }
});
