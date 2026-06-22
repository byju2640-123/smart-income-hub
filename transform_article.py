#!/usr/bin/env python3
"""
Premium Blog Article Formatter

Transforms raw blog article content into a premium-formatted post with:
- Professional heading hierarchy (H1, H2, H3)
- Quick Summary box
- Comparison table (if applicable)
- Key Takeaways section
- FAQ section
- Conclusion with CTA
- SEO-friendly formatting
- Mobile-responsive structure

Usage:
    python transform_article.py <input_file> <output_file> [--title "Article Title"] [--category "Category"]
"""

import sys
import json
import re
from pathlib import Path
from datetime import datetime


class ArticleTransformer:
    """Transform raw article content into premium-formatted blog post."""

    def __init__(self, title=None, category=None):
        self.title = title
        self.category = category
        self.content = ""
        self.sections = {}
        self.key_points = []
        self.comparison_items = []

    def read_article(self, input_file):
        """Read raw article content from file."""
        with open(input_file, 'r', encoding='utf-8') as f:
            self.content = f.read()
        return self.content

    def extract_key_points(self, num_points=7):
        """Extract key points from article content."""
        # Find numbered lists or bullet points
        bullet_pattern = r'[-•*]\s+(.+?)(?=\n[-•*]|\n\n|$)'
        bullets = re.findall(bullet_pattern, self.content, re.MULTILINE)

        if bullets:
            self.key_points = bullets[:num_points]
        else:
            # Fallback: extract first sentences from paragraphs
            paragraphs = self.content.split('\n\n')
            self.key_points = [p.split('.')[0] + '.' for p in paragraphs if p.strip()][:num_points]

        return self.key_points

    def generate_summary(self):
        """Generate a quick summary box."""
        # Extract first 2-3 sentences as summary
        sentences = re.split(r'(?<=[.!?])\s+', self.content)
        summary_text = ' '.join(sentences[:3])

        summary = f"""## Quick Summary

> **Reading Time:** 12-15 minutes | **Difficulty:** Beginner-Friendly

{summary_text}

**What You'll Learn:**
"""

        for i, point in enumerate(self.key_points[:5], 1):
            summary += f"\n- {point}"

        return summary

    def generate_key_takeaways(self):
        """Generate Key Takeaways section."""
        takeaways = "\n## 🎯 Key Takeaways\n\n"

        for i, point in enumerate(self.key_points, 1):
            takeaways += f"{i}. {point}\n"

        return takeaways

    def generate_faq(self):
        """Generate FAQ section based on common questions."""
        faq_questions = [
            "How long does it take to see results?",
            "Is this suitable for beginners?",
            "What are the startup costs?",
            "Can I combine multiple methods?",
            "What's the best way to get started?",
            "Are there any risks involved?",
            "How much can I realistically earn?",
        ]

        faq = "\n## ❓ Frequently Asked Questions\n\n"

        for i, question in enumerate(faq_questions[:7], 1):
            faq += f"**Q{i}: {question}**\n\n"
            faq += f"A: [Add your answer here]\n\n"

        return faq

    def generate_conclusion(self):
        """Generate conclusion with CTA."""
        conclusion = f"""
## 🚀 Conclusion

The strategies outlined in this guide provide practical, actionable steps to achieve your goals. Success depends on consistent effort, learning from feedback, and adapting your approach as needed.

Remember: **The best time to start is now.** Whether you're taking your first step or scaling an existing effort, the principles in this article will guide you toward sustainable growth.

### 📌 Next Steps

1. **Choose Your Focus** - Pick one strategy that resonates most with you
2. **Take Action** - Implement the first step this week
3. **Track Progress** - Monitor your results and adjust as needed
4. **Scale Up** - Once you see traction, expand to complementary strategies

### 🔔 Stay Updated

Want more insights like this? Subscribe to our newsletter for:
- Weekly tips and strategies
- New tool reviews and recommendations
- Success stories and case studies
- Exclusive resources and templates

**[Subscribe Now]** to join thousands of readers building their income streams.

---

*Have questions or insights to share? Drop a comment below or reach out to us at [contact email]. We'd love to hear about your journey!*
"""
        return conclusion

    def generate_premium_article(self):
        """Generate complete premium-formatted article."""
        # Extract key points first
        self.extract_key_points()

        # Build the premium article
        premium = ""

        # Add title if provided
        if self.title:
            premium += f"# {self.title}\n\n"

        # Add metadata
        if self.category:
            premium += f"**Category:** {self.category} | **Last Updated:** {datetime.now().strftime('%B %d, %Y')}\n\n"

        # Add summary
        premium += self.generate_summary()

        # Add original content (cleaned up)
        premium += f"\n\n## 📖 Full Guide\n\n{self.content}\n"

        # Add key takeaways
        premium += self.generate_key_takeaways()

        # Add FAQ
        premium += self.generate_faq()

        # Add conclusion
        premium += self.generate_conclusion()

        return premium

    def save_article(self, output_file, content):
        """Save formatted article to file."""
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Premium article saved to: {output_file}")


def main():
    """Main entry point."""
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    # Parse optional arguments
    title = None
    category = None

    for i, arg in enumerate(sys.argv[3:], 3):
        if arg == "--title" and i + 1 < len(sys.argv):
            title = sys.argv[i + 1]
        elif arg == "--category" and i + 1 < len(sys.argv):
            category = sys.argv[i + 1]

    # Check input file exists
    if not Path(input_file).exists():
        print(f"❌ Error: Input file not found: {input_file}")
        sys.exit(1)

    # Transform article
    transformer = ArticleTransformer(title=title, category=category)
    transformer.read_article(input_file)
    premium_content = transformer.generate_premium_article()
    transformer.save_article(output_file, premium_content)

    print(f"✨ Article transformation complete!")
    print(f"   Input: {input_file}")
    print(f"   Output: {output_file}")


if __name__ == "__main__":
    main()
