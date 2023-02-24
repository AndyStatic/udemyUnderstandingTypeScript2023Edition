//Classes
class Department {
  static fiscalYear = 2023;
  //public name: string;
  //private employees: string[] = []; //accessible only inside class, so accounting.employees[2] = 'Cap' from outside will not work
  protected employees: string[] = []; //same as private, but available when inherited

  constructor(protected readonly id: string, private name: string) {
    //readonly is extra property, that will not allow property value to change after initialization
    //this.name = n;
    //console.log(Department.fiscalYear); //access static inside the class via class ref
  }

  //methods - functions inside class
  describe(this: Department) {
    //this: Department is additional type safty
    console.log(`Department (${this.id}): ${this.name}`); //instance of the object
  }

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  //static methods and properties
  static createEmployee(name: string) {
    return { name: name };
  }
}

abstract class AbstractDepartment {
  static fiscalYear = 2023;
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {}

  addEmployee(this: AbstractDepartment, employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: AbstractDepartment) {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  //Abstract class example
  abstract describe(this: AbstractDepartment): void;
}

const accounting = new Department("d1", "Accounting");
console.log(accounting);
accounting.describe();

accounting.addEmployee("Andy");
accounting.addEmployee("Candy");

accounting.printEmployeeInformation();

//Inheritance
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT"); //calls constructor of the base class
    this.admins = admins;
  }
}
const iTDepartment = new ITDepartment("d2", ["Max"]);
console.log(iTDepartment);

class AccountingDepartment extends AbstractDepartment {
  //Getter and setters
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please  pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting"); //calls constructor of the base class
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  //override properties of the base class
  addEmployee(name: string) {
    if (name === "Andy") {
      return;
    }
    this.employees.push(name);
  }

  //Abstract class example
  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
}
const accountingDepartment = new AccountingDepartment("d3", []);

accountingDepartment.mostRecentReport = "Annual 2022";
accountingDepartment.addReport("Annual 2023");
console.log(accountingDepartment.mostRecentReport);
console.log(accountingDepartment);
accountingDepartment.printReports();
accountingDepartment.addEmployee("Andy");
accountingDepartment.addEmployee("Candy");
accountingDepartment.printEmployeeInformation();

const employee1 = Department.createEmployee("Andy");
console.log(employee1, Department.fiscalYear);

//Abstract class example
accountingDepartment.describe();

//singletones and private constructors
class SingleAccountingDepartment extends Department {
  private static instance: SingleAccountingDepartment;

  private constructor(id: string) {
    super(id, "Single Accounting");
  }

  static getInstance() {
    if (SingleAccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new SingleAccountingDepartment("d4");
    return this.instance;
  }
}

const singleAccountingDepartment = SingleAccountingDepartment.getInstance();
console.log(singleAccountingDepartment);
