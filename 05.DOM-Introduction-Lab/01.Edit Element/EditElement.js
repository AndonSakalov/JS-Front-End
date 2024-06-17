function editElement(reference, match, replacer) {
    while (reference.textContent.includes(match)) {
        reference.textContent = reference.textContent.replace(match, replacer);
    }
}