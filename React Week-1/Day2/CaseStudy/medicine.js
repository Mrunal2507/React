var heartCheckbox = document.getElementById('heartCheckbox');
var heartSubcategory = document.getElementById('heartSubcategory');
var skinCheckbox = document.getElementById('skinCheckbox');
var skinSubcategory = document.getElementById('skinSubcategory');
var searchInput = document.getElementById('searchInput');
var searchIcon = document.getElementById('searchIcon');

skinSubcategory.style.display = 'none';

heartCheckbox.addEventListener('change', function () {
    if (this.checked) {
      heartSubcategory.style.display = 'block';
    } else {
      heartSubcategory.style.display = 'none';
    }
});

skinCheckbox.addEventListener('change', function () {
    if (this.checked) {
      skinSubcategory.style.display = 'block';
    } else {
      skinSubcategory.style.display = 'none';
    }
});

searchInput.addEventListener('input', function () {
    if (this.value.trim() === '') {
        searchIcon.style.display = 'block';
    } else {
        searchIcon.style.display = 'none';
    }
});


