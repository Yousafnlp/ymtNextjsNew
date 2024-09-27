import React, { Suspense } from "react";
import LoaderLayout from "../(assets)/pages/LoaderLayout";

const ReshapeYourLife = React.lazy(() => import("../(assets)/pages/ReshapeYourLife"));

function page() {
  return (
    <Suspense fallback={<LoaderLayout />}>
      <ReshapeYourLife />
    </Suspense>
  );
}

export default page;
