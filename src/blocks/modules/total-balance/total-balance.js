const $selectDropdown = document.querySelector('.total-balance__balance-currency  .selectDropdown');
const $allBalanceSum = Array.from(document.querySelectorAll('.total-balance__sum .sum'));

$selectDropdown.addEventListener('click', function (e) {
    const $option = e.target;
    const optionDataAttr = $option.getAttribute('data-option');

    for (let totalSum of  $allBalanceSum) {
        const totalSumId = totalSum.getAttribute('id');

        if (totalSumId === optionDataAttr) {
            totalSum.classList.remove('inv');
            totalSum.classList.add('vis');
        } else {
            totalSum.classList.remove('vis');
            totalSum.classList.add('inv');
        }
    }
});

