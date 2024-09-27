import React, { Suspense } from "react";
import LoaderLayout from "../(assets)/pages/LoaderLayout";

const ErasingPainfulMemory = React.lazy(() => import("../(assets)/pages/ErasingPainfulMemory"));

function page() {
  return (
    <Suspense fallback={<LoaderLayout />}>
      <ErasingPainfulMemory />
    </Suspense>
  );
}

export default page;
