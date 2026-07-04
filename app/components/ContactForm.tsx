type ContactFormProps = {
  formName?: string;
  serviceName?: string;
};

export default function ContactForm({
  formName = "contact",
  serviceName,
}: ContactFormProps) {
  return (
    <form className="space-y-5">
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value={formName} />
      {serviceName && <input type="hidden" name="service" value={serviceName} />}

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-secondary">Name</span>
        <input
          name="name"
          type="text"
          required
          className="w-full rounded-lg bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-light/40"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-secondary">Email</span>
        <input
          name="email"
          type="email"
          required
          className="w-full rounded-lg bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-light/40"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-secondary">Message</span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell us about your project..."
          className="w-full resize-y rounded-lg bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary-light/40"
        />
      </label>

      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
      >
        Submit
      </button>
    </form>
  );
}
