import { useEffect } from "react";

import TopWrapper from "../../../components/TopWrapper";
import { BREADCRUMB } from "./constants";
import { ROUTES, TITLES } from "../../../constants/";

export default function AboutPage() {
  useEffect(() => {
    document.title = TITLES.USER.ABOUT;
  }, []);
  return (
    <>
      <TopWrapper breadcrumb={[...BREADCRUMB]} height={200} />
      About page
    </>
  );
}
