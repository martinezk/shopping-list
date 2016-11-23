//Enter items they need to purchase by entering text and hitting
//"Return" or clicking the "Add item" button
//check and uncheck items on the list by clicking the "Check" button
//permanently remove items from the list

//Single state object
//--the object will have: array of grocery items
var shoppingItems: {
	items: []
};
//State modification functions (no JQuery)
//--function that adds items
var addItem = function (shoppingItems, item){
	shoppingItems.items.push(item);
}
//Render functions
//--JQuery functions that adds classes to items
//--will need: a class that checks and unchecks, a class that removes
var showItems = function(shoppingItems, element){
	var itemsHTML = shoppingItems.items.map(function(item){		
		item.addClass('shopping-item');   //shows item on list
	}
}
//--check on function
//--check off function
//--remove function

//Event listeners
//--listen for "Return" button 
//--listen for click of "Add Item" button
