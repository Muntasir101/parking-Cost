// script.js
function calculateCost() {
    const type = document.getElementById('type').value;
    const entryDate = new Date(document.getElementById('entry-date').value + 'T' + document.getElementById('entry-time').value);
    const exitDate = new Date(document.getElementById('exit-date').value + 'T' + document.getElementById('exit-time').value);

    const totalTime = Math.abs(exitDate - entryDate);
    const totalHours = Math.ceil(totalTime / (1000 * 60 * 60));
    const totalDays = Math.floor(totalHours / 24);
    const remainingHours = totalHours % 24;

    let cost = 0;

    switch (type) {
        case 'vip':
            cost = (totalDays * 18) + (remainingHours <= 5 ? 12 : 18);
            break;
        case 'short-term':
            if (totalHours <= 1) {
                cost = 2;
            } else {
                cost = 2 + Math.ceil((totalHours - 1) * 2);
                if (cost > 24) {
                    cost = totalDays * 24;
                }
            }
            break;
        case 'long-term-garage':
            cost = Math.min(12, remainingHours * 2) + totalDays * 12;
            break;
        case 'long-term-surface':
            cost = Math.min(10, remainingHours * 2) + totalDays * 10;
            break;
        case 'economy':
            cost = Math.min(9, remainingHours * 2) + totalDays * 9;
            break;
    }

    document.getElementById('result').innerText = `ESTIMATED PARKING COSTS: $${cost.toFixed(2)} (${totalDays} Days, ${remainingHours} Hours)`;
}
