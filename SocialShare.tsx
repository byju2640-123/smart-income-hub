import { Share2 } from "lucide-react";

/**
 * Social Share Component
 * Design: Trustworthy Growth - Warm amber accents
 * - Pinterest, Twitter, LinkedIn sharing buttons
 * - Responsive design for mobile and desktop
 * - Smooth hover effects and transitions
 */

interface SocialShareProps {
  title: string;
  excerpt: string;
  url: string;
  imageUrl?: string;
  position?: "top" | "bottom";
}

export default function SocialShare({
  title,
  excerpt,
  url,
  imageUrl,
  position = "top",
}: SocialShareProps) {
  // Encode URL and text for sharing
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = encodeURIComponent(excerpt);
  const encodedImage = imageUrl ? encodeURIComponent(imageUrl) : "";

  // Social share URLs
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=SmartIncomeHub`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const handleShare = (platform: string, shareUrl: string) => {
    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <div
      className={`flex flex-col gap-4 ${
        position === "top" ? "mb-8" : "mt-8"
      } py-6 px-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20`}
    >
      <div className="flex items-center gap-3">
        <Share2 className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Share This Article</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {/* Pinterest Button */}
        <button
          onClick={() => handleShare("pinterest", pinterestUrl)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#E60023] text-[#E60023] rounded-lg font-medium hover:bg-[#E60023] hover:text-white transition-all duration-200 transform hover:scale-105 active:scale-95"
          title="Share on Pinterest"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.937-.2-2.378.042-3.41.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.767 1.518 1.684 0 1.025-.653 2.557-.99 3.977-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.865-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
          </svg>
          Pinterest
        </button>

        {/* Twitter Button */}
        <button
          onClick={() => handleShare("twitter", twitterUrl)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#1DA1F2] text-[#1DA1F2] rounded-lg font-medium hover:bg-[#1DA1F2] hover:text-white transition-all duration-200 transform hover:scale-105 active:scale-95"
          title="Share on Twitter"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M9 19c1 0 1-1 1-1" />
          </svg>
          Twitter
        </button>

        {/* LinkedIn Button */}
        <button
          onClick={() => handleShare("linkedin", linkedinUrl)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#0A66C2] text-[#0A66C2] rounded-lg font-medium hover:bg-[#0A66C2] hover:text-white transition-all duration-200 transform hover:scale-105 active:scale-95"
          title="Share on LinkedIn"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
          LinkedIn
        </button>
      </div>

      <p className="text-xs text-muted-foreground">
        Share this article to help others discover practical ways to earn more and grow their income.
      </p>
    </div>
  );
}
