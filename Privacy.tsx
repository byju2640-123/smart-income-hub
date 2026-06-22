import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Streamdown } from "streamdown";

/**
 * Smart Income Hub - Privacy Policy Page
 * Design: Trustworthy Growth
 * - Clear privacy policy
 * - Data protection information
 */

const privacyContent = `# Privacy Policy

**Last Updated:** June 2026

## 1. Introduction

Smart Income Hub ("we," "us," "our," or "Company") operates the Smart Income Hub website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

## 2. Information Collection and Use

We collect several different types of information for various purposes to provide and improve our Service to you.

### Types of Data Collected

**Personal Data:**
- Email address (when you subscribe to our newsletter)
- Name (optional, when you contact us)
- Any other information you voluntarily provide

**Usage Data:**
- Browser type and version
- Pages visited and time spent
- Referral source
- Device information
- IP address

## 3. Use of Data

Smart Income Hub uses the collected data for various purposes:

- To provide and maintain our Service
- To notify you about changes to our Service
- To allow you to participate in interactive features
- To provide customer support
- To gather analysis or valuable information so that we can improve our Service
- To monitor the usage of our Service
- To detect, prevent and address technical issues

## 4. Security of Data

The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

## 5. Third-Party Services

Our Service may contain links to other sites that are not operated by us. This Privacy Policy does not apply to third-party websites, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services before providing your information.

### Google Analytics

We use Google Analytics to track and analyze website usage. Google Analytics collects information such as how often users visit this site, what pages they visit when they do so, and what other sites they used prior to coming to this site. We use the information we get from Google Analytics only to improve this Site. Google Analytics collects the IP address assigned to you on the date you visit this site, rather than your name or other identifying information.

### Affiliate Links

Some of our content contains affiliate links. When you click on these links and make a purchase, we may earn a commission. This does not affect the price you pay. We only recommend products we genuinely believe in.

## 6. Cookies

We use cookies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences and improve your browsing experience.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.

## 7. Newsletter

When you subscribe to our newsletter, we collect your email address. We use this information to send you updates, articles, and promotional content. You can unsubscribe from our newsletter at any time by clicking the unsubscribe link in any email we send.

## 8. Contact Information

If you have any questions about this Privacy Policy, please contact us at:

- Email: hello@smartincomehub.com
- Website: smartincomehub.com

## 9. Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.

## 10. Your Rights

Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete your information. Please contact us if you wish to exercise any of these rights.

---

**By using Smart Income Hub, you consent to our Privacy Policy.**
`;

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-card border-b border-border py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Learn how we collect, use, and protect your data.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <article className="prose prose-sm max-w-none">
              <Streamdown>{privacyContent}</Streamdown>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
