export default function Head() {
  return (
    <>
      <title>The Chess Classes</title>
      <meta name="description" content="Join our online chess coaching platform and master the game with expert trainers. Perfect for beginners to advanced players." />
      <meta name="keywords" content="online chess coaching, learn chess online, chess lessons, chess trainers, chess classes, chess practice, chess tutorial, chess strategy, online chess, online chess in delhi" />
      
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "The Chess Classes",
            "url": "https://thechessclasses.com",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87"
            }
          }),
        }}
      />
    </>
  );
}
