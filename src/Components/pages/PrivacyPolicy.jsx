export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <section>
        <h2 className="text-xl font-semibold">Data collection</h2>
        <p>
          Popcorn does not require users to provide personal identifying
          information such as name, address or email.
        </p>
        <p>The following data may be stored locally in your browser:</p>
        <ul className="list-disc pl-6">
          <li>Favorite movies</li>
          <li>Movie ratings</li>
          <li>User-written comments</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Use of data</h2>
        <p>
          This data is used solely to enhance the user experience and is stored
          locally on the user’s device.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Data sharing</h2>
        <p>No personal data is sold.</p>
        <p>
          Certain anonymous usage data may be shared with third-party service
          providers, such as Google LLC, for analytics purposes, and only after
          explicit user consent.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">User rights</h2>
        <p>
          In accordance with applicable data protection laws, users may request
          access to or deletion of their data.
        </p>
        <p>
          Contact: <strong>contact@lncl.com</strong>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Analytics</h2>
        <p>
          This website uses Google Analytics 4, a web analytics service provided
          by Google LLC, to analyze website usage and improve user experience.
        </p>
        <p>
          Google Analytics collects anonymous information such as page views,
          device type, and approximate geographic location.
        </p>
        <p>Analytics data is collected only after explicit user consent.</p>
        <p>You can opt out at any time by refusing analytics cookies.</p>
      </section>
    </main>
  );
}
