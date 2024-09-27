import React, { Suspense } from "react";
import LoaderLayout from "../(assets)/pages/LoaderLayout";

const MainTestimonials = React.lazy(() => import("../(assets)/pages/Testimonials"));

function page() {
  return (
    <Suspense fallback={<LoaderLayout />}>
      <MainTestimonials />
    </Suspense>
  );
}

export default page;
