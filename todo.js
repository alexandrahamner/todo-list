"use strict";

// Using an IIFE to protect my code

(function () {

// This holds todo list items.
	let todoItems = [];


	function addTodo(input) {

		const todo = {

			input,
			checked: false,
			id: Date.now(),
		};

		todoItems.push(todo);
		console.log(todoItems);

	}

// This selects the form element
	const form = document.querySelector('.js-form');

	form.addEventListener('submit', function (event) {
		// prevents page refresh
		event.preventDefault();

		// selects the text input
		const input = document.querySelector('.js-todo-input');

		// gets the value of the input and removes the whitespace
		const text = input.value.trim();
		if (text !== "") {
			addTodo(text);
			input.value = '';
			input.focus();
		}
	});

}) ();