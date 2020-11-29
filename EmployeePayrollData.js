class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    toString() {
        return "ID: " + this.id + "\nName: " + this.name + "\nSalary: " + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.name = "Mark";
console.log(employeePayrollData.toString());
