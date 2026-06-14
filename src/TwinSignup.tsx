import { useState } from "react";
import React from "react";
import twinLogo from './assets/twin-logo.jpeg';

const PINK = "#FF2D6B";
const GRADIENT = "linear-gradient(135deg, #FF2D6B 0%, #FF6B35 100%)";
const GRADIENT_SOFT = "linear-gradient(135deg, #FF2D6B 0%, #FF8C69 100%)";


function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

interface FeaturePillProps {
  icon: string;
  text: string;
}

function FeaturePill({ icon, text }: FeaturePillProps) {
  return (
    <div style={{
      display: "flex" as const,
      alignItems: "center",
      gap: "10px",
      background: "rgba(255,255,255,0.15)",
      borderRadius: "40px",
      padding: "10px 18px",
      backdropFilter: "blur(8px)",
      border: "1px solid rgba(255,255,255,0.25)",
    }}>
      <span style={{ fontSize: "18px" }}>{icon}</span>
      <span style={{ fontSize: "13px", color: "white", fontWeight: 500 }}>{text}</span>
    </div>
  );
}

interface OrbProps {
  width: number;
  height: number;
  top?: number | string;
  left?: number | string;
  bottom?: number | string;
  right?: number | string;
}

function Orb({ width, height, top, left, bottom, right }: OrbProps) {
  return (
    <div style={{
      position: "absolute" as const,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.1)",
      width,
      height,
      top,
      left,
      bottom,
      right,
    }} />
  );
}

export default function TwinSignup() {
  const [email, setEmail] = useState<string>("");
  const [googleHovered, setGoogleHovered] = useState<boolean>(false);
  const [ctaHovered, setCtaHovered] = useState<boolean>(false);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: "#fff5f7",
    }}>

      {/* ── LEFT PANEL ── */}
      <div style={{
        flex: "0 0 48%",
        background: GRADIENT,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "space-between",
        padding: "48px 52px",
      }}>

        <Orb width={350} height={350} top={-120} left={-100} />
        <Orb width={220} height={220} bottom={60} right={-80} />
        <Orb width={130} height={130} top="42%" left="58%" />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative", zIndex: 1 }}>
          <img src={twinLogo} width={52} height={52} alt="Twin logo" style={{ borderRadius: "12px" }} />
          <div>
            <div style={{ fontSize: "24px", fontWeight: 700, color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>twin</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", letterSpacing: "0.03em", marginTop: 3 }}>
              Never sleep.{" "}
              <span style={{ color: "white", fontWeight: 600 }}>Never stop selling.</span>
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.65)", textTransform: "uppercase" as const, marginBottom: "20px",
          }}>
            AI-powered sales twin
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 3.5vw, 48px)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            margin: "0 0 24px",
          }}>
            Your AI twin<br />sells while<br />you sleep.
          </h1>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.75,
            maxWidth: "320px",
            margin: "0 0 36px",
          }}>
            Create your digital AI twin in minutes. It engages leads, answers questions, and closes deals — 24 hours a day.
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
            <FeaturePill icon="⚡" text="Live AI sessions that feel human" />
            <FeaturePill icon="🎯" text="Smart lead qualification" />
            <FeaturePill icon="📈" text="Real-time sales analytics" />
          </div>
        </div>

        {/* Social proof */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex" }}>
            {["#FFB347", "#87CEEB", "#98FB98", "#DDA0DD"].map((c, i) => (
              <div key={i} style={{
                width: 32, height: 32, borderRadius: "50%",
                background: c, border: "2.5px solid rgba(255,255,255,0.6)",
                marginLeft: i === 0 ? 0 : -10,
              }} />
            ))}
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>2,400+ sales teams</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>already using their AI twin</div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 40px",
        background: "#ffffff",
      }}>
        <div style={{ width: "100%", maxWidth: "400px" }}>

          {/* Logo on right for context */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "36px" }}>
            <img src={twinLogo} width={36} height={36} alt="Twin logo" style={{ borderRadius: "8px" }} />
            <span style={{ fontSize: "18px", fontWeight: 700, color: "#111", letterSpacing: "-0.02em" }}>twin</span>
          </div>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "#FFF0F4", border: "1px solid #FFD6E4",
            borderRadius: "20px", padding: "5px 14px", marginBottom: "16px",
          }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: PINK }} />
            <span style={{ fontSize: "12px", fontWeight: 600, color: PINK, letterSpacing: "0.04em" }}>
              Early access · Free to start
            </span>
          </div>

          <h2 style={{
            fontSize: "30px", fontWeight: 800, color: "#111",
            margin: "0 0 10px", letterSpacing: "-0.03em", lineHeight: 1.15,
          }}>
            Create your{" "}
            <span style={{
              backgroundImage: GRADIENT_SOFT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              AI Twin
            </span>
          </h2>
          <p style={{ fontSize: "14px", color: "#999", margin: "0 0 32px", lineHeight: 1.6 }}>
            Join thousands of sales professionals who never miss a deal.
          </p>

          {/* Google button */}
          <button
            onMouseEnter={() => setGoogleHovered(true)}
            onMouseLeave={() => setGoogleHovered(false)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              padding: "14px 20px",
              borderRadius: "14px",
              border: `1.5px solid ${googleHovered ? "#e0e0e0" : "#ebebeb"}`,
              background: googleHovered ? "#fafafa" : "white",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: 600,
              color: "#1a1a1a",
              transition: "all 0.15s ease",
              boxShadow: googleHovered ? "0 4px 16px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
              marginBottom: "20px",
              fontFamily: "inherit",
            }}
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
            <div style={{ flex: 1, height: "1px", background: "#f0f0f0" }} />
            <span style={{ fontSize: "12px", color: "#ccc", fontWeight: 500 }}>or sign up with email</span>
            <div style={{ flex: 1, height: "1px", background: "#f0f0f0" }} />
          </div>

          {/* Email input */}
          <div style={{ marginBottom: "14px" }}>
            <label style={{
              display: "block", fontSize: "12px", fontWeight: 600,
              color: "#555", marginBottom: "7px", letterSpacing: "0.02em",
            }}>
              Work email
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "13px 16px",
                borderRadius: "12px",
                border: "1.5px solid #efefef",
                fontSize: "14px",
                color: "#111",
                outline: "none",
                background: "#fafafa",
                fontFamily: "inherit",
                boxSizing: "border-box" as const,
                transition: "border-color 0.15s",
              }}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = PINK)}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => (e.target.style.borderColor = "#efefef")}
            />
          </div>

          {/* CTA */}
          <button
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
            style={{
              width: "100%",
              padding: "15px 20px",
              borderRadius: "14px",
              border: "none",
              background: GRADIENT,
              color: "white",
              fontSize: "15px",
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
              letterSpacing: "0.01em",
              boxShadow: ctaHovered
                ? "0 8px 28px rgba(255,45,107,0.45)"
                : "0 6px 24px rgba(255,45,107,0.35)",
              transform: ctaHovered ? "translateY(-1px)" : "translateY(0)",
              transition: "all 0.15s ease",
              marginBottom: "20px",
            }}
          >
            Create my AI Twin →
          </button>

          {/* Terms */}
          <p style={{ fontSize: "12px", color: "#bbb", textAlign: "center" as const, lineHeight: 1.6, margin: "0 0 28px" }}>
            By signing up you agree to our{" "}
            <span style={{ color: PINK, cursor: "pointer", fontWeight: 500 }}>Terms</span>{" "}
            and{" "}
            <span style={{ color: PINK, cursor: "pointer", fontWeight: 500 }}>Privacy Policy</span>.
          </p>

          {/* Sign in */}
          <div style={{ textAlign: "center" as const, padding: "18px 0 0", borderTop: "1px solid #f5f5f5" }}>
            <span style={{ fontSize: "13px", color: "#aaa" }}>Already have an account? </span>
            <span style={{
              fontSize: "13px", fontWeight: 600,
              backgroundImage: GRADIENT_SOFT,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              cursor: "pointer",
            }}>
              Sign in
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
