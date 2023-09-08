const notepadTextarea = document.getElementById('notepad');
        const saveButton = document.getElementById('save');
        const clearButton = document.getElementById('clear');

        // Load saved text from localStorage when the page loads
        window.addEventListener('load', () => {
            const savedText = localStorage.getItem('savedText');
            if (savedText) {
                notepadTextarea.value = savedText;
            }
        });

        // Save the text in localStorage when the Save button is clicked
        saveButton.addEventListener('click', () => {
            const textToSave = notepadTextarea.value;
            localStorage.setItem('savedText', textToSave);
        });

        // Clear the text in the notepad and localStorage when the Clear button is clicked
        clearButton.addEventListener('click', () => {
            notepadTextarea.value = '';
            localStorage.removeItem('savedText');
        });