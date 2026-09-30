const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function validateAttachment(file) {
  if (!file) return null;

  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return "Upload a PDF, DOC or DOCX file.";
  }

  if (file.size > MAX_FILE_SIZE) {
    return "Attachment must be 10 MB or smaller.";
  }

  return null;
}

function appendIfPresent(formData, key, value) {
  if (value !== undefined && value !== null && value !== "") {
    formData.append(key, value);
  }
}

export async function submitQuoteRequest(values) {
  const endpoint = import.meta.env.VITE_QUOTE_ENDPOINT;

  if (!endpoint) {
    return { mode: "email-fallback" };
  }

  const formData = new FormData();
  appendIfPresent(formData, "companyName", values.companyName);
  appendIfPresent(formData, "contactPerson", values.contactPerson);
  appendIfPresent(formData, "email", values.email);
  appendIfPresent(formData, "phone", values.phone);
  appendIfPresent(formData, "industry", values.industry);
  appendIfPresent(formData, "product", values.product);
  appendIfPresent(formData, "capacity", values.capacity);
  appendIfPresent(formData, "message", values.message);
  appendIfPresent(formData, "source", "Aureole website quote form");

  if (values.attachment) {
    formData.append("attachment", values.attachment);
  }

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Unable to submit your enquiry right now. Please try again or contact Aureole directly.");
  }

  return { mode: "api" };
}
