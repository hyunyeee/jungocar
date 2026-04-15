"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { postCustomerInfo } from "@/lib/api/customer";
import { CustomerInfo } from "@/types/contact";
import { InputLine } from "./InputLine";
import { TermsContent } from "./TermsContent";

interface Props {
  onSuccess?: () => void;
}

interface FormValues extends CustomerInfo {
  agreePrivacy: boolean;
}

export default function CustomerInfoForm({ onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
    setFocus,
  } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      customerName: "",
      customerPhone: "",
      desiredModel: "",
      agreePrivacy: false,
    },
  });

  const [openTerms, setOpenTerms] = useState(false);

  const agreePrivacy = watch("agreePrivacy");

  const isButtonActive = isValid && agreePrivacy;

  const onSubmit = async (data: CustomerInfo) => {
    const customerData = {
      customerName: data.customerName.trim(),
      customerPhone: data.customerPhone.trim(),
      desiredModel: data.desiredModel.trim(),
    };

    try {
      await postCustomerInfo(customerData);
      alert("문의가 정상적으로 제출되었습니다!");
      reset();
      setFocus("customerName");
      onSuccess?.();
    } catch {
      alert("제출 실패");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto w-full max-w-xl"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <InputLine
          label="이름"
          placeholder="홍길동"
          register={register("customerName", {
            required: "이름을 입력해주세요.",
          })}
          error={errors.customerName?.message}
        />

        <InputLine
          label="전화번호"
          placeholder="01012341234"
          type="tel"
          register={register("customerPhone", {
            required: "전화번호를 입력해주세요.",
            pattern: {
              value: /^0\d{1,2}-?\d{3,4}-?\d{4}$/,
              message: "전화번호 형식을 확인해주세요.",
            },
          })}
          error={errors.customerPhone?.message}
        />

        <InputLine
          label="차종"
          placeholder="레이"
          register={register("desiredModel", {
            required: "차종을 입력해주세요.",
          })}
          error={errors.desiredModel?.message}
        />

        <div className="space-y-3 rounded-xl bg-gray-50 p-4">
          <div className="flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                {...register("agreePrivacy", { required: true })}
                className="peer hidden"
              />
              <span className="peer-checked:bg-main peer-checked:border-main flex h-5 w-5 items-center justify-center rounded-md border transition peer-checked:text-white">
                ✓
              </span>
              <span className="text-sm font-medium">개인정보 이용 동의 (필수)</span>
            </label>

            <button
              type="button"
              onClick={() => setOpenTerms(!openTerms)}
              className="text-main p-1"
            >
              {openTerms ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {openTerms && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-3 rounded-lg border bg-white p-4">
                  <TermsContent />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type="submit"
          disabled={!isButtonActive}
          whileTap={{ scale: isButtonActive ? 0.97 : 1 }}
          className={`mt-4 w-full rounded-lg py-4 text-base font-semibold transition ${
            isButtonActive ? "bg-main text-white" : "cursor-not-allowed bg-gray-300 text-gray-500"
          } `}
        >
          승계상담 신청하기
        </motion.button>
      </form>
    </motion.div>
  );
}
