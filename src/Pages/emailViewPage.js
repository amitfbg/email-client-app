import React from "react";
import EmailBodyCard from "../components/EmailBodyCard/emailBodyCard";
import EmailCard from "../components/EmailCard/emailCard";
import './emailViewPage.css'

function EmailViewPage() {
  return (
    <div>
      <header>Header</header>
      <main className="main-content wrapper">
        <aside className="email-card-list">
          <EmailCard />
          <EmailCard />
          <EmailCard />
        </aside>
        <EmailBodyCard />
      </main>
    </div>
  );
}

export default EmailViewPage;
