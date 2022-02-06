let counter = 1;

const createRow = ($event) => {
    // Var declaration
    const $row = document.createElement('tr');
    const $id = document.createElement('th');
    const $name = document.createElement('td');
    const $email = document.createElement('td');
    const $age = document.createElement('td');

    $id.textContent = counter;
    $name.textContent = `name ${counter}`;
    $email.textContent = `name${counter}@example.com`;
    $age.textContent = counter * 3;

    $row.appendChild($id);
    $row.appendChild($name);
    $row.appendChild($email);
    $row.appendChild($age);

    const $body = document.querySelector('table tbody');
    $body.appendChild($row);
    counter += 1;
    console.log(counter);

}

const $addButton = document.getElementById('add');
$addButton.addEventListener('click', createRow);