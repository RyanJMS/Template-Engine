// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
  constructor(name, role, id, github) {
    (this.name = name),
      (this.role = role),
      (this.id = id),
      (this.github = github);
  }
}

module.exports = Engineer;
