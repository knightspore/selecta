import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Selecta",
  description:
    "Find out how your personal information is collected, used, and disclosed when you use Selecta",
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="font-bold text-shell-500">Effective Date: 01 June 2023</p>
      <p>
        This Privacy Policy describes how your personal information is
        collected, used, and disclosed when you use the Selecta App (“Selecta”).
        By using Selecta, you consent to the practices described in this Privacy
        Policy.
      </p>
      <h2 id="collection-of-information">1. Collection of Information</h2>
      <h3 id="email-information">1.1. Email Information</h3>
      <p>
        We only collect your email address for the purpose of user login. We do
        not use your email address for any other purpose or share it with any
        third parties.
      </p>
      <h3 id="recommendation-settings">1.2. Recommendation Settings</h3>
      <p>
        We store your last recommendation settings in a Vercel-managed Redis
        instance (Database). The data stored is the request body of the Spotify
        API endpoint, specifically the information obtained from the
        <code>/tracks/get-recommendations</code> endpoint. We do not store any
        additional information related to your Spotify account or personal
        details.
      </p>
      <h3 id="analytics">1.3. Analytics</h3>
      <p>
        We utilize{" "}
        <a
          href="https://vercel.com/docs/concepts/analytics/privacy-policy"
          target="_blank"
        >
          privacy-first analytics
        </a>{" "}
        to gather usage information about Selecta. This may include collecting
        non-personally identifiable information such as device information,
        session duration, and interactions within Selecta. This data is
        collected to improve the overall user experience and understand user
        preferences better.
      </p>
      <h2 id="use-of-information">2. Use of Information</h2>
      <h3 id="email-information-1">2.1 Email Information</h3>
      <p>
        Your email address is solely used for login purposes and to facilitate
        communication regarding your account or any updates related to Selecta.
        We do not use your email address for marketing purposes or share it with
        any third parties.
      </p>
      <h3 id="recommendation-settings-1">2.2. Recommendation Settings</h3>
      <p>
        The information stored in the Vercel-managed Redis instance is used
        solely to provide you with personalized recommendations within Selecta.
        We do not use this information for any other purpose or share it with
        any third parties.
      </p>
      <h3 id="analytics-1">2.3. Analytics</h3>
      <p>
        The analytics data collected is used to analyze user behavior and
        preferences within Selecta. This information helps us improve Selecta’s
        functionality and enhance the overall user experience. The analytics
        data is used in an aggregated and anonymized form, and no personally
        identifiable information is associated with it.
      </p>
      <h2 id="data-retention-and-deletion">3. Data Retention and Deletion</h2>
      <h3 id="recommendation-settings-2">3.1. Recommendation Settings</h3>
      <p>
        You have the right to request the deletion of your recommendation
        settings data stored in our Vercel-managed Redis instance at any time.
        To initiate the deletion process, please send an email to{" "}
        <a href="mailto:selecta@ciaran.co.za" target="_blank">selecta@ciaran.co.za</a>{" "}
        containing your Spotify ID. Upon receiving your request, we will
        promptly delete the corresponding recommendation settings data from our
        records.
      </p>
      <h2 id="security">Security</h2>
      <p>
        We take reasonable precautions to protect the personal information we
        collect and store. However, no method of transmission or storage is
        completely secure. Therefore, while we strive to use commercially
        acceptable means to protect your personal information, we cannot
        guarantee its absolute security.
      </p>
      <h2 id="changes-to-this-privacy-policy">
        Changes to this Privacy Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. The most current
        version will always be posted on this page with the effective date. We
        encourage you to review this Privacy Policy periodically for any
        changes. Your continued use of Selecta after any modifications to the
        Privacy Policy constitutes your acceptance of those changes.
      </p>
      <h2 id="contact-us">Contact Us</h2>
      <p>
        If you have any questions or concerns regarding this Privacy Policy or
        our privacy practices, please contact us at{" "}
        <a href="mailto:selecta@ciaran.co.za" target="_blank">selecta@ciaran.co.za</a>.
      </p>
      <p>
        By using Selecta, you acknowledge that you have read and understood this
        Privacy Policy and agree to the collection, use, and disclosure of your
        personal information as described herein.
      </p>
    </>
  );
}
