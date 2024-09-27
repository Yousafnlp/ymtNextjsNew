import React, { Suspense } from "react";
import LoaderLayout from "../(assets)/pages/LoaderLayout";

const SuccssCoaching = React.lazy(() => import("../(assets)/pages/SuccssCoaching"));

function page() {
  return (
    <Suspense fallback={<LoaderLayout />}>
      <SuccssCoaching />
    </Suspense>
  );
}

export default page;
