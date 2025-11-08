"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    // Web3Forms API Key
    formData.append("access_key", "62f713fc-4ecb-4a44-94ad-fde5ebfe3dbe");

    // Convert FormData to JSON object
    const object: Record<string, string> = {};
    formData.forEach((value, key) => {
      object[key] = value.toString();
    });
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        setResult("success");
        setErrorMessage("");
        event.currentTarget.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setResult(""), 5000);
      } else {
        console.error("Web3Forms error:", data);
        setResult("error");
        // Show specific error message
        if (data.message && data.message.includes("spam")) {
          setErrorMessage("Lütfen gerçek bilgilerinizle tekrar deneyin veya direkt telefon/email ile iletişime geçin.");
        } else {
          setErrorMessage(data.message || "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        }
        setTimeout(() => {
          setResult("");
          setErrorMessage("");
        }, 7000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setLoading(false);
      setResult("error");
      setErrorMessage("Bağlantı hatası. İnternet bağlantınızı kontrol edin.");
      setTimeout(() => {
        setResult("");
        setErrorMessage("");
      }, 7000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('contact.form.name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all"
            placeholder={t('contact.form.namePlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('contact.form.email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all"
            placeholder={t('contact.form.emailPlaceholder')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          {t('contact.form.phone')}
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all"
          placeholder={t('contact.form.phonePlaceholder')}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          {t('contact.form.message')} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-accent/50 focus:border-accent outline-none transition-all resize-none"
          placeholder={t('contact.form.messagePlaceholder')}
        />
      </div>

      {/* Hidden fields for spam protection and organization */}
      <input type="hidden" name="subject" value="Navmar Agency - Yeni İletişim Formu" />
      <input type="hidden" name="from_name" value="Navmar Agency Website" />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      
      {/* Honeypot field - leave empty to avoid spam */}
      <input type="text" name="honeypot" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {result === "success" && (
        <div className="bg-green-50 border-2 border-green-500 text-green-700 px-5 py-4 rounded-xl flex items-center gap-3 animate-fade-in">
          <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">{t('contact.form.successMessage')}</span>
        </div>
      )}

      {result === "error" && (
        <div className="bg-red-50 border-2 border-red-500 text-red-700 px-5 py-4 rounded-xl flex items-start gap-3 animate-fade-in">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-medium">{t('contact.form.errorMessage')}</p>
            {errorMessage && <p className="text-sm mt-1">{errorMessage}</p>}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-accent to-[#c29c24] hover:from-[#c29c24] hover:to-accent text-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
      >
        <span className="flex items-center justify-center gap-2">
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {t('contact.form.sending')}
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              {t('contact.form.submit')}
            </>
          )}
        </span>
      </button>
    </form>
  );
}
