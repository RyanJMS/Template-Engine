// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee {
  constructor(name, role, id, email, officeNumber) {
    (this.name = name),
      (this.role = role),
      (this.id = id),
      (this.email = email),
      (this.officeNumber = officeNumber);
  }
}

module.exports = Manager;