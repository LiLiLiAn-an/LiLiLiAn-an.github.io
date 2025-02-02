let students = [];

function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const score = document.getElementById("score").value;

    const student = {
        name,
        age,
        gender,
        score,
    };

    students.push(student);
    displayStudents();
    clearForm();
}

function seekStudent() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const table = document.getElementById('studentTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    const rows = tbody.getElementsByTagName('tr');

    // 遍历表格的每一行
    for (let i = 0; i < rows.length; i++) {
        const nameCell = rows[i].getElementsByTagName('td')[0]; // 获取每一行的第一个单元格（姓名列）
        let find = 0;
        // 检查姓名列的内容是否与输入匹配
        if (nameCell.textContent.toLowerCase() === input) {
            rows[i].classList.add('highlight');
            find = 1;
        } else {
            rows[i].classList.remove('highlight');
        }
    }
    if(find==0){
        alert("未找到该学生");
    }
}

function displayStudents() {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.gender}</td>
            <td>${student.score}</td>
            <td>
                <button class="edit-btn" onclick="editStudent(${index})">编辑</button>
                <button class="delete-btn" onclick="deleteStudent(${index})">删除</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "男";
    document.getElementById("score").value = "";
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function editStudent(index) {
    const student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("gender").value = student.gender;
    document.getElementById("score").value = student.score;

    students.splice(index, 1);
    displayStudents();
}

window.onload = displayStudents;