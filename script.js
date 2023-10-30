document.addEventListener("DOMContentLoaded", function () {
  const submitBook = document.getElementById("inputBook");

  submitBook.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  const searchBooks = document.getElementById("searchBook");

  searchBooks.addEventListener("submit", function (event) {
    event.preventDefault();
    searchBook();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener("ondatasaved", () => {
  console.log("Data Berhasil Disimpan");
});

document.addEventListener("ondataloaded", () => {
  refreshDataFrombooks();
});

function changeText() {
  const checkbox = document.getElementById("inputBookIsComplete");
  const textSubmit = document.getElementById("textSubmit");

  if (checkbox.checked == true) {
    textSubmit.innerText = "Sudah Selesai Dibaca";
  } else {
    textSubmit.innerText = "Belum Selesai Dibaca";
  }
}
