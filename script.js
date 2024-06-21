let dictionary = new Set();

function saveWord() {
    let word = document.getElementById('word').value.trim();
    if (word !== '') {
        dictionary.add(word.toLowerCase());
        document.getElementById('word').value = '';
        showMessage(`Word "${word}" added to dictionary.`);
    } else {
        showMessage('Please enter a word.');
    }
}

function searchWord() {
    let searchWord = document.getElementById('search')
        .value.trim().toLowerCase();
    if (dictionary.has(searchWord)) {
        showMessage(`Word "${searchWord}" found in dictionary.`);
    } else {
        showMessage(`Word "${searchWord}" not found in dictionary.`);
    }
}

function showMessage(message) {
    let messageElement = document.getElementById('message');
    messageElement.textContent = message;
}