import React, { Suspense } from "react";
import LoaderLayout from "../(assets)/pages/LoaderLayout";

const WellnessCoaching = React.lazy(() => import("../(assets)/pages/WellnessCoaching"));

function page() {
  return (
    <Suspense fallback={<LoaderLayout />}>
      <WellnessCoaching />
    </Suspense>
  );
}

export default page;
