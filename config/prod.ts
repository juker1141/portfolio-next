// 上傳用密鑰
const prod = {
  emailjsServicesID: process.env.NEXT_PUBLIC_EMAILJS_SERVICES_ID || "",
  emailjsTemplateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
  emailjsUserID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "",
};

export default prod;