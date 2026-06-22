import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Smart Income Hub - About Us Page
 * Design: Trustworthy Growth
 * - Mission and values
 * - Team information
 * - Why we exist
 */

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-card border-b border-border py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Learn about our mission to help people earn more and build better
              financial futures.
            </p>
          </div>
        </section>

        {/* Personal Story Section */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">My Story</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I started this website to share practical ways to earn money online, learn new digital skills, and explore tools that can help people improve their income. After spending countless hours researching blogging, Pinterest marketing, AI tools, and online income opportunities, I wanted to create a place where beginners could find reliable and easy-to-understand information.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Smart Income Hub exists to help people discover legitimate, practical ways to earn more money and build sustainable income streams. We believe that financial growth should be accessible to everyone, regardless of their background or current situation.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We provide judgment-free, actionable advice on online and offline income opportunities, digital skills, AI tools, and side business strategies. Our content is grounded in real-world experience and designed to help you take action.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  ✓ Trustworthiness
                </h3>
                <p className="text-muted-foreground">
                  We only recommend legitimate opportunities and tools. We're
                  transparent about affiliate relationships and always put
                  reader interests first.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  ✓ Practicality
                </h3>
                <p className="text-muted-foreground">
                  Our advice is actionable and grounded in real-world results.
                  We focus on strategies that actually work, not hype or
                  get-rich-quick schemes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  ✓ Accessibility
                </h3>
                <p className="text-muted-foreground">
                  We believe financial growth should be available to everyone.
                  Our content is clear, jargon-free, and designed for beginners.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  ✓ Empowerment
                </h3>
                <p className="text-muted-foreground">
                  We aim to empower you to take control of your financial
                  future. Success comes from your effort and decisions, not
                  ours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">What We Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">💻 Online Money Making</h3>
                <p className="text-muted-foreground">
                  Freelancing, content creation, affiliate marketing, remote work opportunities, and side hustles.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">🤖 AI Tools</h3>
                <p className="text-muted-foreground">
                  Guides, tutorials, and reviews of AI tools that can improve productivity, content creation, and business growth.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">📌 Pinterest Marketing</h3>
                <p className="text-muted-foreground">
                  Strategies to drive traffic, grow an audience, and increase visibility using Pinterest.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">📝 Blogging</h3>
                <p className="text-muted-foreground">
                  Tips for starting, growing, and monetizing a blog.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">🏪 Business Ideas</h3>
                <p className="text-muted-foreground">
                  Practical online and offline business opportunities for beginners.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">💰 Personal Finance</h3>
                <p className="text-muted-foreground">
                  Money management, saving strategies, financial growth, and income improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Trust Smart Income Hub */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Why Trust Smart Income Hub?</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Every article is created with the goal of providing accurate, useful, and beginner-friendly information.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We research topics carefully and strive to present practical insights that readers can understand and apply. While no strategy guarantees success, we focus on sharing opportunities, tools, and ideas that have real-world value.
            </p>
          </div>
        </section>

        {/* Affiliate Disclosure Section */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Affiliate Disclosure</h2>
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some articles on Smart Income Hub may contain affiliate links. If you make a purchase through these links, we may earn a commission at no additional cost to you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These commissions help support the website and allow us to continue creating free content. We only recommend products and services that we believe may provide value to our readers.
              </p>
            </div>
          </div>
        </section>

        {/* Important Disclaimer Section */}
        <section className="py-16 bg-card border-y border-border">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Important Disclaimer</h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The information provided on Smart Income Hub is for educational and informational purposes only.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We do not guarantee earnings, financial success, or specific results. Your outcomes will depend on your skills, effort, experience, and individual circumstances.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Always conduct your own research before making financial or business decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Have a question, suggestion, or business inquiry?
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We'd love to hear from you. <Link href="/contact"><a className="text-primary hover:underline font-semibold">Visit our Contact page</a></Link> and send us a message.
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-primary/5 border-y border-primary/10">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're looking for side hustles, blogging tips, Pinterest strategies, AI tools, or online income opportunities, Smart Income Hub is here to help you take the next step toward your financial goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our latest articles and discover practical ways to learn, earn, and grow.
            </p>
            <Link href="/blog">
              <a className="btn-primary">Browse Articles</a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
