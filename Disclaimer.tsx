import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Streamdown } from "streamdown";

/**
 * Smart Income Hub - Disclaimer Page
 * Design: Trustworthy Growth
 * - Legal disclaimer
 * - Income claims disclaimer
 * - Affiliate disclosure
 */

const disclaimerContent = `# Disclaimer

**Last Updated:** June 2026

## 1. General Disclaimer

The information provided on Smart Income Hub is for educational and informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website.

## 2. Income Disclaimer

**IMPORTANT:** The earnings and income statements made by Smart Income Hub are estimates based on potential and various factors. Your level of success in attaining the results claimed in our materials depends on the time you devote to the strategies outlined, ideas and the knowledge you apply, the economy, the market conditions, competition, and numerous other factors.

We cannot guarantee that you will duplicate any of the results stated on our website. You recognize that internet businesses and earnings have unknown risks and are not guaranteed. We are not responsible for your actions.

**No Income Guarantees:** We do not guarantee that you will earn any money using the techniques and ideas in these materials. Examples in these materials are not to be interpreted as a promise or guarantee of earnings. Earning potential is entirely dependent on the person using the information, ideas and techniques. We do not purport this as a "get rich quick" scheme.

## 3. Affiliate Disclosure

Smart Income Hub may contain affiliate links. When you click on these links and make a purchase, we may earn a commission at no additional cost to you. This helps support our website and allows us to continue providing free content.

We only recommend products and services that we genuinely believe will be valuable to our readers. However, we encourage you to do your own research before making any purchase decisions.

**Affiliate Programs We Participate In:**
- Amazon Associates
- ShareASale
- CJ Affiliate
- Various product-specific affiliate programs

## 4. Third-Party Content

Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is at your own risk and subject to their terms and conditions.

## 5. Medical and Legal Disclaimer

The information on Smart Income Hub is not intended to provide medical, legal, or professional advice. If you require professional advice, please consult with a qualified professional in the relevant field.

## 6. No Warranty

The materials on Smart Income Hub are provided on an "as-is" basis. Smart Income Hub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

## 7. Limitations of Liability

In no event shall Smart Income Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Smart Income Hub, even if Smart Income Hub or an authorized representative has been notified orally or in writing of the possibility of such damage.

## 8. Accuracy of Information

While we make every effort to keep the information on our website accurate and up-to-date, we make no representations or warranties of any kind about the accuracy, completeness, or timeliness of the content. Information may be subject to change without notice.

## 9. User Responsibility

You are responsible for your own due diligence and research. Before implementing any strategy or purchasing any product recommended on our website, you should conduct your own research and consult with appropriate professionals.

## 10. Changes to This Disclaimer

We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of revised disclaimer means that you accept and agree to the changes.

## 11. Contact Information

If you have questions about this disclaimer, please contact us at:

- Email: hello@smartincomehub.com
- Website: smartincomehub.com

---

**By using Smart Income Hub, you acknowledge that you have read this disclaimer and agree to its terms.**
`;

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-card border-b border-border py-12">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Disclaimer</h1>
            <p className="text-lg text-muted-foreground">
              Important legal information about Smart Income Hub.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <article className="prose prose-sm max-w-none">
              <Streamdown>{disclaimerContent}</Streamdown>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
