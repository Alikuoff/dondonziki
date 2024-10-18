function playGame(userChoice) {
    const choices = ['tosh', 'qaychi', 'qog\'oz'];
    const botChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultText = document.getElementById('result-text');

    const outcomes = {
        'tosh': {'qaychi': 'Siz yutdingiz!', 'qog\'oz': 'Bot yutdi!'},
        'qaychi': {'qog\'oz': 'Siz yutdingiz!', 'tosh': 'Bot yutdi!'},
        'qog\'oz': {'tosh': 'Siz yutdingiz!', 'qaychi': 'Bot yutdi!'}
    };

    let result = userChoice === botChoice ? 'Durrang!' : outcomes[userChoice][botChoice];
    
    resultText.innerText = `Siz tanladingiz: ${userChoice}, Bot tanladi: ${botChoice}. ${result}`;
    
    if (result === 'Siz yutdingiz!') {
        resultText.classList.add('victory');
    } else {
        resultText.classList.remove('victory');
    }
}
