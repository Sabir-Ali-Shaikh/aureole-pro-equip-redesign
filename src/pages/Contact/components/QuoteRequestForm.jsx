import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send, Upload } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { industries } from "../../../data/industries";
import { products } from "../../../data/products";
import { siteConfig } from "../../../config/site";
import { submitQuoteRequest, validateAttachment } from "../../../services/quote";

const emptyForm = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  industry: "",
  product: "",
  capacity: "",
  message: "",
  attachment: null,
  consent: false,
};

const inputClass =
  "mt-2 w-full rounded-[10px] border border-border bg-white px-4 py-3 text-base text-aureole-slate outline-none transition placeholder:text-muted/55 focus:border-aureole-cyan focus:ring-4 focus:ring-aureole-cyan/10";

function validate(values) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (!values.companyName.trim()) errors.companyName = "Company name is required.";
  if (!values.contactPerson.trim()) errors.contactPerson = "Contact person is required.";
  if (!emailPattern.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (phoneDigits.length < 7) errors.phone = "Enter a valid phone number.";
  if (!values.industry) errors.industry = "Select an industry.";
  if (!values.product) errors.product = "Select a product or custom requirement.";
  if (!values.message.trim()) errors.message = "Tell us a little about your requirement.";
  if (!values.consent) errors.consent = "Please confirm that Aureole may contact you about this enquiry.";

  const attachmentError = validateAttachment(values.attachment);
  if (attachmentError) errors.attachment = attachmentError;

  return errors;
}

function makeMailto(values) {
  const productName = products.find((product) => product.slug === values.product)?.name ?? values.product;
  const industryName = industries.find((industry) => industry.id === values.industry)?.name ?? values.industry;
  const subject = `Website enquiry: ${productName || "Process equipment requirement"}`;
  const body = [
    `Company: ${values.companyName}`,
    `Contact person: ${values.contactPerson}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Industry: ${industryName}`,
    `Product: ${productName}`,
    `Required capacity: ${values.capacity || "Not specified"}`,
    "",
    "Requirement:",
    values.message,
    "",
    values.attachment ? `Attachment selected: ${values.attachment.name} (please attach it manually to this email).` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function QuoteRequestForm() {
  const [searchParams] = useSearchParams();
  const preselectedProduct = useMemo(() => {
    const requested = searchParams.get("product");
    return products.some((product) => product.slug === requested) ? requested : "";
  }, [searchParams]);

  const [values, setValues] = useState({ ...emptyForm, product: preselectedProduct });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function updateField(event) {
    const { name, value, checked, type, files } = event.target;
    const nextValue = type === "checkbox" ? checked : type === "file" ? files?.[0] ?? null : value;

    setValues((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus({ type: "idle", message: "" });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "error", message: "Please review the highlighted fields." });
      return;
    }

    setStatus({ type: "loading", message: "Submitting your enquiry…" });

    try {
      const result = await submitQuoteRequest(values);

      if (result.mode === "email-fallback") {
        setStatus({
          type: "info",
          message: "Your email app will open with the enquiry details. If you selected a URS/specification file, attach it manually before sending.",
        });
        window.location.href = makeMailto(values);
        return;
      }

      setStatus({
        type: "success",
        message: "Your enquiry has been submitted. The Aureole team can now review your requirement.",
      });
      setValues(emptyForm);
      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to submit your enquiry right now. Please contact Aureole directly.",
      });
    }
  }

  return (
    <form id="quote" onSubmit={handleSubmit} noValidate className="rounded-[var(--radius-card)] border border-border bg-white p-5 shadow-[0_28px_80px_rgba(0,21,41,.08)] sm:p-8 lg:p-10">
      <div className="border-b border-border pb-7">
        <p className="type-meta font-bold text-aureole-cyan">REQUEST A QUOTE</p>
        <h2 className="mt-3 text-3xl font-bold text-aureole-slate sm:text-4xl">Tell us what you need.</h2>
        <p className="type-body mt-4 max-w-2xl text-muted">
          Share the process, capacity and operating requirement. Fields marked with * are required.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field label="Company Name *" error={errors.companyName}>
          <input name="companyName" value={values.companyName} onChange={updateField} autoComplete="organization" className={inputClass} placeholder="Company / organization" />
        </Field>
        <Field label="Contact Person *" error={errors.contactPerson}>
          <input name="contactPerson" value={values.contactPerson} onChange={updateField} autoComplete="name" className={inputClass} placeholder="Full name" />
        </Field>
        <Field label="Email *" error={errors.email}>
          <input type="email" name="email" value={values.email} onChange={updateField} autoComplete="email" className={inputClass} placeholder="name@company.com" />
        </Field>
        <Field label="Phone *" error={errors.phone}>
          <input type="tel" name="phone" value={values.phone} onChange={updateField} autoComplete="tel" className={inputClass} placeholder="+91…" />
        </Field>
        <Field label="Industry *" error={errors.industry}>
          <select name="industry" value={values.industry} onChange={updateField} className={inputClass}>
            <option value="">Select industry</option>
            {industries.map((industry) => <option key={industry.id} value={industry.id}>{industry.name}</option>)}
            <option value="healthcare">Healthcare / Hospital</option>
            <option value="research">Research / Laboratory</option>
            <option value="other">Other</option>
          </select>
        </Field>
        <Field label="Product / System *" error={errors.product}>
          <select name="product" value={values.product} onChange={updateField} className={inputClass}>
            <option value="">Select equipment</option>
            {products.map((product) => <option key={product.slug} value={product.slug}>{product.name}</option>)}
            <option value="custom-equipment">Custom / Other equipment</option>
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field label="Required Capacity / Size" error={errors.capacity}>
          <input name="capacity" value={values.capacity} onChange={updateField} className={inputClass} placeholder="Example: 500 L, 1200 × 900 × 1500 mm, 1,000 L/hr" />
        </Field>
      </div>

      <div className="mt-6">
        <Field label="Requirement *" error={errors.message}>
          <textarea name="message" value={values.message} onChange={updateField} rows={6} className={`${inputClass} resize-y`} placeholder="Tell us about the process, load, cycle, utilities, automation, installation conditions or other technical requirements." />
        </Field>
      </div>

      <div className="mt-6">
        <Field label="URS / Specification File" error={errors.attachment}>
          <label className="mt-2 flex cursor-pointer items-center gap-4 rounded-[12px] border border-dashed border-border bg-aureole-soft px-4 py-4 transition hover:border-aureole-cyan hover:bg-aureole-surface">
            <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-white text-aureole-blue shadow-sm"><Upload size={18} /></span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-bold text-aureole-slate">{values.attachment?.name ?? "Upload PDF, DOC or DOCX"}</span>
              <span className="mt-1 block text-xs text-muted">Optional · Maximum 10 MB</span>
            </span>
            <input type="file" name="attachment" accept=".pdf,.doc,.docx" onChange={updateField} className="sr-only" />
          </label>
        </Field>
      </div>

      <div className="mt-7">
        <label className="flex items-start gap-3 text-sm leading-6 text-muted">
          <input type="checkbox" name="consent" checked={values.consent} onChange={updateField} className="mt-1 size-4 accent-[var(--aureole-blue)]" />
          <span>I agree that Aureole may use these details to respond to this enquiry. *</span>
        </label>
        {errors.consent && <p className="mt-2 text-sm font-semibold text-red-600">{errors.consent}</p>}
      </div>

      {status.type !== "idle" && (
        <div className={`mt-7 flex items-start gap-3 rounded-[12px] border px-4 py-4 text-sm leading-6 ${status.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-800" : status.type === "error" ? "border-red-200 bg-red-50 text-red-700" : "border-aureole-cyan/25 bg-aureole-surface text-aureole-deep"}`}>
          {status.type === "loading" ? <LoaderCircle size={18} className="mt-0.5 shrink-0 animate-spin" /> : status.type === "success" ? <CheckCircle2 size={18} className="mt-0.5 shrink-0" /> : <AlertCircle size={18} className="mt-0.5 shrink-0" />}
          <span>{status.message}</span>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-xs leading-5 text-muted">
          For urgent requirements, call {siteConfig.contact.phone} or email {siteConfig.contact.email}.
        </p>
        <button type="submit" disabled={status.type === "loading"} className="btn-primary group disabled:cursor-not-allowed disabled:opacity-60">
          {status.type === "loading" ? <LoaderCircle size={17} className="mr-2 animate-spin" /> : <Send size={17} className="mr-2" />}
          Submit Enquiry
        </button>
      </div>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block text-sm font-bold text-aureole-slate">
      {label}
      {children}
      {error && <span className="mt-2 block text-sm font-semibold text-red-600">{error}</span>}
    </label>
  );
}
