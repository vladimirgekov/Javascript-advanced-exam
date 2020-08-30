class VeterinaryClinic {
  constructor(clinicName, capacity) {
    this.clinicName = clinicName;
    this.capacity = capacity;
    this.clients = [];
    this.totalProfit = 0;
    this.currentWorkLoad = 0;
    this.data = {};
  }

  newCustomer(ownerName, petName, kind, procedures) {
    if (this.capacity <= 0) {
      throw new Error(`Sorry, we are not able to accept more patients!`);
    }
    if (this.clients.includes(petName)) {
      throw new Error(
        `This pet is already registered under ${this.ownerName} name! ${
          this.petName
        } is on our lists, waiting for ${procedures.split(", ")}.`
      );
    } else {
      this.clients.push({ ...ownerName, petName });
      currentWorkLoad++;
      return `Welcome ${this.petName}`;
    }
  }

  onLeaving(ownerName, petName) {
    if (!this.clients.includes(ownerName)) {
      throw new Error`Sorry, there is no such client!`();
    }
    if (this.clients.includes(ownerName[petName])) {
      throw new Error`Sorry, there are no procedures for ${this.petName}!`();
    }
    let profit = (ownerName.totalProfit += procedures * 500.0);
    currentWorkLoad++;
    return `Goodbye ${this.petName}. Stay safe!`;
  }

  toString() {
    let percent = (profit / currentWorkLoad).round();
    return `${
      this.clinicName
    } is ${percent}% busy today!\nTotal profit: ${profit}$\n${
      this.ownerName
    } with:\n
    ${
      this.petName
    } - a ${this.kind.toLowerCase()} that needs: ${this.procedures.split(
      ", "
    )}`;
  }
}
