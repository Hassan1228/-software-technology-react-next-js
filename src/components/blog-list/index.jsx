import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderThree from "@/src/layout/headers/header-3";
import React from "react";
import BlogGrid from "../blog/blog-grid";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";
import PostboxArea from "./postbox-area";

const BlogList = () => {
  return (
    <>
      <HeaderThree />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blog Grid Classic"} />
            <BlogGrid />
            <Portfolio />
            <PostboxArea />
            <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default BlogList;
