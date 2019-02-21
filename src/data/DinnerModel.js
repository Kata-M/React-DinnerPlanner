const httpOptions = {
  headers: {'X-Mashape-Key': '3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767'}
};

const DinnerModel = function () {

  let numberOfGuests = 1;
  let totalCost = 0;
  var menu = [];
  var allTypes = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"];

  let observers = [];

  this.setNumberOfGuests = function (num) {
    numberOfGuests = num;
    notifyObservers();
  };

  this.getNumberOfGuests = function () {
    return numberOfGuests;
  };

  this.getTotalCost = function () {
    return totalCost;
  };

  this.setTotalCost = function (num) {
    totalCost = num;
    notifyObservers();
  };

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//DONE Lab 1
		var totalPrice = 0;
		menu.forEach(function(menuDish)
		{
		
			menuDish.extendedIngredients.forEach(function(ingredient) {
					 totalPrice += 1;
			});
		});
		return totalPrice*this.getNumberOfGuests();
		
	}

  // API Calls

  this.getAllDishes = function () {
    const url = 'http://sunset.nada.kth.se:8080/iprog/group/46/recipes/search'
    return fetch(url, httpOptions)
      .then(processResponse)
      .catch(handleError)
  }
  
  // API Helper methods

  const processResponse = function (response) {
    if (response.ok) {
      return response.json()
    }
    throw response;
  }
  
  const handleError = function (error) {
    if (error.json) {
      error.json().then(error => {
        console.error('getAllDishes() API Error:', error.message || error)
      })
    } else {
      console.error('getAllDishes() API Error:', error.message || error)
    }
  }

  // Observer pattern

  this.addObserver = function (observer) {
    observers.push(observer);
  };

  this.removeObserver = function (observer) {
    observers = observers.filter(o => o !== observer);
  };

  const notifyObservers = function () {
    observers.forEach(o => o.update());
  };
};

export const modelInstance = new DinnerModel();