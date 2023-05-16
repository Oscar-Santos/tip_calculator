
    const tipForm = document.getElementById('tipForm');
    const result = document.getElementById('result');

    tipForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const amount = parseFloat(document.getElementById('amount').value);
      const tip = amount * 0.15; // 15% tip

      result.textContent = `Recommended tip: $${tip.toFixed(2)}`;
    });

