
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Ic, AR } from "./ui";
import { CONTACT } from "../data/site";

export default function Contact() {
  const init = {
    name: "",
    email: "",
    phone: "",
    type: "New website",
    meet: "Video call",
    date: "",
    time: "",
    msg: ""
  };

  const [f, setF] = useState(init);
  const [done, setDone] = useState(false);
  const [cp, setCp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = k => e =>
    setF(prev => ({ ...prev, [k]: e.target.value }));

  const today = new Date().toISOString().slice(0, 10);

  const submit = async e => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      const templateParams = {
        name: f.name,
        email: f.email,
        phone: f.phone || "Not provided",
        subject: f.type,
        meeting_method: f.meet,
        preferred_date: f.date || "Not specified",
        preferred_time: f.time || "Not specified",
        message: f.msg
      };

      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      setDone(true);

    } catch (err) {
      console.error("EmailJS submission error:", err);
      const reason =
        typeof err?.text === "string"
          ? err.text
          : err instanceof Error
            ? err.message
            : "";
      setError(
        reason
          ? `We couldn't send your request: ${reason}`
          : "We couldn't send your request. Please try again or contact us directly via email."
      );
    } finally {
      setLoading(false);
    }
  };

  const types = [
    "New website",
    "Website redesign",
    "Web application",
    "Branding / UI-UX design",
    "Maintenance & support",
    "Not sure yet"
  ];

  const meets = [
    "Video call",
    "Phone call",
    "WhatsApp chat",
    "In person"
  ];

  return (
    <section id="contact" className="light">
      <div className="wrap ct">

        <div>
          <span className="eyebrow rv">Let's talk</span>

          <h2 className="rv">
            Book a conversation about your website.
          </h2>

          <p className="sub rv">
            Tell us about your idea and how you'd like to meet.
            We'll get back to you to confirm a time that suits you.
          </p>

          <div className="ci rv">
            <a href={"mailto:" + CONTACT.email}>
              <span className="ic">
                <Ic d="M4 4h16v16H4zM4 7l8 6 8-6" s={20}/>
              </span>
              {CONTACT.email}
            </a>

            <a href={"tel:" + CONTACT.phone.replace(/\s/g, "")}>
              <span className="ic">
                <Ic d="M23 7l-7 5 7 5zM1 5h15v14H1z" s={20}/>
              </span>
              {CONTACT.phone}
            </a>

            <div>
              <span className="ic">
                <Ic d="M12 8v4l3 2M12 22a10 10 0 100-20 10 10 0 000 20z" s={20}/>
              </span>
              Video call, phone, WhatsApp or in person
            </div>
          </div>
        </div>

        {done ? (
          <div className="form ok" role="status">
            <h3
              className="sora"
              style={{ fontSize: "1.8rem" }}
            >
              Thanks, {f.name.split(" ")[0]}!
            </h3>

            <p>
              Your request has been successfully received.
              We'll review your project details and get back
              to you to confirm your preferred meeting arrangements.
            </p>

            <div className="btn p">
              <Ic d="M20 6L9 17l-5-5" s={18}/>
              Request sent successfully
            </div>

            <button
              type="button"
              className="btn g"
              style={{
                color: "var(--ink)",
                borderColor: "#0b163344"
              }}
              onClick={() => {
                setF(init);
                setDone(false);
                setError("");
              }}
            >
              Submit another request
            </button>

            <button
              type="button"
              className="btn g"
              style={{
                color: "var(--ink)",
                borderColor: "#0b163344"
              }}
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(CONTACT.email);
                  setCp(true);
                } catch (e) {
                  console.error(e);
                }
              }}
            >
              {cp ? "Email copied" : "Copy email address"}
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={submit}>

            <div className="row">
              <label>
                Full name *
                <input
                  required
                  autoComplete="name"
                  value={f.name}
                  onChange={set("name")}
                  placeholder="Your name"
                />
              </label>

              <label>
                Email *
                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={f.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <div className="row">
              <label>
                Phone / WhatsApp
                <input
                  type="tel"
                  autoComplete="tel"
                  value={f.phone}
                  onChange={set("phone")}
                  placeholder="+000 000 000 0000"
                />
              </label>

              <label>
                What do you need?
                <select
                  value={f.type}
                  onChange={set("type")}
                >
                  {types.map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
            </div>

            <fieldset>
              <legend>How would you like to meet?</legend>

              <div className="chips">
                {meets.map(m => (
                  <label key={m}>
                    <input
                      type="radio"
                      name="meet"
                      checked={f.meet === m}
                      onChange={() =>
                        setF(prev => ({ ...prev, meet: m }))
                      }
                    />
                    <span>{m}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="row">
              <label>
                Preferred date
                <input
                  type="date"
                  min={today}
                  value={f.date}
                  onChange={set("date")}
                />
              </label>

              <label>
                Preferred time
                <input
                  type="time"
                  value={f.time}
                  onChange={set("time")}
                />
              </label>
            </div>

            <label>
              Tell us about your project *
              <textarea
                required
                value={f.msg}
                onChange={set("msg")}
                placeholder="What would you like us to build or improve?"
              />
            </label>

            {error && (
              <p
                role="alert"
                style={{
                  color: "#dc2626",
                  fontSize: "0.9rem",
                  margin: "8px 0"
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn p"
              disabled={loading}
              style={{
                opacity: loading ? 0.7 : 1,
                cursor: loading ? "wait" : "pointer"
              }}
            >
              {loading ? (
                <>
                  Sending your request...
                </>
              ) : (
                <>
                  Send &amp; request a call
                  <Ic d={AR} s={18}/>
                </>
              )}
            </button>

          </form>
        )}
      </div>
    </section>
  );
}
