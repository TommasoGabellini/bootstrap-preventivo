document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('preventivoForm');
    const tipoLavoroSelect = document.getElementById('tipoLavoro');
    const codicePromoInput = document.getElementById('codicePromo');
    const prezzoFinaleElement = document.getElementById('prezzoFinale');
    const promoErrorElement = document.getElementById('promoError');
    const promoSuccessElement = document.getElementById('promoSuccess');
    
    // Codici promozionali validi
    const validPromoCodes = ['YHDNU32', 'JANJC63', 'PWKCN25', 'SJDPO96', 'POCIE24'];
    
    // Prezzi orari per tipo di lavoro
    const prezziOrari = {
        'backend': 20.50,
        'frontend': 15.30,
        'analisi': 33.60
    };
    
    // Ore di lavoro fisse
    const oreLavoro = 10;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset messaggi
        promoErrorElement.style.display = 'none';
        promoSuccessElement.style.display = 'none';
        
        // Calcola il prezzo base
        const tipoLavoro = tipoLavoroSelect.value;
        const prezzoOrario = prezziOrari[tipoLavoro];
        let prezzoTotale = oreLavoro * prezzoOrario;
        
        // Verifica codice promozionale
        const codicePromo = codicePromoInput.value.trim().toUpperCase();
        let scontoApplicato = false;
        
        if (codicePromo !== '') {
            if (validPromoCodes.includes(codicePromo)) {
                prezzoTotale = prezzoTotale * 0.75;
                scontoApplicato = true;
                promoSuccessElement.style.display = 'block';
            } else {
                promoErrorElement.style.display = 'block';
            }
        }
        
        // Formatta e mostra il prezzo
        const prezzoFormattato = prezzoTotale.toFixed(2).replace('.', ',');
        prezzoFinaleElement.innerHTML = `<strong>€ ${prezzoFormattato}</strong>`;
        prezzoFinaleElement.style.color = scontoApplicato ? '#28a745' : '';
    });
});