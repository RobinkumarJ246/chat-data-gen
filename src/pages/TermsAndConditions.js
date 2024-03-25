// TermsAndConditions.js
import React from 'react';
import '../styles/TermsAndConditions.css';
import logo from '../assets/logo.png';

const TermsAndConditions = () => {
    return (
        <div className="container">
            <div className="header">
                <img src={logo} alt="ChatDataGen Logo" className="logo" />
                <h1>Terms and Conditions</h1>
            </div>
            <p className="last-updated">Last Updated: 25/03/2024</p>

            <section>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing or using ChatDataGen, you agree to comply with and be bound by these Terms and Conditions.</p>
            </section>

            <section>
                <h2>2. Description of Service</h2>
                <p>ChatDataGen is a web-based application designed to assist users in creating conversational datasets. Users can engage in a conversation with another user and subsequently download the conversation in conversational pairs.</p>
            </section>

            <section>
                <h2>3. Beta Stage & Security Features</h2>
                <p>Please note that ChatDataGen is currently in the beta stage of development. As such, certain security features are still under development. By using this web app, you acknowledge and accept the potential risks associated with using a beta product, including but not limited to security vulnerabilities.</p>
            </section>

            <section>
                <h2>4. Data Collection and Privacy</h2>
                <ul>
                    <li><strong>User Consent:</strong> We only collect and store the data that you intentionally input into ChatDataGen for the purpose of creating conversational datasets. Your use of the web app constitutes your explicit and informed consent to the collection and storage of this data.</li>
                    <li><strong>No Hidden Data Collection:</strong> We do not engage in any hidden data collection practices. We collect and store only the data that you intentionally input into the web app for the sole purpose of creating conversational datasets.</li>
                    <li><strong>Transparency:</strong> We are committed to transparency in our data collection practices. You have full control over the data you input into ChatDataGen, and you can delete your data at any time.</li>
                    <li><strong>Data Usage:</strong> The data collected and stored by ChatDataGen is solely used for the purpose of creating conversational datasets and is not shared, sold, or otherwise disclosed to any third parties, except as required by law or as necessary to provide our services to you.</li>
                </ul>
            </section>

            <section>
                <h2>5. User Responsibilities</h2>
                <ul>
                    <li><strong>Accuracy of Information:</strong> You are responsible for the accuracy and completeness of the information you input into ChatDataGen.</li>
                    <li><strong>Compliance with Laws:</strong> You agree to comply with all applicable laws and regulations when using ChatDataGen.</li>
                </ul>
            </section>

            <section>
                <h2>6. Intellectual Property</h2>
                <p>All content, features, and functionality of ChatDataGen are the exclusive property of InnovateXcel and are protected by copyright, trademark, and other intellectual property laws.</p>
            </section>

            <section>
                <h2>7. Limitation of Liability</h2>
                <p>To the fullest extent permitted by applicable law, InnovateXcel shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use ChatDataGen; (b) any conduct or content of any third party on ChatDataGen; or (c) unauthorized access, use, or alteration of your transmissions or content.</p>
            </section>

            <section>
                <h2>8. Changes to Terms</h2>
                <p>InnovateXcel reserves the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for updates. Your continued use of ChatDataGen following the posting of any changes to these Terms constitutes acceptance of those changes.</p>
            </section>

            <section>
                <h2>Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us at <a href="mailto:innovatexcel.team@gmail.com">innovatexcel</a>.</p>
            </section>
            <footer className="footer">
                <p className="digitally-signed">END OF DOCUMENT</p>
            </footer>
        </div>
    );
}

export default TermsAndConditions;