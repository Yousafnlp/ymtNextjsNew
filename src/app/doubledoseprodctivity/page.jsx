

import React, { Suspense } from "react";
import LoaderLayout from "../(assets)/pages/LoaderLayout";

const DoubleDoseProductivity = React.lazy(() => import("../(assets)/pages/DoubleDoseProductivity"));

function page() {
  return (
    <Suspense fallback={<LoaderLayout />}>
      <DoubleDoseProductivity />
    </Suspense>
  );
}

export default page;
