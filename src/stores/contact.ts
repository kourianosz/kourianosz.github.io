import { create } from "zustand";
import { profile } from "../data/profile";
type ContactState = {
  status: "idle" | "copied" | "error";
  copyEmail: () => Promise<void>;
};
let resetTimer: ReturnType<typeof setTimeout> | undefined;
export const useContactStore = create<ContactState>((set) => ({
  status: "idle",
  copyEmail: async () => {
    clearTimeout(resetTimer);
    try {
      await navigator.clipboard.writeText(profile.email);
      set({ status: "copied" });
    } catch {
      set({ status: "error" });
      return;
    }
    resetTimer = setTimeout(() => set({ status: "idle" }), 2400);
  },
}));
