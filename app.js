function generatePassword() {
    const chars = "ABCDEFGHijklmnop0123456789@#$";
    let pass = "";
    for (let i = 0; i < 10; i++) {
        pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("password").innerText = pass;
}

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            alert("Lab connecté avec succès !");
        } catch (e) {
            alert("Connexion refusée");
        }
    } else {
        alert("Utilise le navigateur de ton Trust Wallet");
    }
}
