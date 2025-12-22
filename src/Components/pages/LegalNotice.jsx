export default function LegalNotice() {
    return (
        <main className="max-w-4xl mx-auto p-6 space-y-6">
            <h1 className="text-3xl font-bold">Legal Notice</h1>

            <section>
                <h2 className="text-xl font-semibold">Website publisher</h2>
                <p>
                    Website name: <strong>Popcorn</strong>
                    <br />
                    Publisher: <strong>Lancelle CLara</strong>
                    <br />
                    Contact email: <strong>contact.popcorn@lncl.com</strong>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                    In accordance with applicable law, the publisher has chosen
                    not to display a physical address.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">Hosting</h2>
                <p>
                    Hosting provider: <strong>Vercel Inc.</strong>
                    <br />
                    Website: https://vercel.com
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">IMDb API</h2>
                <p>
                    Popcorn uses data provided by the IMDb API to display
                    information about movies, including titles, descriptions,
                    cast and trailers.
                </p>
                <p>
                    Popcorn is not affiliated with IMDb. IMDb is a registered
                    trademark of IMDb.com, Inc.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold">Liability</h2>
                <p>
                    The publisher strives to provide accurate information but
                    cannot guarantee the accuracy, completeness or availability
                    of the content.
                </p>
            </section>
        </main>
    );
}
