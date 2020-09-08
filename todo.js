"use strict";

// Using an IIFE to protect my code

(function () {

// This holds todoList items.
	let todoItems = [];


	function addTodo(input) {

		const todo = {

			input,
			checked: false,
			id: Date.now(),
		};

		todoItems.push(todo);
		renderTodo(todo);

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
	
//	This renders the todoList.
	function renderTodo(todo) {
		const list = document.querySelector(".js-todo-list");
		const isChecked = todo.checked ? 'done': '';
		const node = document.createElement("li");

		node.setAttribute('class', 'todo-item ${isChecked}');
		node.setAttribute('data-key', todo.id);
		node.innerHTML = `
		<input id="${todo.id}" type="checkbox"/>
		<label for="${todo.id}" class="tick js-tick"></label>
		<span>${todo.text}</span>
		<button class="delete todo js-delete-todo">
		<svg><use href="#delete-icon"></use></svg>
		</button>
		`;

		list.append(node);
	}
}) ();