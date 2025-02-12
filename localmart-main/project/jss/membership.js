
let selectedPlan = '';
let planPrice = 0;


function selectPlan(plan, price) {
    selectedPlan = plan;
    planPrice = price;
    document.getElementById('payment-section').style.display = 'block';
    alert(`You have selected the ${plan} plan. Please complete your payment below.`);
}


document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();  
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expDate = document.getElementById('expDate').value;
    const cvv = document.getElementById('cvv').value;

    if (!selectedPlan || !name || !email || !cardNumber || !expDate || !cvv) {
        alert('Please complete all fields.');
        return;
    }

    
    document.getElementById('receipt-section').style.display = 'block';
    document.getElementById('receipt-plan').innerText = `Plan: ${selectedPlan}`;
    document.getElementById('receipt-name').innerText = `Name: ${name}`;
    document.getElementById('receipt-email').innerText = `Email: ${email}`;
    document.getElementById('receipt-amount').innerText = `Amount Paid: $${planPrice}`;

  
    document.getElementById('payment-section').style.display = 'none';
});


function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    doc.text('--- FitWeb Payment Receipt ---', 10, 10);
    doc.text(`Plan: ${selectedPlan}`, 10, 20);
    doc.text(`Name: ${name}`, 10, 30);
    doc.text(`Email: ${email}`, 10, 40);
    doc.text(`Amount Paid: ${planPrice} Rs/-`, 10, 50);
    doc.text('-----------------------------', 10, 60);
    doc.text('Thank you for choosing FitWeb!', 10, 70);

    doc.save('receipt.pdf');  
}


function downloadImage() {
    const receiptElement = document.getElementById('receipt-section');
    
    html2canvas(receiptElement).then(function(canvas) {
        const image = canvas.toDataURL("image/png");
        
        const link = document.createElement('a');
        link.href = image;
        link.download = 'receipt.png';  
        link.click();  
    });
}
