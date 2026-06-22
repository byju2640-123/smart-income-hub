import { Link } from "wouter";
import { ArrowRight, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CategoryCard from "@/components/CategoryCard";
import { categories, articles } from "@/lib/data";
import { useAuth } from "@/_core/hooks/useAuth";

/**
 * Smart Income Hub - Home Page
 * Design: Trustworthy Growth
 * - Warm amber accents with clean typography
 * - Generous whitespace and clear hierarchy
 * - Asymmetric hero, card-based layouts
 * - Smooth transitions and micro-interactions
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const featuredArticles = articles.filter((a) => a.featured);
  const popularArticles = articles.filter((a) => a.popular);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Text Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Learn. Grow. Earn.
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Learn Practical Ways to Earn More
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover legitimate ways to earn money online and offline,
                  improve your digital skills, explore AI tools, and grow your
                  side business. Your trusted guide to financial growth.
                </p>

                <div className="flex gap-4 pt-4">
                  <Link href="/blog">
                    <a className="btn-primary inline-flex items-center gap-2">
                      Start Learning
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Link>
                  <button className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors font-medium">
                    Learn More
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                  <div>
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-xs text-muted-foreground">
                      Articles
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-xs text-muted-foreground">
                      Categories
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">50k+</div>
                    <div className="text-xs text-muted-foreground">Readers</div>
                  </div>
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="hidden md:block">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663748582508/39gqeCXefa3K569n7hz3BA/hero-background-kPwoAJJ5WomiGBhbjHP7LL.webp"
                  alt="Smart Income Hub Hero"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories Section */}
        <section className="py-16 md:py-24 bg-card border-y border-border">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Explore Categories
              </h2>
              <p className="text-lg text-muted-foreground">
                Find content tailored to your interests and goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Featured Articles
              </h2>
              <p className="text-lg text-muted-foreground">
                Start with our most impactful content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/blog">
                <a className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  View All Articles
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Articles Section */}
        <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/10">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Popular Now
              </h2>
              <p className="text-lg text-muted-foreground">
                What readers are loving this week
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-8 md:p-12 text-white">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get Weekly Tips & Strategies
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  Join thousands of readers getting practical advice on earning
                  more, building skills, and growing their income. No spam,
                  just valuable content.
                </p>

                <form className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="text-sm mt-4 opacity-75">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-bold text-lg mb-2">Learn</h3>
                <p className="text-muted-foreground">
                  Discover proven strategies and tactics from industry experts
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-bold text-lg mb-2">Implement</h3>
                <p className="text-muted-foreground">
                  Apply actionable insights to your business or side hustle
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-bold text-lg mb-2">Earn</h3>
                <p className="text-muted-foreground">
                  Watch your income grow with consistent effort and smart
                  decisions
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
