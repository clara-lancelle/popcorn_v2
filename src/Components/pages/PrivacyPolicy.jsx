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
        <p>No personal data is sold, shared or transferred to third parties.</p>
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
    </main>
  );
}
