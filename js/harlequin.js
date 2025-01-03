const harlequinText = () => {
  let harlequinWords = document.querySelectorAll(".harlequin");
  const colors = ["--main-yellow", "--main-green", "--main-red"];
  
  harlequinWords.forEach(el => {
    let inner = el.innerHTML;
    let spaces = 0; 
    inner = inner.split("").map((char, i) => {
      if (char === " ") {
        spaces++; 
        return `<span>&nbsp;</span>`; 
      }

      return `<span style="color:var(${colors[(i - spaces) % colors.length]})">${char}</span>`;
    }).join("");
    el.innerHTML = inner;
  });
};

harlequinText();