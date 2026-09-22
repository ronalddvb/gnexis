import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import { CTABanner } from "@/components/CTABanner";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <article className="container-gnexis pt-16 pb-16 md:pt-24 md:pb-20">
        <Link
          href="/blog"
          className="text-[14px] font-normal text-ash-gray transition-colors hover:text-white"
        >
          ← Blog
        </Link>
        <p className="mt-8 text-[14px] font-semibold uppercase tracking-[0.025em] text-saffron-spark">
          {post.category}
        </p>
        <h1 className="mt-4 max-w-3xl text-[42px] font-normal leading-[1.1] tracking-[-1.68px] text-white md:text-[48px]">
          {post.title}
        </h1>
        <p className="mt-6 text-[14px] font-extralight text-ash-gray">
          Equipo Gnexis · {date} · {post.readTime} de lectura
        </p>

        <div className="mt-14 flex flex-col gap-6">
          {post.content.map((paragraph, i) => (
            <p
              key={i}
              className="max-w-2xl text-[18px] font-extralight leading-[1.6] text-silver-mist"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-[16px] font-normal text-white">
            ¿Quieres ver esto aplicado a tu empresa?
          </p>
          <Link
            href="/contacto"
            className="mt-3 inline-block text-[14px] font-semibold uppercase tracking-[0.025em] text-electric-iris underline underline-offset-4"
          >
            Agenda una demo gratuita
          </Link>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
