function solveClasses() {
  class Pet {
    constructor(owner, name) {
      this.owner = owner;
      this.name = name;
      this.comments = [];
    }

    addComment(comment) {
      if (!this.comments.includes(comment)) {
        this.comments.push(comment);
        return `Comment is added.`;
      } else {
        throw new Error(`This comment is already added!`);
      }
    }

    feed() {
      return `${this.name} is fed`;
    }

    toString() {
      if (this.comments.length > 0) {
        this.comments.push("Special requirements:");
        this.comments.forEach((comment) => {
          this.comments.push(comment);
          this.comments.join("\n");
        });
      }
      return `Here is ${this.owner}'s pet ${this.name}.`;
    }
  }
  class Cat extends Pet {
    constructor(owner, name, insideHabits, scratching) {
      super(owner, name);
      this.insideHabits = insideHabits;
      this.scratching = scratching;
    }

    feed() {
      let result = super.feed();
      return result + `, happy and purring.`;
    }

    toString() {
      let final = super.toString();
      final +
        `Main information:\n${this.name} is cat with ${this.insideHabits}`;
      if (this.scratching === true) {
        final + `, but beware of scratches.`;
      }
      return final;
    }
  }

  class Dog extends Pet {
    constructor(owner, name, runningNeeds, trainability) {
      super(owner, name);
      this.runningNeeds = runningNeeds;
      this.trainability = trainability;
    }

    feed() {
      let output = super.feed();
      return output + `, happy and wagging tail.`;
    }

    toString() {
      let finaloutput = super.toString();
      return (
        finaloutput +
        `Main information:\n${this.name} is dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`
      );
    }
  }

  return {
    Pet,
    Cat,
    Dog,
  };
}
let classes = solveClasses();
let pet = new classes.Pet("Ann", "Merry");
console.log(pet.addComment("likes bananas"));
console.log(pet.addComment("likes sweets"));
console.log(pet.feed());
console.log(pet.toString());

let cat = new classes.Cat("Jim", "Sherry", "very good habits", true);
console.log(cat.addComment("likes to be brushed"));
console.log(cat.addComment("sleeps a lot"));
console.log(cat.feed());
console.log(cat.toString());

let dog = new classes.Dog("Susan", "Max", 5, "good");
console.log(dog.addComment("likes to be brushed"));
console.log(dog.addComment("sleeps a lot"));
console.log(dog.feed());
console.log(dog.toString());
