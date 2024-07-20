function addt() {
    const val = document.getElementById("inp1");
    const tasklist = document.getElementById("task-list");
    const tasktext = val.value;

    if (tasktext == '') {
        alert('Add some task.');
        return;
    }
    const listItem = document.createElement('li');
    listItem.textContent = tasktext;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        tasklist.removeChild(listItem);
    };
    listItem.appendChild(deleteButton);
    tasklist.appendChild(listItem);
    inputField.value = '';
}
