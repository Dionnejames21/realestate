import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy & notice | Open House Estate Agents" },
      {
        name: "description",
        content:
          "How we collect, use and handle your personal information. Privacy policy & notice for Open House Estate Agents.",
      },
      { property: "og:title", content: "Privacy policy & notice | Open House Estate Agents" },
      {
        property: "og:description",
        content:
          "How we collect, use and handle your personal information. Privacy policy & notice for Open House Estate Agents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  { id: "section-1", num: "01", title: "About this notice" },
  { id: "section-2", num: "02", title: "Your rights" },
  { id: "section-3", num: "03", title: "Data controller" },
  { id: "section-4", num: "04", title: "Lawful bases" },
  { id: "section-5", num: "05", title: "Legitimate interests" },
  { id: "section-6", num: "06", title: "How we use your data" },
  { id: "section-7", num: "07", title: "If you do not provide data" },
  { id: "section-8", num: "08", title: "Automated decisions" },
  { id: "section-9", num: "09", title: "More about legitimate interests" },
  { id: "section-10", num: "10", title: "Data retention" },
  { id: "section-11", num: "11", title: "Who receives your data" },
  { id: "section-12", num: "12", title: "International transfers" },
  { id: "section-13", num: "13", title: "Third-party interests" },
  { id: "section-14", num: "14", title: "Complaints" },
];

function PrivacyPage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-10 pb-20">
        {/* TOP: light pink pill badge "Legal information"; large bold heading "Privacy policy & notice"; small grey text "How we collect, use and handle your personal information." */}
        <div className="mb-10 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#fcecf3] text-[#df0068] mb-3">
            Legal information
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#191c2b] tracking-tight leading-tight">
            Privacy policy & notice
          </h1>
          <p className="mt-2 text-sm text-gray-500 font-normal">
            How we collect, use and handle your personal information.
          </p>
        </div>

        {/* LAYOUT: two columns.
            LEFT (sticky light grey rounded card)
            RIGHT: bold numbered headings with body text under each */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: sticky light grey rounded card */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24 bg-[#f8f9fa] border border-gray-100 rounded-2xl p-5 sm:p-6 text-sm text-[#191c2b]">
              <h2 className="font-bold text-[#191c2b] text-base mb-4 tracking-tight">
                On this page
              </h2>

              <nav className="space-y-2.5 text-[13px] text-gray-700">
                {SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollTo(sec.id)}
                    className="w-full text-left text-gray-700 hover:text-[#df0068] transition-colors leading-snug cursor-pointer block"
                  >
                    <span className="font-normal text-gray-900">{sec.num} · </span>
                    <span>{sec.title}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200/80 text-[13px]">
                <p className="text-gray-600 mb-1">Questions about your data?</p>
                <a
                  href="mailto:info@localagent.co.uk"
                  className="text-[#df0068] font-medium hover:underline inline-block"
                >
                  info@localagent.co.uk
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT: content */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-10 sm:space-y-12 text-[#191c2b] text-sm leading-relaxed max-w-3xl">
            {/* 01 · About this privacy notice */}
            <section id="section-1" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                About this privacy notice
              </h2>
              <p className="text-gray-700">
                Real5 Estates Limited (&ldquo;Open House Estate Agents&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;) takes the privacy of your personal data very
                seriously. This privacy policy and notice explains how we collect, use, store, and
                protect your personal information when you use our website, contact our local
                branches, request valuations, register for property updates, or engage our sales,
                lettings, and auction services.
              </p>
              <p className="text-gray-700">
                This notice sets out the basis on which any personal data we collect from you, or
                that you provide to us, will be processed by us in compliance with the General Data
                Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
            </section>

            {/* 02 · What are your rights? */}
            <section id="section-2" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                What are your rights?
              </h2>
              <p className="text-gray-700">
                Under data protection legislation, you have several rights regarding the personal
                information we hold about you:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong className="text-[#191c2b]">The right to be informed:</strong> You have the
                  right to be provided with clear, transparent, and easily understandable
                  information about how we use your information and your rights. This is why we
                  provide you with this privacy notice.
                </li>
                <li>
                  <strong className="text-[#191c2b]">The right of access:</strong> You have the
                  right to obtain access to your information (if we are processing it), and certain
                  other information (similar to that provided in this privacy notice).
                </li>
                <li>
                  <strong className="text-[#191c2b]">The right to rectification:</strong> You are
                  entitled to have your information corrected if it is inaccurate or incomplete.
                </li>
                <li>
                  <strong className="text-[#191c2b]">The right to erasure:</strong> This is also
                  known as &lsquo;the right to be forgotten&rsquo; and, in simple terms, enables you
                  to request the deletion or removal of your information where there&rsquo;s no
                  compelling reason for us to keep using it.
                </li>
                <li>
                  <strong className="text-[#191c2b]">The right to restrict processing:</strong> You
                  have rights to &lsquo;block&rsquo; or suppress further use of your information.
                  When processing is restricted, we can still store your information, but may not
                  use it further.
                </li>
                <li>
                  <strong className="text-[#191c2b]">The right to data portability:</strong> You
                  have rights to obtain and reuse your personal data for your own purposes across
                  different services.
                </li>
                <li>
                  <strong className="text-[#191c2b]">The right to object:</strong> You have the
                  right to object to certain types of processing, including processing based on our
                  legitimate interests and processing for direct marketing.
                </li>
                <li>
                  <strong className="text-[#191c2b]">
                    Rights in relation to automated decision making and profiling:
                  </strong>{" "}
                  You have the right not to be subject to a decision based solely on automated
                  processing, including profiling, which produces legal effects concerning you or
                  similarly significantly affects you.
                </li>
              </ul>
              <p className="text-gray-700 pt-1">
                If you wish to exercise any of these rights, please contact our Data Protection
                Officer at{" "}
                <a
                  href="mailto:info@localagent.co.uk"
                  className="text-[#df0068] hover:underline font-medium"
                >
                  info@localagent.co.uk
                </a>
                .
              </p>
            </section>

            {/* 03 · Who is the Data Controller? */}
            <section id="section-3" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                Who is the Data Controller?
              </h2>
              <p className="text-gray-700">
                The Data Controller responsible for your personal information is Real5 Estates
                Limited trading as Open House Estate Agents.
              </p>
              <div className="text-gray-700 leading-normal space-y-0.5 bg-[#f8f9fa] border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#191c2b]">Real5 Estates Limited</p>
                <p>348a Manchester Road</p>
                <p>Warrington</p>
                <p>WA1 3RE</p>
                <p className="pt-1">
                  Telephone:{" "}
                  <a href="tel:03330155440" className="text-[#df0068] hover:underline">
                    0333 015 5440
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:info@localagent.co.uk" className="text-[#df0068] hover:underline">
                    info@localagent.co.uk
                  </a>
                </p>
              </div>
            </section>

            {/* 04 · What are the lawful bases for processing personal data? */}
            <section id="section-4" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                What are the lawful bases for processing personal data?
              </h2>
              <p className="text-gray-700">
                We will only process your personal information when the law allows us to. Most
                commonly, we will use your personal information in the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong className="text-[#191c2b]">Consent:</strong> Where you have given clear
                  consent for us to process your personal data for a specific purpose (for example,
                  receiving tailored property alerts or valuation marketing).
                </li>
                <li>
                  <strong className="text-[#191c2b]">Contract:</strong> Where processing is
                  necessary for a contract we have with you, or because you have asked us to take
                  specific steps before entering into a contract (such as booking a viewing,
                  marketing your property, or processing a tenancy application).
                </li>
                <li>
                  <strong className="text-[#191c2b]">Legal obligation:</strong> Where processing is
                  necessary for us to comply with the law (not including contractual obligations),
                  including Anti-Money Laundering (AML) checks, estate agency regulations, and tax
                  reporting.
                </li>
                <li>
                  <strong className="text-[#191c2b]">Legitimate interests:</strong> Where processing
                  is necessary for our legitimate interests or the legitimate interests of a third
                  party, unless there is a good reason to protect your personal data which overrides
                  those legitimate interests.
                </li>
              </ul>
            </section>

            {/* 05 · What are our 'legitimate interests'? */}
            <section id="section-5" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                What are our &lsquo;legitimate interests&rsquo;?
              </h2>
              <p className="text-gray-700">
                &lsquo;Legitimate interests&rsquo; means the interests of our company in conducting
                and managing our business to enable us to give you the best service, property
                marketing, and secure website experience.
              </p>
              <p className="text-gray-700">
                For example, we have an interest in making sure our marketing is relevant for you,
                so we may process your information to send you marketing that is tailored to your
                property preferences and location. It can also apply to processing that is in your
                interests as well — such as preventing fraudulent enquiries, answering your customer
                service requests promptly, and ensuring the technical stability of our website.
              </p>
            </section>

            {/* 06 · About our processing of your data (4-column table) */}
            <section id="section-6" className="scroll-mt-28 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                About our processing of your data
              </h2>
              <p className="text-gray-700">
                The table below outlines the categories of data we process, our purposes for doing
                so, and the sources from which we obtain your data:
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#f8f9fa] border-b border-gray-200 text-[#191c2b] font-bold">
                      <th className="p-3 sm:p-3.5 border-r border-gray-200 w-[20%]">Reference</th>
                      <th className="p-3 sm:p-3.5 border-r border-gray-200 w-[30%]">
                        What categories of information about you do we process?
                      </th>
                      <th className="p-3 sm:p-3.5 border-r border-gray-200 w-[28%]">
                        Why are we processing your data?
                      </th>
                      <th className="p-3 sm:p-3.5 w-[22%]">
                        Where did we get your personal data from?
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr>
                      <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                        B2B Marketing
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        Contact names, business email addresses, job titles, business telephone
                        numbers, company details.
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        To market our estate agency franchise, land acquisition, and corporate
                        landlord services to relevant business contacts.
                      </td>
                      <td className="p-3 sm:p-3.5 align-top">
                        Direct communication, public directories, Companies House, networking
                        events.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                        Analytics
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        IP address, device type, browser settings, operating system, pages viewed,
                        time on site, referring URL.
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        To understand how visitors interact with our website, monitor performance,
                        and improve navigation and user experience.
                      </td>
                      <td className="p-3 sm:p-3.5 align-top">
                        Automated tracking cookies and analytical tags on our website.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                        Fraud Prevention
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        Identity verification details, proof of address, passport or driving licence
                        copies, bank statement excerpts, IP records.
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        To comply with legal Anti-Money Laundering (AML) obligations and prevent
                        identity theft, financial fraud, or fraudulent viewings.
                      </td>
                      <td className="p-3 sm:p-3.5 align-top">
                        Directly from you and certified identity verification providers.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                        Contact Submission
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        Full name, email address, telephone number, enquiry message, property
                        address, valuation preferences.
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        To respond to your general enquiries, arrange property viewings, or dispatch
                        valuation information.
                      </td>
                      <td className="p-3 sm:p-3.5 align-top">
                        Directly from website contact forms and online enquiry tools.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                        Phone Calls
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        Caller telephone number, caller name, call recording audio, notes of
                        discussion regarding properties or services.
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        Customer service, training, quality assurance, handling property
                        negotiations, and resolving disputes.
                      </td>
                      <td className="p-3 sm:p-3.5 align-top">
                        Directly from telephone conversations with our central team or local
                        branches.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                        Email and Web Contact
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        Email address, full name, correspondence history, property interest
                        criteria, attached documents.
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        To manage client communication, follow up on offers and viewings, and
                        deliver requested updates.
                      </td>
                      <td className="p-3 sm:p-3.5 align-top">
                        Direct correspondence sent by you to our email addresses or portal
                        enquiries.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                        Consumer Marketing
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        Name, email address, phone number, property search criteria (price range,
                        bedroom count, location), consent records.
                      </td>
                      <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                        To send property alerts, market updates, valuation reminders, and relevant
                        estate agency service news.
                      </td>
                      <td className="p-3 sm:p-3.5 align-top">
                        Directly from you via registration forms and valuation request checkboxes.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 07 · What happens if I refuse to give Real5 Estates Limited my personal data? */}
            <section id="section-7" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                What happens if I refuse to give Real5 Estates Limited my personal data?
              </h2>
              <p className="text-gray-700">
                You are under no statutory obligation to provide us with personal data. However, if
                you choose not to provide certain mandatory information when requested:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>We may not be able to arrange viewings of properties on your behalf.</li>
                <li>We cannot provide an accurate market or rental valuation of your home.</li>
                <li>
                  We will be unable to market, sell, or let your property or submit formal offers to
                  vendors or landlords.
                </li>
                <li>We cannot send you tailored property alert updates matching your criteria.</li>
                <li>
                  We will be legally prevented from entering into contracts or processing sales
                  where statutory Anti-Money Laundering verification is not provided.
                </li>
              </ul>
            </section>

            {/* 08 · What profiling or automated decision making do we perform? */}
            <section id="section-8" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                What profiling or automated decision making do we perform?
              </h2>
              <p className="text-gray-700">
                We do not carry out any solely automated decision-making processes that produce
                legal effects or significantly affect you.
              </p>
              <p className="text-gray-700">
                We perform limited profiling in the form of property matching: when you register
                your search criteria (such as location, price, and number of bedrooms), our systems
                automatically match available or new-to-market properties against your saved
                preferences to dispatch automated property update emails. You can modify your
                preferences or unsubscribe from property updates at any time.
              </p>
            </section>

            {/* 09 · What are Real5 Estates Limited's 'legitimate interests'? */}
            <section id="section-9" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                What are Real5 Estates Limited&rsquo;s &lsquo;legitimate interests&rsquo;?
              </h2>
              <p className="text-gray-700">
                Real5 Estates Limited relies on legitimate interests for:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Providing and continually improving our estate agency, lettings, auction, and
                  valuation services.
                </li>
                <li>
                  Direct marketing of our property services to existing clients and individuals who
                  have engaged with our brand, subject to opt-out rights.
                </li>
                <li>
                  Operating, securing, and maintaining the technical integrity of our website,
                  infrastructure, and communication systems.
                </li>
                <li>
                  Internal reporting, audit, statistical analysis, and management across our network
                  of local branches.
                </li>
                <li>
                  Defending legal claims and resolving complaints or customer service queries.
                </li>
              </ul>
            </section>

            {/* 10 · How long will your personal data be kept? */}
            <section id="section-10" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                How long will your personal data be kept?
              </h2>
              <p className="text-gray-700">
                We will only retain your personal data for as long as necessary to fulfil the
                purposes we collected it for, including for the purposes of satisfying any legal,
                accounting, or regulatory reporting requirements:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <strong className="text-[#191c2b]">
                    Sales and Lettings transactional records:
                  </strong>{" "}
                  Retained for 7 years following completion of the transaction in accordance with
                  statutory accounting and tax regulations.
                </li>
                <li>
                  <strong className="text-[#191c2b]">
                    Anti-Money Laundering verification records:
                  </strong>{" "}
                  Retained for 5 years following the conclusion of the business relationship in
                  accordance with HMRC regulations.
                </li>
                <li>
                  <strong className="text-[#191c2b]">
                    General enquiries and valuations without instruction:
                  </strong>{" "}
                  Retained for up to 2 years from the date of last contact before secure deletion or
                  anonymisation.
                </li>
                <li>
                  <strong className="text-[#191c2b]">Property update subscriptions:</strong>{" "}
                  Retained until you withdraw consent or unsubscribe, after which your details are
                  suppressed from further marketing.
                </li>
              </ul>
            </section>

            {/* 11 · Who else will receive your personal data? */}
            <section id="section-11" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                Who else will receive your personal data?
              </h2>
              <p className="text-gray-700">
                We may share your personal information with selected third parties where necessary
                for our business operations, where required by law, or with your consent:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Our network of franchised local Open House branches and independent agents
                  covering your geographical area.
                </li>
                <li>
                  Sellers, buyers, landlords, or tenants as part of property negotiations, viewing
                  arrangements, and tenancy progression.
                </li>
                <li>
                  Solicitors, conveyancers, surveying partners, and mortgage advisers (such as UK
                  Mortgage Centre where requested).
                </li>
                <li>
                  Leading property portals (such as Rightmove, Zoopla, and PrimeLocation) to
                  advertise your property.
                </li>
                <li>
                  Our vetted data processors who provide IT, hosting, CRM, telephony, and email
                  delivery services.
                </li>
                <li>
                  Law enforcement, regulatory bodies, or tax authorities when required by applicable
                  law or court order.
                </li>
              </ul>
            </section>

            {/* 12 · Does your data leave the EU? */}
            <section id="section-12" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                Does your data leave the EU?
              </h2>
              <p className="text-gray-700">
                Your personal data is primarily stored and processed within the United Kingdom and
                the European Economic Area (EEA).
              </p>
              <p className="text-gray-700">
                In circumstances where any of our third-party service providers (such as cloud
                hosting or software providers) transfer or process data outside the UK or EEA, we
                ensure a similar degree of protection is afforded by implementing appropriate
                safeguards, such as the UK International Data Transfer Addendum or Standard
                Contractual Clauses (SCCs) approved by the European Commission.
              </p>
            </section>

            {/* 13 · Third Party Interests (with two tables: "Data Controllers" and "Our Data Processors") */}
            <section id="section-13" className="scroll-mt-28 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                Third Party Interests
              </h2>
              <p className="text-gray-700">
                We engage with both independent Data Controllers and vetted Data Processors. The
                tables below provide details on these third parties:
              </p>

              {/* Table 1: Data Controllers */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-[#191c2b]">Data Controllers</h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#f8f9fa] border-b border-gray-200 text-[#191c2b] font-bold">
                        <th className="p-3 sm:p-3.5 border-r border-gray-200 w-[30%]">
                          Third Party Controller
                        </th>
                        <th className="p-3 sm:p-3.5 border-r border-gray-200 w-[35%]">
                          Nature of Processing
                        </th>
                        <th className="p-3 sm:p-3.5 w-[35%]">Lawful Basis / Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                          UK Mortgage Centre (UKMC)
                        </td>
                        <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                          Mortgage advice, borrowing assessment, insurance and protection enquiries.
                        </td>
                        <td className="p-3 sm:p-3.5 align-top">
                          Consent (when you request contact via our mortgage forms).
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                          Partner Conveyancers &amp; Solicitors
                        </td>
                        <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                          Legal work for sales, purchases, auction legal packs, and contract
                          exchange.
                        </td>
                        <td className="p-3 sm:p-3.5 align-top">
                          Performance of a contract / Consent.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                          Property Portals (Rightmove, Zoopla, PrimeLocation)
                        </td>
                        <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                          Publishing property marketing listings and receiving buyer/tenant
                          enquiries.
                        </td>
                        <td className="p-3 sm:p-3.5 align-top">
                          Performance of agency contract with seller or landlord.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                          Independent Franchise Branches
                        </td>
                        <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                          Local estate agency services, conducting property viewings, negotiations,
                          and valuations.
                        </td>
                        <td className="p-3 sm:p-3.5 align-top">
                          Joint or independent controller under franchise agreement.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table 2: Our Data Processors */}
              <div className="space-y-2 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-[#191c2b]">
                  Our Data Processors
                </h3>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#f8f9fa] border-b border-gray-200 text-[#191c2b] font-bold">
                        <th className="p-3 sm:p-3.5 border-r border-gray-200 w-[30%]">
                          Processor Category
                        </th>
                        <th className="p-3 sm:p-3.5 border-r border-gray-200 w-[40%]">
                          Purpose &amp; Service Provided
                        </th>
                        <th className="p-3 sm:p-3.5 w-[30%]">Location of Data</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                          Cloud Hosting &amp; Infrastructure
                        </td>
                        <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                          Secure database storage, website hosting, and server infrastructure.
                        </td>
                        <td className="p-3 sm:p-3.5 align-top">
                          UK / EEA / Standard Contractual Clauses.
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                          Estate Agency CRM Software
                        </td>
                        <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                          Managing property listings, applicant matching, viewing schedules, and
                          transaction tracking.
                        </td>
                        <td className="p-3 sm:p-3.5 align-top">United Kingdom.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                          Email &amp; Communication Providers
                        </td>
                        <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                          Transmitting property alerts, customer service emails, and valuation
                          confirmation messages.
                        </td>
                        <td className="p-3 sm:p-3.5 align-top">UK / EEA.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                          Identity Verification &amp; AML Services
                        </td>
                        <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                          Electronic Anti-Money Laundering checks and identity verification for
                          vendors and buyers.
                        </td>
                        <td className="p-3 sm:p-3.5 align-top">United Kingdom.</td>
                      </tr>
                      <tr>
                        <td className="p-3 sm:p-3.5 font-semibold text-[#191c2b] border-r border-gray-200 align-top">
                          Website Analytics &amp; Security
                        </td>
                        <td className="p-3 sm:p-3.5 border-r border-gray-200 align-top">
                          Aggregated usage analytics and spam/fraud protection (e.g. Google
                          reCAPTCHA).
                        </td>
                        <td className="p-3 sm:p-3.5 align-top">
                          EEA / Global with adequacy safeguards.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 14 · Who can you complain to? */}
            <section id="section-14" className="scroll-mt-28 space-y-3 pb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                Who can you complain to?
              </h2>
              <p className="text-gray-700">
                If you have any questions, concerns, or complaints about how we have handled your
                personal information, please contact us first so we can help resolve the matter:
              </p>
              <div className="text-gray-700 leading-normal space-y-0.5 bg-[#f8f9fa] border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#191c2b]">Data Protection Officer</p>
                <p>Real5 Estates Limited / Open House Estate Agents</p>
                <p>348a Manchester Road</p>
                <p>Warrington</p>
                <p>WA1 3RE</p>
                <p className="pt-1">
                  Email:{" "}
                  <a
                    href="mailto:info@localagent.co.uk"
                    className="text-[#df0068] hover:underline font-medium"
                  >
                    info@localagent.co.uk
                  </a>
                </p>
                <p>
                  Telephone:{" "}
                  <a
                    href="tel:03330155440"
                    className="text-[#191c2b] hover:text-[#df0068] font-medium"
                  >
                    0333 015 5440
                  </a>
                </p>
              </div>
              <p className="text-gray-700 pt-2">
                You also have the right to lodge a complaint at any time with the UK supervisory
                authority for data protection issues:
              </p>
              <div className="text-gray-700 leading-normal space-y-0.5 pl-1">
                <p className="font-semibold text-[#191c2b]">
                  Information Commissioner&rsquo;s Office (ICO)
                </p>
                <p>Wycliffe House, Water Lane</p>
                <p>Wilmslow, Cheshire</p>
                <p>SK9 5AF</p>
                <p className="pt-1">
                  Helpline:{" "}
                  <a href="tel:03031231113" className="text-[#df0068] hover:underline">
                    0303 123 1113
                  </a>{" "}
                  | Website:{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#df0068] hover:underline"
                  >
                    ico.org.uk
                  </a>
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
