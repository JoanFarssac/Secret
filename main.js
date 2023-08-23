const password = '2313182311231823';

function checkPassword() {
    let input = document.getElementById('input').value;
    
    if (input === password) {
        alert('Correcte!');
        document.getElementById('successMessage').classList.remove('hidden');
    } else {
        alert('Incorrece Gilipollas!');
    }
}
