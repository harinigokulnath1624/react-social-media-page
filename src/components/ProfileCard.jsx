import { useState } from "react";
import Cover from "./Cover";
import { compact } from "../data";

function Silhouette() {
  return (
    <svg viewBox="0 0 100 100" className="silhouette" aria-hidden="true">
      <circle cx="50" cy="38" r="17" fill="#111" />
      <path d="M14 100 C14 72 30 60 50 60 C70 60 86 72 86 100Z" fill="#111" />
    </svg>
  );
}

export default function ProfileCard({ profile }) {
  const [saved, setSaved] = useState(false);
  const [following, setFollowing] = useState(false);
  const followers = profile.followers + (following ? 1 : 0);

  return (
    <article className="pcard">
      <div className="pcard-cover">
        <Cover theme={profile.scene} uid={profile.id} />
        <div className="pcard-fade" />
        <button
          type="button"
          className={`bookmark ${saved ? "is-saved" : ""}`}
          aria-pressed={saved}
          aria-label={saved ? "Remove bookmark" : "Bookmark profile"}
          onClick={() => setSaved(!saved)}
        >
          <i className={`bi ${saved ? "bi-bookmark-fill" : "bi-bookmark"}`} />
        </button>
      </div>

      <div className="pcard-body">
        <div className="avatar-circle" style={{ background: profile.avatarBg }}>
          <Silhouette />
        </div>

        <div className="d-flex align-items-center justify-content-between gap-2 mt-3">
          <div className="min-w-0">
            <h2 className="pcard-name">{profile.name}</h2>
            <p className="pcard-role">{profile.role}</p>
          </div>

          <div className="skills-pill" title="Skills">
            <span className="skill-icons">
              {profile.skills.map((s) => (
                <span key={s.icon} className="skill-dot" style={{ background: s.bg }}>
                  <i className={`bi ${s.icon}`} />
                </span>
              ))}
            </span>
            <span className="skills-label">Skills</span>
          </div>
        </div>

        <div className="pcard-footer">
          <div className="stat">
            <strong><i className="bi bi-star-fill me-1" />{profile.rating.toFixed(1)}</strong>
            <span>rating</span>
          </div>
          <div className="stat">
            <strong>{profile.posts}</strong>
            <span>posts</span>
          </div>
          <div className="stat">
            <strong aria-live="polite">{compact(followers)}</strong>
            <span>followers</span>
          </div>

          <button
            type="button"
            className="follow-btn"
            aria-pressed={following}
            onClick={() => setFollowing(!following)}
          >
            {following ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </article>
  );
}
