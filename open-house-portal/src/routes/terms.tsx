import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of use | Open House Estate Agents" },
      {
        name: "description",
        content:
          "How you can use our website and its content. Terms of use for Open House Estate Agents.",
      },
      { property: "og:title", content: "Terms of use | Open House Estate Agents" },
      {
        property: "og:description",
        content:
          "How you can use our website and its content. Terms of use for Open House Estate Agents.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

const SECTIONS = [
  { id: "section-1", num: "01", title: "Open House Estate Agents" },
  { id: "section-2", num: "02", title: "This website" },
  { id: "section-3", num: "03", title: "Ownership & use of content" },
  { id: "section-4", num: "04", title: "Unlawful use" },
  { id: "section-5", num: "05", title: "Intellectual property rights" },
  { id: "section-6", num: "06", title: "Liability" },
  { id: "section-7", num: "07", title: "Privacy" },
  { id: "section-8", num: "08", title: "Changes to the terms" },
  { id: "section-9", num: "09", title: "Jurisdiction" },
  { id: "section-10", num: "10", title: "Severability" },
  { id: "section-11", num: "11", title: "Conflict" },
  { id: "section-12", num: "12", title: "Events beyond our control" },
  { id: "section-13", num: "13", title: "Links" },
  { id: "section-14", num: "14", title: "File download" },
  { id: "section-15", num: "15", title: "Contact" },
];

function TermsPage() {
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
        {/* TOP: light pink pill badge "Legal information"; large bold heading "Terms of use"; small grey text "How you can use our website and its content." */}
        <div className="mb-10 sm:mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#fcecf3] text-[#df0068] mb-3">
            Legal information
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#191c2b] tracking-tight leading-tight">
            Terms of use
          </h1>
          <p className="mt-2 text-sm text-gray-500 font-normal">
            How you can use our website and its content.
          </p>
        </div>

        {/* LAYOUT: two columns.
            LEFT (sticky light grey rounded card)
            RIGHT: bold numbered headings with small body text under each */}
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
                <p className="text-gray-600 mb-1">Questions about these terms?</p>
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
            {/* 1. Open House Estate Agents */}
            <section id="section-1" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                1. Open House Estate Agents
              </h2>
              <p className="text-gray-700">
                Open House Estate Agents is a private company registered in England and Wales whose
                registered address is:
              </p>
              <div className="text-gray-700 leading-normal pl-0 space-y-0.5">
                <p>Open House Estate Agents</p>
                <p>The HiveWA1</p>
                <p>27-31 Sankey St</p>
                <p>Warrington</p>
                <p>WA1 1XG</p>
              </div>
              <p className="text-gray-700 pt-1">Registered Company number: 07200333</p>
            </section>

            {/* 2. This Website */}
            <section id="section-2" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                2. This Website
              </h2>
              <p className="text-gray-700">
                Open House Estate Agents owns the website located at{" "}
                <a
                  href="https://www.onlineestateagents.org.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#df0068] hover:underline"
                >
                  www.onlineestateagents.org.uk
                </a>{" "}
                (the &ldquo;Website&rdquo;). By accessing and using the Website you the user agree
                to be bound by these terms and conditions (the &ldquo;Terms&rdquo;) which govern
                your access to and use of the Website.
              </p>
            </section>

            {/* 3. Ownership and Use of Content */}
            <section id="section-3" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                3. Ownership and Use of Content
              </h2>
              <p className="text-gray-700">
                3.1 All text, data, charts, tables, software, video, music, sound, graphics,
                photographs, illustrations, artwork, names, logos, trade marks, service marks and
                other material on the Website (the &ldquo;Content&rdquo;) and all rights in it
                belongs to Open House Estate Agents You may retrieve and display Content from the
                Website on a computer screen, print individual pages on paper (but not photocopy
                them) and store such pages in electronic form on disk (but not on any server or
                other storage device connected to a network) for your personal use. Content may not
                be copied, reproduced, republished, downloaded, posted, broadcast or transmitted in
                any other way.
              </p>
              <p className="text-gray-700">
                3.2 You agree not to adapt, alter or create a derivative work from any of the
                Content on the Website or to use it for any purpose other than for your personal and
                non-commercial use.
              </p>
            </section>

            {/* 4. Unlawful Use */}
            <section id="section-4" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                4. Unlawful Use
              </h2>
              <p className="text-gray-700">
                You agree to use this Website only for lawful purposes and in a manner that does not
                infringe the rights of or restrict or inhibit the use and enjoyment of the Website
                by any third party. Such restriction or inhibition includes, but is not limited to,
                conduct which is defamatory, or which may harass, cause distress or inconvenience to
                any person and the transmission of obscene or offensive content or the disruption of
                normal flow of dialogue within the Website.
              </p>
            </section>

            {/* 5. Intellectual Property Rights */}
            <section id="section-5" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                5. Intellectual Property Rights
              </h2>
              <p className="text-gray-700">
                5.1 All copyright, trade marks, database rights and other intellectual property
                rights that may exist in this Website and the Content shall remain at all times the
                property of Open House Estate Agents.
              </p>
              <p className="text-gray-700">
                5.2 The trade marks, service marks and logos used and displayed on this Website
                (&ldquo;Trade Marks&rdquo;) are registered or unregistered trade marks of Open House
                Estate Agents. Nothing on this Website should be construed as granting, by
                implication or otherwise, any licence or right to use any Trade Mark without written
                permission from Open House Estate Agents. The name of Open House Estate Agents may
                not be used in any way, including in advertising or publicity pertaining to
                distribution of Content without the prior written permission of Open House Estate
                Agents.
              </p>
            </section>

            {/* 6. Liability */}
            <section id="section-6" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                6. Liability
              </h2>
              <p className="text-gray-700">
                6.1 The Website and Content is provided &ldquo;AS IS&rdquo; and on an &ldquo;AS
                AVAILABLE&rdquo; basis and Open House Estate Agents does not guarantee the accuracy,
                timeliness, completeness, performance or fitness for a particular purpose of the
                Website or any Content. All implied warranties, including but not limited to the
                implied warranties of satisfactory quality, fitness for a particular purpose,
                non-infringement, compatibility, security and accuracy are excluded from these Terms
                to the extent that they may be excluded as a matter of law.
              </p>
              <p className="text-gray-700">
                6.2 In no event will Open House Estate Agents be liable for any loss including,
                without limitation, indirect or consequential loss, or any damages arising from loss
                of use, data or profits, whether in contract, tort or otherwise, arising out of or
                in connection with the use of this Website.
              </p>
              <p className="text-gray-700">
                6.3 Open House Estate Agents has tried to ensure that all the Content provided on
                the Website is correct at the time of publication. The Content is provided on an
                information basis only and should not be relied upon. No responsibility is accepted
                by or on behalf of Open House Estate Agents for any errors, omissions, or misleading
                Content on the Website or on any websites to which the Website connects.
              </p>
              <p className="text-gray-700">
                6.4 Open House Estate Agents does not warrant that the Website or Content will be
                uninterrupted or error free, that any defects will be corrected, or that this
                Website or the server that makes it available are free of viruses or bugs.
              </p>
            </section>

            {/* 7. Privacy */}
            <section id="section-7" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                7. Privacy
              </h2>
              <p className="text-gray-700">
                You must read and accept the Open House Estate Agents Privacy Policy &amp; Notice
                which details what type of personal information Open House Estate Agents may collect
                from you when you visit the Website and how Open House Estate Agents may store and
                use the information in accordance with the GDPR 2018 and the Privacy and Electronic
                Communications Regulations 2003.
              </p>
            </section>

            {/* 8. Changes to the Terms */}
            <section id="section-8" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                8. Changes to the Terms
              </h2>
              <p className="text-gray-700">
                Open House Estate Agents reserve the right, at its discretion, to make changes to
                any parts of the Website or these Terms. When these Terms are amended, Open House
                Estate Agents will publish details of the amendments on the Website. Your continued
                use of the Website is taken as your agreement to be bound by these Terms as amended.
              </p>
            </section>

            {/* 9. Jurisdiction */}
            <section id="section-9" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                9. Jurisdiction
              </h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with English Law and
                subject to the exclusive jurisdiction of the English Courts.
              </p>
            </section>

            {/* 10. Severability */}
            <section id="section-10" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                10. Severability
              </h2>
              <p className="text-gray-700">
                If these Terms or any part of them should be determined to be illegal, invalid or
                otherwise unenforceable under the laws of any state or country in which these Terms
                are intended to be effective, then to the extent that they are so illegal, invalid
                or unenforceable, they shall in that state or country be treated as severed and
                deleted from these Terms and the remaining Terms shall survive and remain in full
                force and effect and continue to be binding and enforceable in that state or
                country.
              </p>
            </section>

            {/* 11. Conflict */}
            <section id="section-11" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                11. Conflict
              </h2>
              <p className="text-gray-700">
                If there is any conflict between these Terms and any other written agreement between
                you and Open House Estate Agents then the latter shall prevail.
              </p>
            </section>

            {/* 12. Events beyond our control */}
            <section id="section-12" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                12. Events beyond our control
              </h2>
              <p className="text-gray-700">
                Open House Estate Agents will not be responsible for any breach of these Terms
                caused by circumstances beyond its reasonable control.
              </p>
            </section>

            {/* 13. Links */}
            <section id="section-13" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                13. Links
              </h2>
              <p className="text-gray-700">
                Open House Estate Agents is not responsible for the availability or content of any
                third party websites or material you access through this Website.
              </p>
            </section>

            {/* 14. File Download */}
            <section id="section-14" className="scroll-mt-28 space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                14. File Download
              </h2>
              <p className="text-gray-700">
                Certain files of Content are available for download from the Website. These files of
                Content are subject to these Terms.
              </p>
            </section>

            {/* 15. Contact */}
            <section id="section-15" className="scroll-mt-28 space-y-3 pb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-[#191c2b] tracking-tight">
                15. Contact
              </h2>
              <p className="text-gray-700">
                If you wish to contact Open House Estate Agents regarding the Website, these Terms
                or the Privacy Policy &amp; Notice please contact us by post, telephone or in person
                at:
              </p>
              <div className="text-gray-700 leading-normal space-y-0.5">
                <p>Open House Estate Agents</p>
                <p>348a Manchester road</p>
                <p>Warrington</p>
                <p>wa1 3re</p>
              </div>
              <div className="pt-2 space-y-1">
                <div>
                  <a
                    href="tel:03330155440"
                    className="text-[#191c2b] hover:text-[#df0068] font-medium"
                  >
                    0333 015 5440
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:info@localagent.co.uk"
                    className="text-[#df0068] hover:underline font-medium"
                  >
                    info@localagent.co.uk
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
