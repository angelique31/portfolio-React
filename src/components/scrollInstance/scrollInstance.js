import SmoothScroll from "smooth-scroll";

const scroll = new SmoothScroll(null, {
  ignore: "[data-scroll-ignore]",
  updateURL: false,
  popstate: false,
});

export default scroll;
