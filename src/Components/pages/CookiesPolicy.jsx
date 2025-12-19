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
          No analytics or tracking cookies are currently used. If analytics
          tools are added in the future, this policy will be updated and user
          consent will be requested where required.
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
