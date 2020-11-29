class EmployeePayrollData {

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get id() {
        return this._id;
    }

    set id(id) {
        if(id > 0)
            this._id = id;
        else
            throw "Invalid ID";
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = /[A-Z][a-z]{2,}/;
        if(nameRegex.test(name))
            this._name = name;
        else
            throw "Invalid name";
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        if(salary > 0)
            this._salary = salary;
        else
            throw "Invalid salary";
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        let genderRegex = /^(F|M)$/;
        if(genderRegex.test(gender))
            this._gender = gender;
        else
            throw "Invalid gender";
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const employeeDate = this.startDate == undefined ? "undefined": this.startDate.toLocaleDateString("en-US", options);
        return "ID: " + this.id + "\nName: " + this.name + "\nSalary: " + this.salary + "\nGender: " + this.gender + "\nStart date: " + this.startDate;
    }
}

try {
    let employeePayrollData = new EmployeePayrollData(1, "Frank", 23000, "M", new Date());
    console.log(employeePayrollData.toString());
    employeePayrollData.id = 2;
    employeePayrollData.name = "Mark";
    employeePayrollData.salary = 20000;
    employeePayrollData.gender = "M";
    employeePayrollData.startDate = new Date();
    console.log(employeePayrollData.toString());

    let newEmployeePayrollData = new EmployeePayrollData(1, "Shravya", 40000, "F", new Date());
    console.log(newEmployeePayrollData.toString());
} catch(exception) {
    console.error(exception)
}
