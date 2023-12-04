function randomWords(number, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            callback && callback(xhr.response);
        }
    };

    xhr.open(
        "GET",
        `https://random-word-api.herokuapp.com/word?number=${number}`
    );
    xhr.send();
}

module.exports = { randomWords };