import React, { Suspense } from "react";
import LoaderLayout from "./(assets)/pages/LoaderLayout";

const Home = React.lazy(() => import("./(assets)/pages/Home"));

function page() {
  return (
    <Suspense fallback={<LoaderLayout />}>
      <Home />
    </Suspense>
  );
}

export default page;
