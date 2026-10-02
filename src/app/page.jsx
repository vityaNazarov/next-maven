import HomePage from "./HomePage";
import { HERO_PRELOAD_IMAGES } from "@/constants/heroSlides";

function Page() {
  return (
    <>
      {HERO_PRELOAD_IMAGES.map((href) => (
        <link key={href} rel="preload" as="image" href={href} />
      ))}
      <HomePage />
    </>
  );
}

export default Page;
