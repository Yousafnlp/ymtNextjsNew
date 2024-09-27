import React, { Suspense } from "react";
import LoaderLayout from "../(assets)/pages/LoaderLayout";

const Contact = React.lazy(() => import("../(assets)/pages/Contact"));

function page() {
  return (
    <Suspense fallback={<LoaderLayout />}>
      <Contact />
    </Suspense>
  );
}

export default page;
