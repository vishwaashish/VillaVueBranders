import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VillaVue Branders",
    short_name: "VillaVue Branders",
    description:
      "Transform Your Hotel Or Villa Into A Distinctive Brand That Captures Hearts And Minds",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#fff",
    icons: [
      {
        type: "image/png",
        sizes: "16x16",
        src: "favicon-16x16.png",
      },
      {
        type: "image/png",
        sizes: "32x32",
        src: "favicon-32x32.png",
      },
      {
        type: "image/png",
        sizes: "32x32",
        src: "favicon-32x32.png",
        purpose: "maskable",
      },

      {
        type: "image/png",
        sizes: "180x180",
        src: "apple-touch-icon.png",
      },
    ],
  };
}
