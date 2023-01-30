const faqs = document.querySelectorAll(".faq_container");
const header = document.querySelectorAll(".faq_header");
const plus = document.querySelectorAll(".faq_header_plus");
const faq_content = document.querySelectorAll(".faq_content");

faqs.forEach((faq, index) => {
  faq.addEventListener("click", () => {
    if (header[index].classList.contains("header_active")) {
      header[index].classList.remove("header_active");
    } else {
      header[index].classList.add("header_active");
    }

    if (plus[index].classList.contains("plus_active")) {
      plus[index].classList.remove("plus_active");
    } else {
      plus[index].classList.add("plus_active");
    }

    if (faq_content[index].classList.contains("faq_content_active")) {
      faq_content[index].classList.remove("faq_content_active");
    } else {
      faq_content[index].classList.add("faq_content_active");
    }
  });
});
