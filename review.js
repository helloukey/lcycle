const reviews = document.querySelectorAll(".review_text");

reviews.forEach((review) => {
  // Trim review text & Add read more button
  const arr = review.innerHTML.split(" ");
  if (arr.length > 70) {
    // Cut to 70 words
    const newText = arr
      .filter((text, index) => {
        return index < 70;
      })
      .join(" ");
    review.innerHTML = newText;

    // Read more button
    const readMoreButton = document.createElement("span");
    readMoreButton.innerHTML = "Read more...";
    readMoreButton.classList.add("read_more");
    review.appendChild(readMoreButton);

    // Add onClick event to read more button
    if (readMoreButton) {
      readMoreButton.addEventListener("click", () => {
        review.innerHTML = arr.join(" ");
      });
    }
  }
});
