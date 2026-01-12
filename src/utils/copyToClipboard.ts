/**
 * @param text 복사할 텍스트
 * @param callback 복사 후 실행할 콜백 함수 (optional)
 */
export function copyToClipboard(text: string, callback?: () => void) {
  navigator.clipboard.writeText(text);
  callback?.();
}
