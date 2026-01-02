import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: unknown) => {
  if (!axios.isAxiosError(error)) {
    return;
  }

  const res = error.response;

  // No response means network/CORS/server-down type error
  if (!res) {
    toast.warning("Network error. Please try again.");
    return;
  }

  if (res.status === 401) {
    toast.warning("Please login");
    window.location.assign("/login");
    return;
  }

  const errors = (res.data as any)?.errors;

  if (Array.isArray(errors)) {
    for (const val of errors) {
      toast.warning(val?.description ?? "An error occurred");
    }
    return;
  }

  if (errors && typeof errors === "object") {
    for (const key of Object.keys(errors)) {
      const firstMessage = errors[key]?.[0];
      if (firstMessage) {
        toast.warning(firstMessage);
      }
    }
    return;
  }

  if (res.data) {
    toast.warning(
      typeof res.data === "string" ? res.data : "An error occurred"
    );
  }
};
