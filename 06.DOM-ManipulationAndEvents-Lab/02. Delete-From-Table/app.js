function deleteByEmail() {
    let trElements = document.querySelectorAll('tbody tr');
    let emailToDelete = document.getElementsByTagName('input')[0].value;
    let parent = document.getElementsByTagName('tbody')[0];

    let exists = false;
    console.log(emailToDelete);
    for (const tr of trElements) {
        let currentEmail = tr.getElementsByTagName('td')[1].textContent;

        if (currentEmail === emailToDelete) {
            parent.removeChild(tr);
            exists = true;
        }
    }

    if (!exists) {
        document.getElementById('result').textContent = 'Not found.'
    } else {
        document.getElementById('result').textContent = 'Deleted.'
    }

    document.getElementsByTagName('input')[0].value = '';
}