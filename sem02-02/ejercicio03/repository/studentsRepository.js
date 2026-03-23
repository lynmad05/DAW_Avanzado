let students = [
    {
        id: 1,
        name: "Juan Pérez",
        grade: 20,
        age: 23,
        email: "juan.perez@ejemplo.com",
        phone: "+51 987654321",
        enrollmentNumber: "2025001",
        course: "Diseño y Desarrollo de Software C24",
        year: 3,
        subjects: ["Algoritmos", "Bases de Datos", "Redes"],
        gpa: 3.8,
        status: "Activo",
        admissionDate: "2022-03-01"
    },
    {
        id: 2,
        name: "Maria Lopez",
        grade: 22,
        age: 21,
        email: "maria.lopez@ejemplo.com",
        phone: "+51 912345678",
        enrollmentNumber: "2025002",
        course: "Diseño y Desarrollo de Software C24",
        year: 2,
        subjects: ["Matematicas", "Fisica", "Programacion"],
        gpa: 3.5,
        status: "Activo",
        admissionDate: "2023-03-01"
    }
];

function getAll() {
    return students;
}

function getById(id) {
    return students.find(s => s.id === id);
}

function create(student) {
    // Validacion
    if (!student.name || !student.email || !student.course || !student.phone) {
        return null;
    }
    student.id = students.length + 1;
    students.push(student);
    return student;
}

function update(id, student) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...student };
        return students[index];
    }
    return null;
}

function remove(id) {
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        return students.splice(index, 1)[0];
    }
    return null;
}

function listByStatus(status) {
    return students.filter(s => s.status.toLowerCase() === status.toLowerCase());
}

function listByGrade(grade) {
    return students.filter(s => s.grade >= grade);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    listByStatus,
    listByGrade
};