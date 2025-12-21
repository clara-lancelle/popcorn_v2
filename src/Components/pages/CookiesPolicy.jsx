export default function CookiesPolicy() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Cookies Policy</h1>

      <section>
        <h2 className="text-xl font-semibold">Cookies in use</h2>
        <p>
          Popcorn uses only strictly necessary cookies and local storage to
          ensure proper functionality of the website.
        </p>
        <ul className="list-disc pl-6">
          <li>Saving favorite movies</li>
          <li>Storing movie ratings</li>
          <li>Storing user comments</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Analytics cookies</h2>
        <p>
          With your consent, this website uses Google Analytics cookies to
          measure traffic and usage statistics.
        </p>
        <ul className="list-disc pl-6">
          <li>Page views</li>
          <li>Navigation behavior</li>
          <li>Device and browser information</li>
        </ul>
        <p>
          These cookies are set only after you explicitly accept analytics
          cookies.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Managing cookies</h2>
        <p>
          Users can delete or block cookies at any time through their browser
          settings.
        </p>
      </section>
    </main>
  );
}
