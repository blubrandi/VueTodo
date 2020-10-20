const app = Vue.createApp({
    data() {
        return {
            todo: "",
            todos: [],
            newTodo: null
        }
    },
    mounted() {
        if (localStorage.getItem("todos")) {
            try {
                this.todos = JSON.parse(localStorage.getItem("todos"))
            } catch(event) {
                localStorage.removeItem("todos")
            }
        }
    },
    methods: {
        addTodo() {
            if (!this.newTodo) {
                return
            }
                this.todos.push({name: this.newTodo, isCompleted: false, id: Date.now()});
                this.newTodo = " ";
                this.saveTodos()
        },
        markComplete(todo) {
            todo.isCompleted = ! todo.isCompleted
            console.log(todo.name, todo.isCompleted, todo.id)

            const parsedTodos = JSON.stringify(this.todos)
            localStorage.setItem("todos", parsedTodos)
        },
        saveTodos() {
            const parsedTodos = JSON.stringify(this.todos)
            localStorage.setItem("todos", parsedTodos)
        },
        deleteTodo(todo) {
            this.todos.splice(todo, 1)
            this.saveTodos()
            console.group(todos.count)
        }
    },

})

app.mount("#todos")