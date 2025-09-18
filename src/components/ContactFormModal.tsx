"use client";

import type React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ContactFormModalProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

const ContactFormModal = ({ open, setOpen }: ContactFormModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrorMessage("");
    try {
      const endpoint = (import.meta as any)?.env?.VITE_CONTACT_ENDPOINT ?? "/api/contact";
      const resp = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const respClone = resp.clone();
      let result: any = null;
      try {
        result = await resp.json();
      } catch {
        // ignore json parse errors
      }
      if (resp.ok) {
        setStatus("success");
        setFormData({ name: "", surname: "", phone: "", email: "", address: "" });
        setOpen(false);
      } else {
        setStatus("error");
        let msg: any = result && (result.error || result.message || result.detail);
        if (!msg) {
          try { msg = await respClone.text(); } catch {}
        }
        setErrorMessage(typeof msg === "string" ? msg : "Submission failed");
        // eslint-disable-next-line no-console
        console.error("Contact submit failed:", result || msg);
      }
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Network error";
      setErrorMessage(msg);
      // eslint-disable-next-line no-console
      console.error("Contact submit network error:", msg);
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-xl !p-8 bg-white rounded-3xl shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
            Schedule Visit
          </DialogTitle>
          <DialogDescription className="text-gray-500 mb-4 text-sm">
            Please fill in your contact information and we will reach out.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-shadow shadow-sm"
              required
            />
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-shadow shadow-sm"
              required
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-shadow shadow-sm"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-shadow shadow-sm"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-shadow shadow-sm"
            required
          />

          <Button
            type="submit"
            className="w-full rounded-3xl h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 transition-colors mt-2"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
          {status === "success" && (
            <p className="text-green-600 text-sm text-center">Submitted successfully.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm text-center">{errorMessage || "Submission failed. Please try again later."}</p>
          )}
          <p className="text-xs text-center text-gray-400 mt-1">
            By continuing, you agree to our <b>T&Cs</b> and <b>Privacy Policy</b>.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;


