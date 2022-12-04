let Money = 550;
let Water = 400;
let Milk = 540;
let Beans = 120;
let Cups = 9;

while (1) {
  let option = prompt("\nWrite action (buy, fill, take, remaining, exit):");
  switch (option) {
    case 'buy' :
      let CoffeeType = prompt("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:")
      if (CoffeeType == 1) {
        if (Water < 250) {
          console.log("Sorry, not enough water!");
          break;
        }
        if (Beans < 16) {
            console.log("Sorry, not enough coffee beans!");
          break;
        }
        if (Cups < 1) {
              console.log("Sorry, not enough disposable cups!");
          break;
        }
        Water = Water - 250;
        Beans = Beans - 16;
        Money = Money + 4;
        Cups = Cups - 1;
        console.log("I have enough resources, making you a coffee!");
        break;
      }
      else if (CoffeeType == 2) {
        if (Water < 350) {
          console.log("Sorry, not enough water!");
          break;
        }
        if (Beans < 20) {
            console.log("Sorry, not enough coffee beans!");
          break;
        }
        if (Milk < 75) {
              console.log("Sorry, not enough milk!");
          break;
        }
        if (Cups < 1) {
              console.log("Sorry, not enough disposable cups!");
          break;
        }
        Water = Water - 350;
        Milk = Milk - 75;
        Beans = Beans - 20;
        Money = Money + 7;
        Cups = Cups - 1;
        console.log("I have enough resources, making you a coffee!");
        break;
      }
      else if (CoffeeType == 3) {
        if (Water < 200) {
          console.log("Sorry, not enough water!");
          break;
        }
        if (Beans < 12) {
            console.log("Sorry, not enough coffee beans!");
          break;
        }
        if (Milk < 100) {
              console.log("Sorry, not enough milk!");
          break;
        }
        if (Cups < 1) {
              console.log("Sorry, not enough disposable cups!");
          break;
        }
        Water = Water - 200;
        Milk = Milk - 100;
        Beans = Beans - 12;
        Money = Money + 6;  
        Cups = Cups - 1;
        console.log("I have enough resources, making you a coffee!");
        break;
      }
      else
      break;
      
    case 'fill' :
      let WaterAdd = parseInt(Input("Write how many ml of water you want to add:\n"));
      Water = Water + WaterAdd;
      let MilkAdd = parseInt(Input("Write how many ml of milk you want to add:\n"));
      Milk = Milk + MilkAdd;
      let BeansAdd = parseInt(Input("Write how many grams of coffee beans you want to add:\n"));
      Beans = Beans + BeansAdd;
      let CupsAdd = parseInt(Input("Write how many disposable cups you want to add:\n"));
      Cups = Cups + CupsAdd;    
      break;
      
    case 'take' :
      console.log("I gave you " + Money);
      Money = 0;
      break;
  
    case 'remaining' :
      console.log("The coffee machine has:");
      console.log(Water + " ml of water");
      console.log(Milk + " ml of milk");
      console.log(Beans + " g of coffee beans");
      console.log(Cups + " disposable cups");
      console.log("$" + Money + " of money");
      break;
  
    case 'exit' :
      break;
  }
}
