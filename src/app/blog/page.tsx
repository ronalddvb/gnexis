import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BlogList } from "@/components/BlogList";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre IA agéntica, automatización empresarial, casos de uso y desarrollo web, escritos por el equipo de Gnexis.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas sobre IA agéntica y automatización"
        text="Análisis prácticos para equipos que quieren entender y aplicar automatización con IA, sin la jerga técnica."
      />
      <Reveal>
        <BlogList />
      </Reveal>
    </>
  );
}
