"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock } from "lucide-react";
import CustomerInfoForm from "./CustomerInfoForm";

export default function FloatingCustomerForm() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-main fixed bottom-6 left-6 z-40 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
      >
        승계 상담
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 left-6 z-50 w-[360px] max-w-[90vw]"
          >
            <div className="relative flex max-h-[75vh] flex-col rounded-2xl bg-white shadow-2xl">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 z-10 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>

              <div className="px-5 pt-5">
                <h3 className="text-lg font-bold">승계 상담 신청</h3>

                <div className="mt-1 flex items-center gap-1 text-xs text-green-600">
                  <Clock size={14} />
                  <span>지금 상담 가능</span>
                </div>

                <p className="mt-1 text-sm text-gray-500">간단히 남겨주시면 바로 연락드릴게요</p>
              </div>

              <div className="mt-4 flex-1 overflow-y-auto px-5 pb-5">
                <CustomerInfoForm onSuccess={() => setOpen(false)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
