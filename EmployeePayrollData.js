class EmployeePayrollData {
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const employeeDate = this.startDate == undefined ? "undefined": this.startDate.toLocaleDateString("en-US", options);
        return "ID: " + this.id + "\nName: " + this.name + "\nSalary: " + this.salary + "\nGender: " + this.gender + "\nStart date: " + this.startDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.name = "Mark";
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(3, "Shravya", 40000, "F", new Date());
console.log(newEmployeePayrollData.toString());
