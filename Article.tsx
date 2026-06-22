import { useRoute, Link } from "wouter";
import { Clock, Share2, ArrowLeft, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/data";
import { Streamdown } from "streamdown";

/**
 * Smart Income Hub - Article Detail Page
 * Design: Trustworthy Growth
 * - Full article content with markdown rendering
 * - Social sharing buttons
 * - Related articles section
 * - AdSense and affiliate link spaces
 */

export default function Article() {
  const [match, params] = useRoute("/article/:slug");

  if (!match) return null;

  const article = articles.find((a) => a.slug === params?.slug);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 container py-16 text-center">
          <div className="text-5xl mb-4">📄</div>
          <h1 className="text-3xl font-bold mb-2">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <a className="btn-primary">Back to Blog</a>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedArticles = articles
    .filter(
      (a) => a.categoryId === article.categoryId && a.id !== article.id
    )
    .slice(0, 3);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = `Check out: ${article.title}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-card border-b border-border py-8">
          <div className="container max-w-3xl">
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Articles
              </a>
            </Link>

            <div className="mb-6">
              <span className="category-badge">{article.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {article.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              {article.excerpt}
            </p>

            {/* Article Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-border pt-6">
              <div className="flex items-center gap-2">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663748582508/39gqeCXefa3K569n7hz3BA/logo-icon-HZFfeRNbCE2ePhzS9zJBZo.webp"
                  alt={article.author}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div className="font-medium text-foreground">
                    {article.author}
                  </div>
                  <div className="text-xs">Author</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime} min read</span>
              </div>

              <div>
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>

              {/* Share Buttons */}
              <div className="ml-auto flex gap-3">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        text: article.excerpt,
                        url: shareUrl,
                      });
                    }
                  }}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  title="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-card border-b border-border py-8">
          <div className="container max-w-3xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <article className="prose prose-sm max-w-none">
              <Streamdown>{article.content}</Streamdown>
            </article>

            {/* Article Tags */}
            {article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-3">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Affiliate/AdSense Space */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="bg-muted rounded-lg p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  💡 Recommended Products & Resources
                </p>
                <p className="text-xs text-muted-foreground">
                  This space is reserved for affiliate recommendations and
                  AdSense ads
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-card border-t border-border">
            <div className="container">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard
                    key={relatedArticle.id}
                    article={relatedArticle}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
