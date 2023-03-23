import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import HeroSliderTwo from "../../wrappers/hero-slider/HeroSliderTwo";
import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";


const HomeFashion = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Sabe Fashion"
        description="Fashion Shop Sabe"
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderTen />

        {/* tab product */}
        <TabProduct spaceTopClass="pt-60" spaceBottomClass="pb-60" category="fashion"/>

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-70" />

      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
