function sumCheckedValues() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalElement = document.getElementById('total');
    let total = 0;

    checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            total += parseInt(this.value);
        } else {
      total -= parseInt(this.value);
    }
    totalElement.textContent = total;
        });
    });
  }
