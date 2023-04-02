import {toast} from 'react-toastify'
const copyToClipboard = (text: any): void => {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  toast.success('texto copiado')
}
export {copyToClipboard}