import { CustomerInfo } from "@/types/contact";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function postCustomerInfo(payload: CustomerInfo) {
  const res = await fetch(`${baseURL}/management/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`요청 실패: ${res.status}`);
  }
  return res.json();
}

export async function postMailCustomerInfo(payload: CustomerInfo) {
  const res = await fetch(`${baseURL}/management/mail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    throw new Error(`요청 실패: ${res.status}`);
  }
  return res.text();
}
