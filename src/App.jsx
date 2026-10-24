import ProfileCard from "./components/ProfileCard";
import { PROFILES } from "./data";

export default function App() {
  return (
    <main className="container page">
      <header className="mb-4 text-center">
        <h1 className="page-title">People to follow</h1>
        <p className="text-muted-ink mb-0">Bookmark a profile or hit follow – both toggle on click.</p>
      </header>

      <div className="row g-4 justify-content-center">
        {PROFILES.map((p) => (
          <div key={p.id} className="col-12 col-md-6 col-xl-4 d-flex justify-content-center">
            <ProfileCard profile={p} />
          </div>
        ))}
      </div>
    </main>
  );
}
