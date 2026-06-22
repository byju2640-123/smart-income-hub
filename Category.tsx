import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles, categories } from "@/lib/data";

/**
 * Smart Income Hub - Category Page
 * Design: Trustworthy Growth
 * - Category header with icon and description
 * - Filtered articles for the category
 * - Back navigation
 */

export default function Category() {
  const [match, params] = useRoute("/category/:slug");

  if (!match) return null;

  const category = categories.find((c) => c.slug === params?.slug);
  const categoryArticles = articles.filter((a) => a.categoryId === category?.id);

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container py-16 text-center">
          <div className="text-5xl mb-4">📂</div>
          <h1 className="text-3xl font-bold mb-2">Category Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The category you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <a className="btn-primary">Back to Blog</a>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Category Header */}
        <section className="bg-card border-b border-border py-12">
          <div className="container">
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </a>
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">{category.icon}</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {category.name}
                </h1>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              {category.description}
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container">
            {categoryArticles.length > 0 ? (
              <>
                <p className="text-muted-foreground mb-8">
                  {categoryArticles.length} article
                  {categoryArticles.length !== 1 ? "s" : ""} in this category
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📭</div>
                <h3 className="text-2xl font-bold mb-2">No articles yet</h3>
                <p className="text-muted-foreground mb-6">
                  Check back soon for articles in this category
                </p>
                <Link href="/blog">
                  <a className="btn-primary">Browse All Articles</a>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
