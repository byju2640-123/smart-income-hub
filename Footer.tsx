import { Link } from "wouter";
import { Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Terms of Service", href: "/terms" },
    ],
    Categories: [
      { label: "Online Money Making", href: "/category/online-money-making" },
      { label: "AI Tools", href: "/category/ai-tools" },
      { label: "Blogging", href: "/category/blogging" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663748582508/39gqeCXefa3K569n7hz3BA/logo-icon-HZFfeRNbCE2ePhzS9zJBZo.webp"
                alt="Smart Income Hub"
                className="w-8 h-8"
              />
              <span className="font-bold text-lg">Smart Income Hub</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Your trusted guide to earning more, building skills, and growing
              your income.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <a className="text-muted-foreground hover:text-primary transition-colors text-sm">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary/5 rounded-lg p-6 mb-8 border border-primary/10">
          <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Get the latest articles and tips delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Smart Income Hub. All rights reserved.
          </p>
          <p>
            Made with <span className="text-primary">♥</span> for income
            seekers everywhere
          </p>
        </div>

        {/* AdSense Placeholder */}
        <div className="mt-8 p-4 bg-muted rounded-lg border border-border text-center text-xs text-muted-foreground">
          <p>📢 Advertisement Space (Google AdSense)</p>
        </div>
      </div>
    </footer>
  );
}
