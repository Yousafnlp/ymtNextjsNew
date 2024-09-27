import React, { Suspense } from "react";
import LoaderLayout from "../(assets)/pages/LoaderLayout";


const About = React.lazy(() => import("../(assets)/pages/About"));

function page() {
  return (
    <Suspense fallback={<LoaderLayout/>}>
      <About />
    </Suspense>
  );
}

export default page;
